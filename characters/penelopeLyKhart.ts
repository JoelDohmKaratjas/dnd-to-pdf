import { type CharacterSheetData } from './characterData'

export default {
	name: 'Penelope Ly-Khart',
	info: {
		dndClass: 'Wizard',
		subClass: 'Diviner',
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
		modifiers: ['ADV on Concentration']
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
		hitDice: 6
	},
	deathSaves: {
		successes: 0,
		failures: 0
	},
	skills: {
		acrobatics: { proficiency: 'not', override: null },
		animal_handling: { proficiency: 'not', override: null },
		arcana: { proficiency: 'proficient', override: 10 },
		athletics: { proficiency: 'not', override: null },
		deception: { proficiency: 'not', override: null },
		history: { proficiency: 'proficient', override: null },
		insight: { proficiency: 'proficient', override: null },
		intimidation: { proficiency: 'not', override: null },
		investigation: { proficiency: 'proficient', override: null },
		medicine: { proficiency: 'proficient', override: null },
		nature: { proficiency: 'proficient', override: null },
		perception: { proficiency: 'proficient', override: null },
		performance: { proficiency: 'not', override: null },
		persuasion: { proficiency: 'not', override: null },
		religion: { proficiency: 'proficient', override: null },
		sleight_of_hand: { proficiency: 'not', override: null },
		stealth: { proficiency: 'not', override: null },
		survival: { proficiency: 'proficient', override: null }
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
	senses: [],
	notes: [
		{
			type: 'COUNT',
			count: 3,
			text: 'Arcane Recovery'
		},
		{
			type: 'COUNT',
			count: 1,
			text: 'Heroic Inspiration'
		},
		{
			type: 'COUNT',
			count: 2,
			text: 'Portent Rolls'
		}
	]
} satisfies CharacterSheetData
