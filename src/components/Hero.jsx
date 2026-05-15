import { useRef, useState } from 'react'

export default function Hero() {
  const heroRef = useRef(null)
  const glowRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = e => {
    if (!glowRef.current || !heroRef.current) return
    const { left, top } = heroRef.current.getBoundingClientRect()
    const x = e.clientX - left - 250
    const y = e.clientY - top  - 250
    requestAnimationFrame(() => {
      glowRef.current.style.transform = `translate(${x}px, ${y}px)`
    })
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="hero"
    >
      <div ref={glowRef} className={`hero-glow ${hovered ? 'is-visible' : ''}`} />

      <div className="hero__content">
        <span className="section-label">Desarrollo web & software</span>

        <h1 className="heading-xl">
          Lleva tu negocio<br />
          al siguiente <span className="text-accent">nivel</span>
        </h1>

        <p className="lead">
          Sin vueltas ni complejidad innecesaria. Desarrollo web claro, rápido y funcional.
        </p>

        <div className="hero__actions">
          <a href="#pricing"  className="btn-primary-blur">Ver servicios</a>
          <a href="#services" className="btn-secondary-blur">¿Cómo trabajamos?</a>
        </div>
      </div>
    </section>
  )
}