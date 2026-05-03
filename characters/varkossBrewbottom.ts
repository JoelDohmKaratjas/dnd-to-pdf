import { type CharacterSheetData } from './characterData'

export default {
	name: 'Varkoss Brewbottom',
	info: {
		dndClass: 'Paladin',
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
		languages: []
	},
	health: {
		max: 49,
		current: 49,
		temp: 0
	},
	hit: {
		total: 5,
		hitDice: 5
	},
	deathSaves: {
		successes: 0,
		failures: 0
	},
	skills: {
		acrobatics: 'not',
		animal_handling: 'not',
		arcana: 'not',
		athletics: 'proficient',
		deception: 'not',
		history: 'not',
		insight: 'proficient',
		intimidation: 'proficient',
		investigation: 'not',
		medicine: 'not',
		nature: 'not',
		perception: 'not',
		performance: 'not',
		persuasion: 'proficient',
		religion: 'not',
		sleight_of_hand: 'not',
		stealth: 'not',
		survival: 'not'
	},
	misc: {
		armourClass: 20,
		heroicInspiration: false,
		speed: 30
	},
	defence: ['Poison'],
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
	senses: ['120ft darkvision']
} satisfies CharacterSheetData
