import { type CharacterSheetData } from './characterData'

export default {
	name: 'Penelope Ly-Khart',
	info: {
		dndClass: 'Wizard',
		level: 5,
		race: 'Human',
		background: 'Scribe'
	},
	stats: {
		str: 8,
		dex: 14,
		con: 15,
		int: 18,
		wis: 12,
		cha: 10
	},
	saving: {
		stats: {
			str: 'not',
			dex: 'not',
			con: 'not',
			int: 'proficient',
			wis: 'proficient',
			cha: 'not'
		},
		modifiers: []
	},
	proficiencies: {
		armour: [],
		weapons: ['simple'],
		tools: ['Calligrapher\'s Supplies', 'Cartographer\'s Tools'],
		languages: ['Common', 'Elvish', 'Gnomish', 'Undercommon']
	},
	health: {
		current: 32,
		max: 32,
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
		deception: 'not',
		history: 'proficient',
		insight: 'proficient',
		intimidation: 'not',
		investigation: 'proficient',
		medicine: 'proficient',
		nature: 'proficient',
		perception: 'proficient',
		performance: 'not',
		persuasion: 'not',
		religion: 'proficient',
		sleight_of_hand: 'not',
		stealth: 'not',
		survival: 'proficient'
	},
	misc: {
		armourClass: 12,
		heroicInspiration: false,
		speed: 30
	},
	defence: [],
	conditions: [],
	spellSlots: {
		'1st': { total: 4, expended: 4 },
		'2nd': { total: 3, expended: 3 },
		'3rd': { total: 2, expended: 2 }
	},
	attacks: [{
		name: 'Quarterstaff',
		attackBonus: 2,
		damage: '1d6 - 1'
	}],
	spell: {
		castingAbility: 'int',
		saveDC: 15,
		attackModifier: 7
	},
	senses: []
} satisfies CharacterSheetData
