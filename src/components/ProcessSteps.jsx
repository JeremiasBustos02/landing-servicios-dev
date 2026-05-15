'use client'

import { useState } from 'react'
import { STEPS } from '../data/constants'

export default function ProcessSteps() {
  // Inicia con el primer paso abierto (0). Ponlo en 'null' si quieres que todos empiecen cerrados.
  const [active, setActive] = useState(0)

  const toggleStep = (i) => {
    // Si tocas el paso que ya está abierto, lo cierra. Si tocas otro, lo abre.
    setActive(active === i ? null : i)
  }

  return (
    <div className="process">
      {STEPS.map((step, i) => {
        const isActive = active === i;
        
        return (
          <div
            key={step.number}
            className={['process__step', isActive && 'process__step--active'].filter(Boolean).join(' ')}
            onClick={() => toggleStep(i)}
          >
            {/* Indicador visual (Timeline) */}
            <div className="process__indicator" aria-hidden="true">
              <button
                className={[
                  'process__dot',
                  // Marcamos como 'done' los pasos anteriores al que hemos tocado (opcional)
                  // Si prefieres que solo se pinte el activo, puedes quitar la siguiente línea:
                  active !== null && i < active && 'process__dot--done',
                  isActive && 'process__dot--active',
                ].filter(Boolean).join(' ')}
                aria-label={`Abrir paso ${step.number}`}
              />
              {i < STEPS.length - 1 && (
                <div className={['process__line', active !== null && i < active && 'process__line--done'].filter(Boolean).join(' ')} />
              )}
            </div>

            {/* Contenido del paso */}
            <div className="process__content">
              <span className="step-body__number">Paso {step.number}</span>
              <h4 className="step-body__title heading-md">{step.title}</h4>
              
              {/* Contenedor del Acordeón Animado */}
              <div className="process__accordion">
                <div className="process__accordion-inner">
                  <p className="step-body__desc">{step.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}