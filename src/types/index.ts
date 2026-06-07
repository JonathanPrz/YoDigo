export type FitzgeraldColor = 'yellow' | 'green' | 'orange' | 'blue' | 'pink' | 'gray'

export type PictoAction = 'speak' | 'navigate' | 'speak-add' | 'back' | 'play' | 'clear'

export interface Pictogram {
  id: string
  label: string
  icon: string
  color: FitzgeraldColor
  action: PictoAction
  category?: 'immediate' | 'folder' | 'subfolder' | 'terminal'
  children?: string[]
  parentId?: string
  gridPosition: number
  hidden?: boolean
}

export interface FolderNode {
  id: string
  label: string
  icon: string
  color: FitzgeraldColor
  children: Pictogram[]
}
