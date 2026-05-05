import { type CharacterSheetData } from './characterData'

export default {
	name: 'Eldess Polaris',
	info: {
		dndClass: 'Druid',
		subClass: 'Circle of the Stars',
		level: 5,
		race: 'Elf, Wood',
		background: 'Hermit'
	},
	stats: {
		str: 8,
		dex: 14,
		con: 16,
		int: 10,
		wis: 18,
		cha: 11
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
		modifiers: ['ADV against Charmed', 'ADV on Concentration']
	},
	proficiencies: {
		armour: ['Light'],
		weapons: ['Simple'],
		tools: ['Herbalism Kit'],
		languages: ['Common', 'Elvish', 'Gnomish', 'Druidic', 'Undercommon']
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
		animal_handling: { proficiency: 'proficient', override: null },
		arcana: { proficiency: 'not', override: 4 },
		athletics: { proficiency: 'not', override: null },
		deception: { proficiency: 'not', override: null },
		history: { proficiency: 'not', override: null },
		insight: { proficiency: 'not', override: null },
		intimidation: { proficiency: 'not', override: null },
		investigation: { proficiency: 'not', override: null },
		medicine: { proficiency: 'proficient', override: null },
		nature: { proficiency: 'proficient', override: 7 },
		perception: { proficiency: 'proficient', override: null },
		performance: { proficiency: 'not', override: null },
		persuasion: { proficiency: 'not', override: null },
		religion: { proficiency: 'proficient', override: null },
		sleight_of_hand: { proficiency: 'not', override: null },
		stealth: { proficiency: 'not', override: null },
		survival: { proficiency: 'not', override: null }
	},
	misc: {
		armourClass: 14,
		heroicInspiration: false,
		speed: 35
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
		damage: '1d6 -1'
	}],
	spell: {
		castingAbility: 'wis',
		saveDC: 15,
		attackModifier: 7
	},
	senses: ['60ft darkvision'],
	notes: [
		{
			type: 'COUNT',
			count: 1,
			text: 'Longstrider'
		},
		{
			type: 'COUNT',
			count: 1,
			text: 'Pass without Trace'
		},
		{
			type: 'COUNT',
			count: 4,
			text: 'Guiding Bolt'
		},
		{
			type: 'COUNT',
			count: 2,
			text: 'Wild Shape'
		}
	]
} satisfies CharacterSheetData
