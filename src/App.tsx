import { Document, Font, ImageBackground, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { createContext, Fragment, useContext } from 'react'
import type { CharacterSheetData, Skill, Stats } from '../characters/characterData'
import frame from './frame.png'
import novaMonoFont from './NovaMono-Regular.ttf'
import { typedObject } from './typedObject'

type AppProps = {
	character: CharacterSheetData
}

export default function App({ character }: AppProps) {
	return (
		<Document>
			<CharacterContext.Provider value={character}>
				<CharacterSheet />
			</CharacterContext.Provider>
		</Document>
	)
}

const proficiencyBonus: Record<number, number> = {
	1: 2,
	2: 2,
	3: 2,
	4: 2,
	5: 3,
	6: 3,
	7: 3,
	8: 3,
	9: 4,
	10: 4,
	11: 4,
	12: 4,
	13: 5,
	14: 5,
	15: 5,
	16: 5,
	17: 6,
	18: 6,
	19: 6,
	20: 6
}

const CharacterContext = createContext<CharacterSheetData | null>(null)
const useCharacterContext = () => {
	const characterContext = useContext(CharacterContext)
	if (!characterContext) throw new Error('CharacterContext is not defined')
	return {
		...characterContext,
		proficiencyBonus: proficiencyBonus[characterContext.info.level]
	}
}

const getModifier = (value: number, bonus: number) => {
	const modifier = ~~((value - 10) / 2) + bonus
	return modifier >= 0 ? `+${modifier}` : `${modifier}`
}

Font.register({
	family: 'NovaMono',
	src: novaMonoFont
})

const styles = StyleSheet.create({
	text: {
		fontFamily: 'NovaMono',
		position: 'absolute'
	}
})

const txt = (top: number, left: number, fontSize = 16) => [styles.text, { top, left, fontSize }]

const CharacterSheet = () => {
	return (
		<Page size='A4'>
			<ImageBackground src={frame}>
				<View style={{ height: '100%' }}>
					<Character />
					<Stats />
					<ProficiencyBonus />
					<SavingThrows />
					<Skills />
					<Health	/>
					<Attacks />
					<Proficiencies />
					<Defence />
					<Spell />
					<Passive />
					<Senses />
				</View>
			</ImageBackground>
		</Page>
	)
}

function Character() {
	const { info, name } = useCharacterContext()

	return (
		<>
			<Text style={txt(65, 60)}>{info.dndClass} - {info.level}</Text>
			<Text style={txt(60, 260, 24)}>{name}</Text>
		</>
	)
}

function Stats() {
	const { stats } = useCharacterContext()

	return (
		<>
			{typedObject.entries(stats).map(([stat, value], i) => {
				return (
					<Fragment key={stat}>
						<Text style={txt(168, 60 + (i * 56) + (value > 9 ? 0 : 7), 24)}>{value}</Text>
						<Text style={txt(200, 68 + (i * 56.5) - (i + 1 % 4), 12)}>{getModifier(value, 0)}</Text>
					</Fragment>
				)
			})}
		</>
	)
}

function ProficiencyBonus() {
	const { proficiencyBonus } = useCharacterContext()

	return <Text style={txt(292, 18)}>+{proficiencyBonus}</Text>
}

function SavingThrows() {
	const { saving, stats, proficiencyBonus } = useCharacterContext()

	return (
		<>
			{typedObject.entries(saving.stats).map(([stat, proficiency], i) => {
				const isProficient = proficiency === 'proficient'
				const value = getModifier(stats[stat], isProficient ? proficiencyBonus : 0)
				return (
					<Fragment key={stat}>
						<Text style={txt(356 + (i * 14.4), 33, 12)}>{value}</Text>
						{isProficient && <Text style={txt(357 + (i * 14.35), 23.75, 12)}>X</Text>}
					</Fragment>
				)
			})}

			<View style={[...txt(445, 23, 8), { width: 95 }]}>
				{saving.modifiers.map(modifier => (
					<Text key={modifier}>- {modifier}</Text>
				))}
			</View>
		</>
	)
}

const skillsStat = {
	acrobatics: 'dex',
	animal_handling: 'wis',
	arcana: 'int',
	athletics: 'str',
	deception: 'cha',
	history: 'int',
	insight: 'wis',
	intimidation: 'cha',
	investigation: 'int',
	medicine: 'wis',
	nature: 'int',
	perception: 'wis',
	performance: 'cha',
	persuasion: 'cha',
	religion: 'int',
	sleight_of_hand: 'dex',
	stealth: 'dex',
	survival: 'wis'
} satisfies Record<Skill, Stats>

function Skills() {
	const { skills, stats, proficiencyBonus } = useCharacterContext()
	return (
		<>
			{typedObject.entries(skills).map(([skill, proficiency], i) => {
				const statModifier = stats[skillsStat[skill]]
				const isProficient = proficiency === 'proficient'
				const value = getModifier(statModifier, isProficient ? proficiencyBonus : 0)
				return (
					<Fragment key={skill}>
						<Text style={txt(531 + (i * 14.4), 33, 12)}>{value}</Text>
						{isProficient && <Text style={txt(533 + (i * 14.35), 23.75, 12)}>X</Text>}
					</Fragment>
				)
			})}
		</>
	)
}

function Health() {
	const { misc, stats, health, hit } = useCharacterContext()
	const initiative = ~~((stats['dex'] - 10) / 2)

	return (
		<>
			<Text style={txt(265, 160)}>{misc.armourClass}</Text>
			<Text style={txt(265, 220 - (initiative < 0 ? 5 : 0))}>{initiative}</Text>
			<Text style={txt(265, 265)}>{misc.speed}ft</Text>
			<Text style={txt(315, 215, 12)}>{health.max}</Text>
			<Text style={txt(446, 172, 10)}>{hit.total}</Text>
			<Text style={txt(461, 179, 20)}>{hit.hitDice}</Text>
		</>
	)
}

function Attacks() {
	const { attacks } = useCharacterContext()

	return (
		<>
			{attacks.map(({ name, attackBonus, damage }, i) => {
				const isLong = name.length > 9
				return (
					<Fragment key={name}>
						<Text style={txt(538 + (i * 14.4) + (isLong ? 4 : 0), 149, isLong ? 8 : 12)}>{name}</Text>
						<Text style={txt(538 + (i * 14.4), 216, 12)}>+{attackBonus}</Text>
						<Text style={txt(538 + (i * 14.4), 252, 12)}>{damage}</Text>
					</Fragment>
				)
			})}
		</>
	)
}

type ProficiencyProps = {
	proficiencyName: keyof CharacterSheetData['proficiencies']
}

function Proficiency({ proficiencyName }: ProficiencyProps) {
	const { proficiencies } = useCharacterContext()

	return (
		<>
			<Text style={{ fontSize: 12, textTransform: 'capitalize' }}>{proficiencyName}</Text>
			{proficiencies[proficiencyName].map(proficiency => (
				<Text key={proficiency} style={{ fontSize: 8 }}>- {proficiency}</Text>
			))}
		</>
	)
}

function Proficiencies() {
	return (
		<View style={txt(620, 149)}>
			<Proficiency proficiencyName='armour' />
			<Proficiency proficiencyName='weapons' />
			<Proficiency proficiencyName='tools' />
			<Proficiency proficiencyName='languages' />
		</View>
	)
}

function Defence() {
	const { defence } = useCharacterContext()

	return (
		<View style={[...txt(158, 437, 8), { width: 200 }]}>
			{defence.map(defence => {
				return <Text key={defence}>- {defence}</Text>
			})}
		</View>
	)
}

function Spell() {
	const { spellSlots, spell } = useCharacterContext()

	return (
		<>
			{spellSlots['1st'] && <Text style={txt(282.5, 360)}>{spellSlots['1st'].total}</Text>}
			{spellSlots['2nd'] && <Text style={txt(337.5, 360)}>{spellSlots['2nd'].total}</Text>}
			{spellSlots['3rd'] && <Text style={txt(392.5, 360)}>{spellSlots['3rd'].total}</Text>}

			<Text style={[...txt(282.5, 525), { textTransform: 'uppercase' }]}>{spell.castingAbility}</Text>
			<Text style={txt(337.5, 530)}>{spell.saveDC}</Text>
			<Text style={txt(392.5, 530)}>+{spell.attackModifier}</Text>
		</>
	)
}

function Passive() {
	const { skills, stats, proficiencyBonus } = useCharacterContext()

	const getPassive = (passiveSkill: Skill) => {
		const statModifier = stats[skillsStat[passiveSkill]]
		const isProficient = skills[passiveSkill] === 'proficient'
		const modifier = ~~((statModifier + (isProficient ? proficiencyBonus : 0) - 10) / 2)
		return `+${modifier + 10}`
	}

	return (
		<>
			<Text style={txt(452, 335, 12)}>{getPassive('perception')}</Text>
			<Text style={txt(485, 335, 12)}>{getPassive('investigation')}</Text>
			<Text style={txt(518, 335, 12)}>{getPassive('insight')}</Text>
		</>
	)
}

function Senses() {
	const { senses } = useCharacterContext()

	return (
		<View style={txt(452, 490, 8)}>
			{senses.map(sense => <Text key={sense}>{sense}</Text>)}
		</View>
	)
}
