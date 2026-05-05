import { PDFViewer } from '@react-pdf/renderer'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import character from '../characters/eldessPolaris.ts'
import Character from './Character.tsx'

// oxlint-disable-next-line typescript/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<PDFViewer style={{ width: '100vw', height: '100vh', border: 'none' }}>
			<Character character={character} />
		</PDFViewer>
	</StrictMode>
)
