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

  return (
    <section className="max-w-[100vw] mx-auto px-4 py-20 overflow-hidden">
      <div className="relative w-full max-w-5xl mx-auto aspect-[16/9]">
        
        {PROJECTS.map((project, index) => {
          const diff = (index - active + PROJECTS.length) % PROJECTS.length
          
          let positionClasses = ''
          if (diff === 0) {
            positionClasses = 'z-30 scale-100 opacity-100 translate-x-0'
          } else if (diff === 1) {
            positionClasses = 'z-20 scale-90 translate-x-[20%] md:translate-x-[30%] opacity-0'
          } else if (diff === PROJECTS.length - 1) {
            positionClasses = 'z-20 scale-90 -translate-x-[20%] md:-translate-x-[30%] opacity-0'
          } else {
            positionClasses = 'z-10 scale-75 opacity-0 translate-x-0'
          }

          return (
            <div
              key={project.title}
              className={`absolute inset-0 transition-all duration-700 ease-out w-full h-full ${positionClasses}`}
            >
              <LiquidGlassCard className="w-full h-full rounded-[2rem] border border-white/10 overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

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
          )
        })}
      </div>

      <div className="flex justify-center items-center gap-3 mt-6">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all duration-500 ease-out ${
              active === index 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
      
    </section>
  )
}