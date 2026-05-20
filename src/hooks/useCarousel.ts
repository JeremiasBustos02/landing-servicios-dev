import { useState, useEffect } from 'react'

export function useCarousel(itemsLength: number, intervalTime: number = 4000) {
  const [active, setActive] = useState<number>(0)

  useEffect(() => {
    if (itemsLength === 0) return

    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % itemsLength)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [itemsLength, intervalTime])

  return { active, setActive }
}