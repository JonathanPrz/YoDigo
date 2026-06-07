import { useMemo } from 'react'
import { type Pictogram } from '@/types'
import { getScreen } from '@/data/pictograms'
import { useAppState } from '@/context/AppContext'
import PictoButton from './PictoButton'

const GRID_SIZE = 16

export default function Grid() {
  const { state } = useAppState()
  const pictograms = useMemo(() => getScreen(state.screen), [state.screen])

  const grid = useMemo(() => {
    const cells: (Pictogram | null)[] = new Array(GRID_SIZE).fill(null)
    for (const p of pictograms) {
      if (p.gridPosition >= 1 && p.gridPosition <= GRID_SIZE) {
        cells[p.gridPosition - 1] = p
      }
    }
    return cells
  }, [pictograms])

  return (
    <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-2 sm:gap-3 p-3 sm:p-4 min-h-0">
      {grid.map((picto, i) => (
        <div key={i} className="aspect-square">
          {picto && (
            <PictoButton pictogram={picto} />
          )}
        </div>
      ))}
    </div>
  )
}
