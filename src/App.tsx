import { useCallback, useState } from 'react'
import { AppProvider, useAppState } from '@/context/AppContext'
import { getScreen } from '@/data/pictograms'
import SentenceBar from '@/components/SentenceBar'
import Grid from '@/components/Grid'
import { PinGate, SettingsPanel } from '@/components/SettingsPanel'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

function YodigoApp() {
  const { state, dispatch } = useAppState()
  const [showPin, setShowPin] = useState(false)

  const currentScreen = getScreen(state.screen)
  const screenLabel = currentScreen.find(p => p.action === 'navigate')?.label ?? 'Inicio'

  const handleToggleButton = useCallback(
    (id: string) => dispatch({ type: 'TOGGLE_BUTTON', id }),
    [dispatch]
  )

  const handlePinSuccess = useCallback(() => {
    setShowPin(false)
    document.getElementById('settings-trigger')?.click()
  }, [])

  return (
    <div className="h-full flex flex-col bg-[#FFF8F0]">
      <SentenceBar />

      <div className="flex items-center justify-between px-4 py-1 shrink-0">
        <span className="text-xs font-medium text-gray-400">{screenLabel}</span>
        <Sheet>
          <SheetTrigger asChild>
            <button
              id="settings-trigger"
              onClick={() => setShowPin(true)}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Ajustes"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SettingsPanel
              onToggleButton={handleToggleButton}
              hiddenButtons={state.hiddenButtons}
            />
          </SheetContent>
        </Sheet>
      </div>

      <Grid />

      {showPin && <PinGate onSuccess={handlePinSuccess} />}
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <YodigoApp />
    </AppProvider>
  )
}
