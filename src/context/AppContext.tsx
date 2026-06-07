import { createContext, useContext, useReducer, type ReactNode } from 'react'
import { type AppState, type AppAction } from '@/types'

const initialState: AppState = {
  currentFolder: 'root',
  sentence: [],
  hiddenButtons: [],
  voiceRate: 0.9,
  voicePitch: 1.1,
}

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, currentFolder: action.folder }
    case 'ADD_TO_SENTENCE':
      return { ...state, sentence: [...state.sentence, action.word] }
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
    default:
      return state
  }
}

interface AppContextType {
  state: AppState
  dispatch: React.Dispatch<AppAction>
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
