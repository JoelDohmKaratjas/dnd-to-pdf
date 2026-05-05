import ReactPDF from '@react-pdf/renderer'
import { readdir } from 'node:fs/promises'
import type { CharacterSheetData } from '../characters/characterData'
import Character from './Character'

const files = await readdir('./characters')
for (const file of files) {
	if (file === 'characterData.ts') continue

	console.log('Loading - ', file)

	const characterModule = await import(`../characters/${file}`) as { default: CharacterSheetData }
	const character = characterModule.default
	const name = file.replace('.ts', '')
	await ReactPDF.render(<Character character={character} />, `./out/${name}.pdf`)
}

console.log('Finished - ', files.length - 1)
