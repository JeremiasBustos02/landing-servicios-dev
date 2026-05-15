'use client'

import { useState } from 'react'
import { STEPS } from '../data/constants'

export default function ProcessSteps() {
  const [active, setActive] = useState(null)

  return (
    <div className="process-cards">
      {STEPS.map((step, i) => {
        const isActive = active === i

        return (
          <button
            key={step.number}
            className={`process-card ${isActive ? 'process-card--active' : ''}`}
            onClick={() => setActive(isActive ? null : i)}
            aria-expanded={isActive}
          >
            {/* Número grande de fondo */}
            <span className="process-card__watermark" aria-hidden="true">
              {step.number}
            </span>

            {/* Cabecera siempre visible */}
            <div className="process-card__header">
              <span className="process-card__index">Paso {step.number}</span>
              <h4 className="process-card__title">{step.title}</h4>
            </div>

            {/* Descripción expandible */}
            <div className="process-card__body">
              <div className="process-card__body-inner">
                <p className="process-card__desc">{step.description}</p>
              </div>
            </div>

            {/* Flecha indicadora */}
            <span className="process-card__arrow" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
        )
      })}
    </div>
  )
}