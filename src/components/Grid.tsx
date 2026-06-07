import { useMemo } from 'react'
import { type Pictogram } from '@/types'
import { getFolder } from '@/data/pictogramsData'
import { useAppState } from '@/context/AppContext'
import PictoButton from './PictoButton'

const GRID_SIZE = 16

export default function Grid() {
  const { state } = useAppState()
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

  return (
    <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-2 sm:gap-3 p-3 sm:p-4 min-h-0">
      {grid.map((picto, i) => (
        <div key={i} className="aspect-square">
          {picto && <PictoButton pictogram={picto} />}
        </div>
      ))}
    </div>
  )
}
