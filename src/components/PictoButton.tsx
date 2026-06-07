import { useCallback } from 'react'
import {
  Hand, Plus, XCircle, LifeBuoy, User, Smile, Gamepad2, Users, MessageSquare,
  ArrowLeft, Apple, ShowerHead, Heart, Moon, Snowflake, Sun, Droplet, CupSoda,
  Cookie, Banana, Croissant, Armchair, Delete, HandHelping, Brain, Accessibility,
  Ear, Frown, Angry, ShieldAlert, EarOff, SunDim, Expand, HeartHandshake, Music,
  ToyBrick, MonitorSmartphone, MapPin, Car, Circle, CircleDot, Boxes, Puzzle,
  TabletSmartphone, Tv, House, School, TreePine, UserRound, UsersRound, Waves,
  Handshake,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { type Pictogram } from '@/types'
import { CATEGORY_COLORS } from '@/data/pictogramsData'
import { useAppState } from '@/context/AppContext'
import { useTTS } from '@/hooks/useTTS'
import { cn } from '@/utils/cn'

interface Props {
  pictogram: Pictogram
  disabled?: boolean
}

const iconMap: Record<string, LucideIcon> = {
  Hand, Plus, XCircle, LifeBuoy, User, Smile, Gamepad2, Users, MessageSquare,
  ArrowLeft, Apple, ShowerHead, Heart, Moon, Snowflake, Sun, Droplet, CupSoda,
  Cookie, Banana, Croissant, Armchair, Delete, HandHelping, Brain, Accessibility,
  Ear, Frown, Angry, ShieldAlert, EarOff, SunDim, Expand, HeartHandshake, Music,
  ToyBrick, MonitorSmartphone, MapPin, Car, Circle, CircleDot, Boxes, Puzzle,
  TabletSmartphone, Tv, House, School, TreePine, UserRound, UsersRound, Waves,
  Handshake,
}

export default function PictoButton({ pictogram, disabled }: Props) {
  const { dispatch, state } = useAppState()
  const { speak } = useTTS()
  const p = pictogram
  const colors = CATEGORY_COLORS[p.category] ?? CATEGORY_COLORS.connector

  const Icon = iconMap[p.icon] ?? Circle

  const handleClick = useCallback(() => {
    if (disabled) return

    switch (p.actionType) {
      case 'speak':
        speak(p.label, state.voiceRate, state.voicePitch)
        dispatch({ type: 'ADD_TO_SENTENCE', word: p.label })
        break
      case 'navigate':
        if (p.targetFolder) {
          dispatch({ type: 'NAVIGATE', folder: p.targetFolder })
        }
        break
      case 'sequence':
        break
    }
  }, [disabled, p, speak, state.voiceRate, state.voicePitch, dispatch])

  const isHidden = state.hiddenButtons.includes(p.id)

  if (isHidden) return null

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        'flex flex-col items-center justify-center gap-1 rounded-2xl border-[3px] p-2 transition-transform active:scale-95',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'min-h-0 w-full h-full overflow-hidden',
        colors.border,
        colors.bg,
      )}
      aria-label={p.label}
    >
      <Icon
        className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
        strokeWidth={1.8}
      />
      <span
        className="text-[10px] sm:text-xs font-semibold leading-tight text-center text-gray-700 line-clamp-2"
      >
        {p.label}
      </span>
    </button>
  )
}
