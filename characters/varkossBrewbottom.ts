import { type CharacterSheetData } from './characterData'

export default {
	name: 'Varkoss Brewbottom',
	info: {
		dndClass: 'Paladin',
		subClass: 'Oath of Glory',
		level: 5,
		race: 'Dwarf',
		background: 'Custom'
	},
	stats: {
		str: 18,
		dex: 10,
		con: 14,
		int: 8,
		wis: 11,
		cha: 16
	},
	saving: {
		stats: {
			str: 'not',
			dex: 'not',
			con: 'not',
			int: 'not',
			wis: 'proficient',
			cha: 'proficient'
		},
		modifiers: []
	},
	proficiencies: {
		armour: ['Light'],
		weapons: ['Simple', 'Martial'],
		tools: ['Dice'],
		languages: ['Common', 'Dwarvish', 'Gnomish']
	},
	health: {
		max: 49,
		current: 49,
		temp: 0
	},
	hit: {
		total: 5,
		hitDice: 10
	},
	deathSaves: {
		successes: 0,
		failures: 0
	},
	skills: {
		acrobatics: { proficiency: 'not', override: null },
		animal_handling: { proficiency: 'not', override: null },
		arcana: { proficiency: 'not', override: null },
		athletics: { proficiency: 'proficient', override: null },
		deception: { proficiency: 'not', override: null },
		history: { proficiency: 'not', override: null },
		insight: { proficiency: 'proficient', override: null },
		intimidation: { proficiency: 'proficient', override: null },
		investigation: { proficiency: 'not', override: null },
		medicine: { proficiency: 'not', override: null },
		nature: { proficiency: 'not', override: null },
		perception: { proficiency: 'not', override: null },
		performance: { proficiency: 'not', override: 6 },
		persuasion: { proficiency: 'proficient', override: null },
		religion: { proficiency: 'not', override: null },
		sleight_of_hand: { proficiency: 'not', override: null },
		stealth: { proficiency: 'not', override: null },
		survival: { proficiency: 'not', override: null }
	},
	misc: {
		armourClass: 20,
		heroicInspiration: false,
		speed: 30
	},
	defence: ['Poison (Resistance)'],
	conditions: [],
	spellSlots: {
		'1st': { total: 4, expended: 4 },
		'2nd': { total: 2, expended: 2 },
		'3rd': null
	},
	attacks: [
		{
			name: 'Warhammer',
			attackBonus: 8,
			damage: '1d8 + 5'
		},
		{
			name: 'Javelin',
			attackBonus: 7,
			damage: '1d6 + 4'
		}
	],
	spell: {
		castingAbility: 'cha',
		saveDC: 14,
		attackModifier: 6
	},
	senses: ['120ft darkvision'],
	notes: [
		{
			type: 'NUMBER',
			count: null,
			text: 'Lay on Hands'
		},
		{
			type: 'COUNT',
			count: 1,
			text: 'Paladin\'s Smite'
		},
		{
			type: 'COUNT',
			count: 2,
			text: 'Channel Divinity'
		},
		{
			type: 'COUNT',
			count: 1,
			text: 'Faithful Steed'
		},
		{
			type: 'COUNT',
			count: 3,
			text: 'Stonecunning'
		}
	]
} satisfies CharacterSheetData
