import LiquidGlassCard from '../ui/LiquidGlassCard'
import { useState, useEffect } from 'react'

const PROJECTS = [
  {
    title: 'Nova Fitness',
    category: 'Landing Premium',
    image: '/ejemplo-web-1.webp'
  },
  {
    title: 'Vertex Studio',
    category: 'Web Corporativa',
    image: '/ejemplo-web-2.png'
  },
  {
    title: 'Lunexa Store',
    category: 'E-commerce',
    image: '/web-ejemplo-3.webp'
  }
]

export default function AppMockup() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % PROJECTS.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getPositionClass = (index: number): string => {
    const diff = (index - active + PROJECTS.length) % PROJECTS.length

    if (diff === 0) return 'carousel-card--active'
    if (diff === 1) return 'carousel-card--next'
    if (diff === PROJECTS.length - 1) return 'carousel-card--prev'
    return 'carousel-card--hidden'
  }

  return (
    <section className="max-w-[100vw] mx-auto px-4 py-20 overflow-hidden">
      <div className="relative w-full max-w-5xl mx-auto aspect-[16/9]">

        {PROJECTS.map((project, index) => (
          <div
            key={project.title}
            className={`carousel-card ${getPositionClass(index)}`}
          >
            <LiquidGlassCard className="w-full h-full rounded-[2rem] border border-white/10 overflow-hidden">
              <div className="relative w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="carousel-image"
                />

                <div className="carousel-gradient" />

                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <h3 className="text-2xl md:text-5xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mt-1 md:mt-2 text-sm md:text-xl font-medium">
                    {project.category}
                  </p>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`carousel-dot ${
              active === index
                ? 'carousel-dot--active'
                : 'carousel-dot--inactive'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>

    </section>
  )
}
