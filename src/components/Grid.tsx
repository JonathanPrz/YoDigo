import { useMemo } from 'react'
import { ArrowLeft } from 'lucide-react'
import { type Pictogram } from '@/types'
import { getFolder } from '@/data/pictograms'
import { useAppState } from '@/context/AppContext'
import PictoButton from './PictoButton'

const GRID_SIZE = 16

export default function Grid() {
  const { state, dispatch } = useAppState()
  const folder = useMemo(() => getFolder(state.currentFolder), [state.currentFolder])

  const grid = useMemo(() => {
    const cells: (Pictogram | null)[] = new Array(GRID_SIZE).fill(null)
    if (!folder) return cells
    for (const p of folder.pictograms) {
      if (p.position >= 1 && p.position <= GRID_SIZE) {
        cells[p.position - 1] = p
      }
    }
    return cells
  }, [folder])

  const isRoot = state.currentFolder === 'root'

  return (
    <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-2 sm:gap-3 p-3 sm:p-4 min-h-0">
      {grid.map((picto, i) => {
        const pos = i + 1
        if (!isRoot && pos === 1) {
          return (
            <div key={i} className="aspect-square">
              <button
                onClick={() => dispatch({ type: 'GO_BACK' })}
                className="flex flex-col items-center justify-center gap-1 rounded-2xl border-[3px] border-[#9E9E9E] bg-[#F5F5F5] p-2 transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-0 w-full h-full overflow-hidden"
                aria-label="Atrás"
              >
                <ArrowLeft className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" strokeWidth={1.8} color="#9E9E9E" />
                <span className="text-[10px] sm:text-xs font-semibold leading-tight text-center text-gray-700 line-clamp-2">
                  Atrás
                </span>
              </button>
            </div>
          )
        }
        return (
          <div key={i} className="aspect-square">
            {picto && <PictoButton pictogram={picto} />}
          </div>
        )
      })}
    </div>
  )
}
