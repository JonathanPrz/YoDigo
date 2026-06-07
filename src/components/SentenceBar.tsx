import { useCallback } from 'react'
import { Play, Trash2 } from 'lucide-react'
import { useAppState } from '@/context/AppContext'
import { useTTS } from '@/hooks/useTTS'

export default function SentenceBar() {
  const { state, dispatch } = useAppState()
  const { speak, stop } = useTTS()

  const handlePlay = useCallback(() => {
    if (state.sentence.length === 0) return
    stop()
    const text = state.sentence.join(' ')
    speak(text, state.voiceRate, state.voicePitch)
  }, [state.sentence, state.voiceRate, state.voicePitch, speak, stop])

  const handleClear = useCallback(() => {
    stop()
    dispatch({ type: 'CLEAR_SENTENCE' })
  }, [dispatch, stop])

  return (
    <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-white border-b border-gray-100 shrink-0 min-h-[52px]">
      <div className="flex-1 flex items-center gap-1.5 overflow-x-auto min-h-[36px] scrollbar-none">
        {state.sentence.length === 0 ? (
          <span className="text-gray-400 text-sm italic px-1">
            Toca un pictograma...
          </span>
        ) : (
          state.sentence.map((word, i) => (
            <span
              key={`${i}-${word}`}
              className="shrink-0 bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200 animate-slide-up"
            >
              {word}
            </span>
          ))
        )}
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={handleClear}
          disabled={state.sentence.length === 0}
          className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Limpiar frase"
        >
          <Trash2 className="w-5 h-5" />
        </button>
        <button
          onClick={handlePlay}
          disabled={state.sentence.length === 0}
          className="p-2.5 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-colors disabled:opacity-30 disabled:pointer-events-none shadow-sm"
          aria-label="Reproducir frase"
        >
          <Play className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
