import { createContext, useContext, useReducer, type ReactNode } from 'react'

interface AppState {
  screen: string
  stack: string[]
  sentence: string[]
  hiddenButtons: string[]
  voiceRate: number
  voicePitch: number
  isSettingsOpen: boolean
}

type Action =
  | { type: 'NAVIGATE'; screen: string }
  | { type: 'GO_BACK' }
  | { type: 'ADD_TO_SENTENCE'; word: string }
  | { type: 'CLEAR_SENTENCE' }
  | { type: 'TOGGLE_BUTTON'; id: string }
  | { type: 'SET_VOICE_RATE'; rate: number }
  | { type: 'SET_VOICE_PITCH'; pitch: number }
  | { type: 'TOGGLE_SETTINGS' }

const initialState: AppState = {
  screen: 'root',
  stack: [],
  sentence: [],
  hiddenButtons: [],
  voiceRate: 0.9,
  voicePitch: 1.1,
  isSettingsOpen: false,
}

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'NAVIGATE':
      return {
        ...state,
        stack: [...state.stack, state.screen],
        screen: action.screen,
      }
    case 'GO_BACK': {
      if (state.stack.length === 0) return state
      const prev = state.stack[state.stack.length - 1]
      return {
        ...state,
        stack: state.stack.slice(0, -1),
        screen: prev,
      }
    }
    case 'ADD_TO_SENTENCE':
      return {
        ...state,
        sentence: [...state.sentence, action.word],
      }
    case 'CLEAR_SENTENCE':
      return { ...state, sentence: [] }
    case 'TOGGLE_BUTTON': {
      const id = action.id
      const hidden = state.hiddenButtons.includes(id)
      return {
        ...state,
        hiddenButtons: hidden
          ? state.hiddenButtons.filter(h => h !== id)
          : [...state.hiddenButtons, id],
      }
    }
    case 'SET_VOICE_RATE':
      return { ...state, voiceRate: action.rate }
    case 'SET_VOICE_PITCH':
      return { ...state, voicePitch: action.pitch }
    case 'TOGGLE_SETTINGS':
      return { ...state, isSettingsOpen: !state.isSettingsOpen }
    default:
      return state
  }
}

interface AppContextType {
  state: AppState
  dispatch: React.Dispatch<Action>
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppState() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppState must be used within AppProvider')
  return ctx
}
