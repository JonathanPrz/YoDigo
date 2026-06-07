import { type FitzgeraldCategory } from '@/types'

interface ColorConfig {
  border: string
  bg: string
  bgLight: string
}

const palette: Record<FitzgeraldCategory, ColorConfig> = {
  pronoun:   { border: '#F5C543', bg: '#FFF8E1', bgLight: '#FFFDE7' },
  action:    { border: '#66BB6A', bg: '#E8F5E9', bgLight: '#F1F8E9' },
  noun:      { border: '#FFA726', bg: '#FFF3E0', bgLight: '#FFF8E1' },
  adjective: { border: '#42A5F5', bg: '#E3F2FD', bgLight: '#E8EAF6' },
  social:    { border: '#EF5350', bg: '#FFEBEE', bgLight: '#FCE4EC' },
  connector: { border: '#9E9E9E', bg: '#F5F5F5', bgLight: '#FAFAFA' },
}

export function getColor(category: FitzgeraldCategory): ColorConfig {
  return palette[category]
}

export const ALL_COLORS = palette
