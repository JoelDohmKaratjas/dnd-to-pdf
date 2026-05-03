import { type CharacterSheetData } from './characterData'

export default {
	name: 'Wendell Periwinkle',
	info: {
		dndClass: 'Warlock',
		level: 5,
		race: 'Dragonborn',
		background: 'Charlatan'
	},
	stats: {
		str: 8,
		dex: 14,
		con: 16,
		int: 10,
		wis: 11,
		cha: 18
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
		weapons: ['Simple'],
		tools: ['Forgery Kit', 'Jeweler\'s Tools'],
		languages: ['Common', 'Draconic', 'Orc', 'Undercommon']
	},
	health: {
		current: 43,
		max: 43,
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
		arcana: 'proficient',
		athletics: 'not',
		deception: 'proficient',
		history: 'not',
		insight: 'not',
		intimidation: 'proficient',
		investigation: 'not',
		medicine: 'not',
		nature: 'not',
		perception: 'not',
		performance: 'proficient',
		persuasion: 'proficient',
		religion: 'not',
		sleight_of_hand: 'proficient',
		stealth: 'not',
		survival: 'not'
	},
	misc: {
		armourClass: 14,
		heroicInspiration: false,
		speed: 30
	},
	defence: [],
	conditions: [],
	spellSlots: {
		'1st': null,
		'2nd': null,
		'3rd': null
	},
	attacks: [{
		name: 'Rapier',
		attackBonus: 6,
		damage: '1d8 + 3'
	}],
	spell: {
		castingAbility: 'cha',
		saveDC: 15,
		attackModifier: 7
	},
	senses: ['60ft darkvision']
} satisfies CharacterSheetData
