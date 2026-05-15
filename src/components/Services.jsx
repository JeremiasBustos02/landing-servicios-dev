'use client'

import { useEffect, useRef, useState } from 'react'
import { METHODOLOGY_PILLARS, STEPS } from '../data/constants'

export default function Services() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target)
            if (index !== -1) setActive(index)
          }
        })
      },
      { 

        rootMargin: "-50% 0px -49% 0px",
        threshold: 0 
      }
    )
    
    stepRefs.current.forEach(el => {
      if (el) observer.observe(el)
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="section">
      <div className="container">

        {/* Encabezado Metodología */}
        <div className="services-header reveal-fade">
          <span className="section-label-inv">Qué ofrecemos</span>
          <h2 className="heading-lg">Nuestra metodología</h2>
        </div>

        {/* Pilares Grid */}
        <div className="pillars-grid">
          {METHODOLOGY_PILLARS.map((pillar, i) => (
            <div key={i} className="pillar-card reveal-fade">
              
              <div className="flex items-center gap-4 mb-2">
                <div className="pillar-card__icon reveal-fade">
                  {pillar.icon}
                </div>
                <h3 className="heading-md pillar-card__title leading-tight reveal-fade">{pillar.title}</h3>
              </div>
              
              <p className="pillar-card__desc mb-2 reveal-fade">{pillar.description}</p>
              
              <ul className="flex flex-col gap-3 mt-auto w-full pt-4 border-t border-black/5">
                {pillar.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 reveal-fade">
                    {feature.type === 'check' ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-error)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 opacity-70">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    )}
                    <span className={`text-md reveal-fade ${feature.type === 'cross' ? 'line-through' : 'font-medium'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* Separador Proceso */}
        <div className="services-divider reveal-fade items-start">
          <span className="section-label-inv">El proceso</span>
          <h3 className="heading-md">¿Cómo es trabajar con nosotros?</h3>
        </div>

        {/* Proceso (Línea de tiempo) */}
        <div className="process">
          
          <div className="process__track reveal-fade">
            {STEPS.map((step, i) => (
              <div key={i} className="process__track-item">
                <button
                  className={[
                    'process__dot',
                    i < active && 'process__dot--done',
                    i === active && 'process__dot--active',
                  ].filter(Boolean).join(' ')}
                  onClick={() => setActive(i)}
                  aria-label={`Ir al paso ${step.number}: ${step.title}`}
                />
                {i < STEPS.length - 1 && (
                  <div className={['process__line', i < active && 'process__line--done'].filter(Boolean).join(' ')} />
                )}
              </div>
            ))}
          </div>

          <div className="process__steps reveal-fade">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                ref={el => { stepRefs.current[i] = el }}
                className={['process__step', i === active && 'process__step--active'].filter(Boolean).join(' ')}
                onClick={() => setActive(i)}
              >
                <span className="step-body__number text-accent font-bold reveal-fade" style={{display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem'}}>
                  Paso {step.number}
                </span>
                <h4 className="step-body__title heading-md reveal-fade" style={{fontSize: '1.25rem'}}>
                  {step.title}
                </h4>
                
                <div className="process__desc-wrap">
                  <div className="process__desc-inner ">
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