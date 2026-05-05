export type Stats = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'
export type Proficiency = 'not' | 'semi' | 'proficient'
export type Skill =
	| 'acrobatics'
	| 'animal_handling'
	| 'arcana'
	| 'athletics'
	| 'deception'
	| 'history'
	| 'insight'
	| 'intimidation'
	| 'investigation'
	| 'medicine'
	| 'nature'
	| 'perception'
	| 'performance'
	| 'persuasion'
	| 'religion'
	| 'sleight_of_hand'
	| 'stealth'
	| 'survival'
export type SpellSlot = '1st' | '2nd' | '3rd'
export type Notes = {
	type: 'NUMBER'
	count: null
	text: string
} | {
	type: 'COUNT'
	count: number
	text: string
}

export type CharacterSheetData = {
	name: string
	info: {
		dndClass: string
		subClass: string
		level: number
		race: string
		background: string
	}
	stats: Record<Stats, number>
	saving: {
		stats: Record<Stats, Proficiency>
		modifiers: string[]
	}
	proficiencies: {
		armour: string[]
		weapons: string[]
		tools: string[]
		languages: string[]
	}
	health: {
		current: number
		max: number
		temp: number
	}
	hit: {
		total: number
		hitDice: number
	}
	deathSaves: {
		successes: number
		failures: number
	}
	skills: Record<Skill, {	proficiency: Proficiency, override: number | null }>
	misc: {
		armourClass: number
		heroicInspiration: boolean
		speed: number
	}
	defence: string[]
	conditions: string[]
	spellSlots: Record<SpellSlot, { total: number, expended: number } | null>
	attacks: {
		name: string
		attackBonus: number
		damage: string
	}[]
	spell: {
		castingAbility: Stats
		saveDC: number
		attackModifier: number
	}
	senses: string[]
	notes: Notes[]
}
