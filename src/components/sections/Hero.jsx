'use client'

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

      {/* Decorative grid background */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero__content">
        <span className="section-label hero-label">Desarrollo web & software</span>

        <h1 className="heading-xl hero-heading">
          Tu negocio merece<br />
          una web que<br />
          <span className="text-accent hero-heading--accent">realmente venda.</span>
        </h1>

        <p className="lead hero-lead">
          Diseño y desarrollo web claro, rápido y sin vueltas. Resultados desde la primera semana.
        </p>

        {/* Social proof strip */}
        <div className="hero-proof">
          <div className="hero-proof__avatars">
            {['MS','LG','FM'].map((init, i) => (
              <div key={i} className="hero-proof__avatar">{init}</div>
            ))}
          </div>
          <p className="hero-proof__text">
            <strong>+12 negocios</strong> ya confían en nosotros
          </p>
        </div>

        <div className="hero__actions">
          <a href="#contact" className="btn-primary-blur hero-cta-main">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Hablar por WhatsApp
          </a>
          <a href="#services" className="btn-secondary-blur">
            ¿Cómo trabajamos?
          </a>
        </div>
      </div>
    </section>
  )
}