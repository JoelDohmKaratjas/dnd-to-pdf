import { type CharacterSheetData } from './characterData'

export default {
	name: 'Wendell Periwinkle',
	info: {
		dndClass: 'Warlock',
		subClass: 'Fiend Patron',
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
		modifiers: ['ADV on Concentration']
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
		hitDice: 8
	},
	deathSaves: {
		successes: 0,
		failures: 0
	},
	skills: {
		acrobatics: { proficiency: 'not', override: null },
		animal_handling: { proficiency: 'not', override: null },
		arcana: { proficiency: 'proficient', override: null },
		athletics: { proficiency: 'not', override: null },
		deception: { proficiency: 'proficient', override: null },
		history: { proficiency: 'not', override: null },
		insight: { proficiency: 'not', override: null },
		intimidation: { proficiency: 'proficient', override: null },
		investigation: { proficiency: 'not', override: null },
		medicine: { proficiency: 'not', override: null },
		nature: { proficiency: 'not', override: null },
		perception: { proficiency: 'not', override: null },
		performance: { proficiency: 'proficient', override: null },
		persuasion: { proficiency: 'proficient', override: null },
		religion: { proficiency: 'not', override: null },
		sleight_of_hand: { proficiency: 'proficient', override: null },
		stealth: { proficiency: 'not', override: null },
		survival: { proficiency: 'not', override: null }
	},
	misc: {
		armourClass: 14,
		heroicInspiration: false,
		speed: 30
	},
	defence: ['Acid (Resistance)'],
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
	senses: ['60ft darkvision'],
	notes: [
		{
			type: 'COUNT',
			count: 3,
			text: 'Breath Weapon'
		},
		{
			type: 'COUNT',
			count: 1,
			text: 'Magical Cunning'
		},
		{
			type: 'COUNT',
			count: 1,
			text: 'Draconic Flight'
		}
	]
} satisfies CharacterSheetData
