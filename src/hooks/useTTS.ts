import { useCallback, useRef } from 'react'

export function useTTS() {
  const voicesRef = useRef<SpeechSynthesisVoice[]>([])

  const getSpanishVoice = useCallback(() => {
    if (voicesRef.current.length === 0) {
      voicesRef.current = speechSynthesis.getVoices()
    }
    return (
      voicesRef.current.find(
        v => v.lang.startsWith('es') && v.name.includes('Spanish')
      ) ??
      voicesRef.current.find(v => v.lang.startsWith('es')) ??
      voicesRef.current[0]
    )
  }, [])

  const speak = useCallback(
    (text: string, rate = 0.9, pitch = 1.1) => {
      speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'es-ES'
      utterance.rate = rate
      utterance.pitch = pitch
      const voice = getSpanishVoice()
      if (voice) utterance.voice = voice
      speechSynthesis.speak(utterance)
    },
    [getSpanishVoice]
  )

  const stop = useCallback(() => {
    speechSynthesis.cancel()
  }, [])

  return { speak, stop }
}
