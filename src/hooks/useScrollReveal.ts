import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const targets = document.querySelectorAll('.reveal-fade')
    targets.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
