export type { FitzgeraldCategory, Pictogram, Folder } from './saac'

export interface AppState {
  currentFolder: string
  folderStack: string[]
  sentence: string[]
  hiddenButtons: string[]
  voiceRate: number
  voicePitch: number
}

export type AppAction =
  | { type: 'NAVIGATE'; folder: string }
  | { type: 'GO_BACK' }
  | { type: 'ADD_TO_SENTENCE'; word: string }
  | { type: 'CLEAR_SENTENCE' }
  | { type: 'TOGGLE_BUTTON'; id: string }
  | { type: 'SET_VOICE_RATE'; rate: number }
  | { type: 'SET_VOICE_PITCH'; pitch: number }
