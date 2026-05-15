'use client'

import { METHODOLOGY_PILLARS } from '../data/constants'
import ProcessSteps from './ProcessSteps'

export default function Services() {
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
          <h3 className="heading-lg">¿Cómo es trabajar con nosotros?</h3>
        </div>

        <ProcessSteps />

      </div>
    </section>
  )
}