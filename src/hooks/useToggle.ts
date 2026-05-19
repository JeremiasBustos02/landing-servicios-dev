import { useState } from 'react'

export function useToggle(initial: number | null = null) {
  const [active, setActive] = useState<number | null>(initial)

  const toggle = (index: number) => {
    setActive(prev => (prev === index ? null : index))
  }

  return { active, toggle, setActive }
}
