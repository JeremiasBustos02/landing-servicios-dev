'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { METHODOLOGY_PILLARS, STEPS } from '../data/constants'

export default function Services() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])
  const stepsContainerRef = useRef(null)
  const isScrollingRef = useRef(false)

  // Activar paso según scroll — sin scroll programático para evitar loops
  useEffect(() => {
    const container = stepsContainerRef.current
    if (!container) return

    const els = stepRefs.current.filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: 0,
      }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Click en dot → scroll suave al paso
  const handleDotClick = useCallback((index) => {
    isScrollingRef.current = true
    setActive(index)
    stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    // Liberar lock después de que termine el scroll (~700 ms)
    setTimeout(() => { isScrollingRef.current = false }, 750)
  }, [])

  return (
    <section id="services" className="section isolate-wrapper">
      <div className="container">

        <div className="services-header reveal-fade">
          <span className="section-label-inv">Qué ofrecemos</span>
          <h2 className="heading-lg">Nuestra metodología</h2>
        </div>

        <div className="pillars-grid">
          {METHODOLOGY_PILLARS.map((pillar, i) => (
            <div key={i} className="pillar-card reveal-fade">
              <div className="flex items-center gap-4 mb-2">
                <div className="pillar-card__icon">{pillar.icon}</div>
                <h3 className="heading-md pillar-card__title leading-tight">{pillar.title}</h3>
              </div>
              <p className="pillar-card__desc mb-2">{pillar.description}</p>

              <ul className="flex flex-col gap-3 mt-auto w-full pt-4 border-t border-black/5">
                {pillar.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.type === 'check' ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-error)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 opacity-70" aria-hidden="true">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                    <span className={`text-md ${feature.type === 'cross' ? 'line-through text-text-muted' : 'font-medium text-text-secondary'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-divider reveal-fade items-start">
          <span className="section-label-inv">El proceso</span>
          <h3 className="heading-md">¿Cómo es trabajar con nosotros?</h3>
        </div>

        <div className="process">
          {/* Track lateral de dots */}
          <div className="process__track reveal-fade" aria-hidden="true">
            {STEPS.map((step, i) => (
              <div key={i} className="process__track-item">
                <button
                  className={[
                    'process__dot',
                    i < active  && 'process__dot--done',
                    i === active && 'process__dot--active',
                  ].filter(Boolean).join(' ')}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Ir al paso ${step.number}: ${step.title}`}
                />
                {i < STEPS.length - 1 && (
                  <div className={['process__line', i < active && 'process__line--done'].filter(Boolean).join(' ')} />
                )}
              </div>
            ))}
          </div>

          {/* Lista de pasos */}
          <div ref={stepsContainerRef} className="process__steps">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[i] = el }}
                className={['process__step', i === active && 'process__step--active'].filter(Boolean).join(' ')}
                onClick={() => handleDotClick(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleDotClick(i)}
                aria-expanded={i === active}
              >
                <span className="step-body__number" aria-hidden="true">
                  Paso {step.number}
                </span>
                <h4 className="step-body__title heading-md">{step.title}</h4>
                <div className="process__desc-wrap" aria-hidden={i !== active}>
                  <div className="process__desc-inner">
                    <p className="step-body__desc">{step.description}</p>
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