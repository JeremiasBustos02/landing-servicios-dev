'use client'
import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { 
        rootMargin: "0px 0px -15% 0px",
        threshold: 0
      }
    )

    const elements = document.querySelectorAll('.reveal-fade')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}