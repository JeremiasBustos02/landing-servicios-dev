import { useRef, useState } from 'react'

export default function Hero() {
  const heroRef = useRef(null)
  const glowRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!glowRef.current || !heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    // Le restamos 250 (la mitad del ancho/alto del círculo) directo acá
    const x = e.clientX - rect.left - 250 
    const y = e.clientY - rect.top - 250

    window.requestAnimationFrame(() => {
      glowRef.current.style.transform = `translate(${x}px, ${y}px)`
    })
  }

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Quitamos el bg-section-off-white de acá para que se vea el fondo global
      className="relative overflow-hidden w-full min-h-[90vh] flex flex-col items-center justify-center px-4 text-center"
    >
      
      {/* El Glow, controlando la opacidad con una sola clase */}
      <div 
        ref={glowRef} 
        className={`hero-glow ${isHovered ? 'is-visible' : ''}`} 
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-4">
        <span className="section-label">Desarrollo web & software</span>

        <h1 className="heading-xl mb-6">
          Lleva tu negocio<br />
          al siguiente <span className="text-accent">nivel</span>
        </h1>

        <p className="lead mx-auto mb-10">
          Sin vueltas ni complejidad innecesaria. Desarrollo web claro, rápido y funcional.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#pricing"  className="btn-primary">Ver servicios</a>
          <a href="#services" className="btn-secondary">¿Cómo trabajamos?</a>
        </div>
      </div>
      
    </section>
  )
}