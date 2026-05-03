import { type CharacterSheetData } from './characterData'

export default {
	name: 'Eldess Polaris',
	info: {
		dndClass: 'Druid',
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
		modifiers: ['Advantage against Charmed']
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
		hitDice: 5
	},
	deathSaves: {
		successes: 0,
		failures: 0
	},
	skills: {
		acrobatics: 'not',
		animal_handling: 'proficient',
		arcana: 'not',
		athletics: 'not',
		deception: 'not',
		history: 'not',
		insight: 'not',
		intimidation: 'not',
		investigation: 'not',
		medicine: 'proficient',
		nature: 'proficient',
		perception: 'proficient',
		performance: 'not',
		persuasion: 'not',
		religion: 'proficient',
		sleight_of_hand: 'not',
		stealth: 'not',
		survival: 'not'
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
	senses: ['60ft darkvision']
} satisfies CharacterSheetData
