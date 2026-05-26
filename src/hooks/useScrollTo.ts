import { useLenis } from 'lenis/react'

export function useScrollTo() {
  const lenis = useLenis()

  const scrollTo = (target: string | number) => {
    lenis?.scrollTo(target)
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (!target.startsWith('#')) return
    e.preventDefault()
    if (target === '#') {
      lenis?.scrollTo(0)
      return
    }
    lenis?.scrollTo(target)
  }

  return { scrollTo, handleClick }
}
