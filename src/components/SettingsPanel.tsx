import { useState, useCallback } from 'react'
import { Settings2 } from 'lucide-react'
import { INITIAL_FOLDERS } from '@/data/pictogramsData'

const PIN_ANSWER = 12

export function PinGate({ onSuccess }: { onSuccess: () => void }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = useCallback(() => {
    if (parseInt(input) === PIN_ANSWER) {
      setInput('')
      setError(false)
      onSuccess()
    } else {
      setError(true)
      setTimeout(() => setError(false), 1000)
    }
  }, [input, onSuccess])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={(e) => { if (e.target === e.currentTarget) onSuccess() }}
    >
      <div className="bg-white rounded-2xl p-6 max-w-xs w-full mx-4 shadow-xl">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => { e.preventDefault(); handleSubmit() }}
        >
          <h2 className="text-lg font-semibold text-center">Ajustes de tutor</h2>
          <p className="text-sm text-gray-500 text-center">
            Resuelve para acceder: 3 × 4 = ?
          </p>
          <input
            type="number"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false) }}
            className={`text-center text-2xl p-3 rounded-xl border-2 outline-none transition-colors ${
              error
                ? 'border-red-400 bg-red-50'
                : 'border-gray-200 focus:border-green-400'
            }`}
            autoFocus
            onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit() }}
          />
          {error && <p className="text-red-500 text-xs text-center">Intenta de nuevo</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export function SettingsPanel({
  onToggleButton,
  hiddenButtons,
}: {
  onToggleButton: (id: string) => void
  hiddenButtons: string[]
}) {
  const allPictograms = Object.values(INITIAL_FOLDERS).flatMap((f) => f.pictograms)

  const grouped = allPictograms.reduce<Record<string, typeof allPictograms>>(
    (acc, p) => {
      const cat = p.category
      if (!acc[cat]) acc[cat] = []
      acc[cat].push(p)
      return acc
    },
    {}
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Settings2 className="w-5 h-5 text-gray-500" />
        <span className="font-semibold text-base">Ajustes de tutor</span>
      </div>
      <p className="text-xs text-gray-500">
        Activa o desactiva botones para simplificar la pantalla.
      </p>
      <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto">
        {Object.entries(grouped).map(([category, pictos]) => (
          <div key={category}>
            <span className="text-xs font-semibold text-gray-400 uppercase">
              {category}
            </span>
            {pictos.map((p) => (
              <label
                key={p.id}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
              >
                <span className="text-sm text-gray-700">{p.label}</span>
                <button
                  onClick={() => onToggleButton(p.id)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    hiddenButtons.includes(p.id) ? 'bg-gray-300' : 'bg-green-400'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      hiddenButtons.includes(p.id)
                        ? 'translate-x-0'
                        : 'translate-x-5'
                    }`}
                  />
                </button>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
