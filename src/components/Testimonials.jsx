'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { TESTIMONIALS } from '../data/constants'

export default function Testimonials() {
  const trackRef = useRef(null)

  // Estado para el drag
  const drag = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    velX: 0,
    lastX: 0,
    lastTime: 0,
    rafId: null,
  })

  // Pausar/reanudar la animación CSS
  const setPaused = useCallback((paused) => {
    const el = trackRef.current
    if (!el) return
    el.style.animationPlayState = paused ? 'paused' : 'running'
  }, [])

  /* ── Handlers de puntero (mouse + touch unificado) ── */
  const onPointerDown = useCallback((e) => {
    const el = trackRef.current
    if (!el) return

    // Cancelar inercia en vuelo
    if (drag.current.rafId) cancelAnimationFrame(drag.current.rafId)

    drag.current.active = true
    drag.current.startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0
    drag.current.scrollLeft = el.parentElement.scrollLeft
    drag.current.velX = 0
    drag.current.lastX = drag.current.startX
    drag.current.lastTime = performance.now()

    setPaused(true)
    el.parentElement.style.cursor = 'grabbing'
  }, [setPaused])

  const onPointerMove = useCallback((e) => {
    if (!drag.current.active) return
    e.preventDefault()

    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0
    const now = performance.now()
    const dt = now - drag.current.lastTime

    // Velocidad instantánea (px/ms)
    if (dt > 0) {
      drag.current.velX = (clientX - drag.current.lastX) / dt
    }
    drag.current.lastX = clientX
    drag.current.lastTime = now

    const diff = clientX - drag.current.startX
    const el = trackRef.current
    if (el) {
      // Desplazamos el scroll del contenedor
      el.parentElement.scrollLeft = drag.current.scrollLeft - diff
    }
  }, [])

  const onPointerUp = useCallback(() => {
    if (!drag.current.active) return
    drag.current.active = false

    const el = trackRef.current
    if (!el) return
    el.parentElement.style.cursor = ''

    // Inercia: desaceleración suave
    let vel = drag.current.velX * 14  // amplificador
    const friction = 0.93

    const momentum = () => {
      if (Math.abs(vel) < 0.5) {
        // Reanudamos la animación CSS cuando el usuario deja de interactuar
        setPaused(false)
        return
      }
      el.parentElement.scrollLeft -= vel
      vel *= friction
      drag.current.rafId = requestAnimationFrame(momentum)
    }
    drag.current.rafId = requestAnimationFrame(momentum)
  }, [setPaused])

  // Conectar eventos al contenedor (no al track)
  useEffect(() => {
    const container = trackRef.current?.parentElement
    if (!container) return

    // Mouse
    container.addEventListener('mousedown', onPointerDown)
    window.addEventListener('mousemove', onPointerMove)
    window.addEventListener('mouseup', onPointerUp)

    // Touch
    container.addEventListener('touchstart', onPointerDown, { passive: true })
    container.addEventListener('touchmove', onPointerMove, { passive: false })
    container.addEventListener('touchend', onPointerUp)

    // Hover sobre el track pausa la animación CSS
    const onEnter = () => { if (!drag.current.active) setPaused(true) }
    const onLeave = () => { if (!drag.current.active) setPaused(false) }
    container.addEventListener('mouseenter', onEnter)
    container.addEventListener('mouseleave', onLeave)

    return () => {
      container.removeEventListener('mousedown', onPointerDown)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('mouseup', onPointerUp)
      container.removeEventListener('touchstart', onPointerDown)
      container.removeEventListener('touchmove', onPointerMove)
      container.removeEventListener('touchend', onPointerUp)
      container.removeEventListener('mouseenter', onEnter)
      container.removeEventListener('mouseleave', onLeave)
      if (drag.current.rafId) cancelAnimationFrame(drag.current.rafId)
    }
  }, [onPointerDown, onPointerMove, onPointerUp, setPaused])

  // 3 copias aseguran loop infinito visual sin saltos
  const cards = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section id="testimonials" className="section overflow-hidden isolate-wrapper">
      <div className="container border-t border-black/20 mt-4 pt-16">

        <div className="flex flex-col items-start gap-4 mb-8 text-left">
          <span className="section-label-inv reveal-fade">Casos de éxito</span>
          <h2 className="heading-lg reveal-fade">Lo que dicen quienes ya confiaron</h2>
        </div>

        {/* carousel-container ahora tiene overflow-x:auto para el drag nativo */}
        <div className="carousel-container reveal-fade" style={{ cursor: 'grab' }}>
          <div ref={trackRef} className="carousel-track">
            {cards.map((item, index) => (
              <div
                key={index}
                className="testimonial-card shrink-0"
                style={{ width: 'clamp(280px, 80vw, 400px)' }}
                // Evitar que el drag se confunda con click en la card
                onMouseDown={(e) => e.preventDefault()}
              >
                <svg
                  width="32" height="32" viewBox="0 0 24 24" fill="currentColor"
                  style={{ color: 'var(--border-green)' }}
                  className="mb-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="testimonial-text mb-6">"{item.text}"</p>
                <div className="testimonial-author mt-auto">
                  <div className="avatar">{item.initials}</div>
                  <div className="flex flex-col">
                    <span className="font-bold" style={{ fontFamily: 'var(--font-display)' }}>{item.name}</span>
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}