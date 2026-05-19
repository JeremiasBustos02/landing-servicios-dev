import SectionEyebrow from '../ui/SectionEyebrow'
import LiquidGlassCard from '../ui/LiquidGlassCard'
import { METHODOLOGY_PILLARS, STEPS } from '../../data/constants'
import { CheckCircle, XCircle } from 'lucide-react'
import '../../styles/sections/services.css'

export default function Features() {
  return (
    <section id="services" className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6 flex flex-col justify-center items-center md:items-start">
        <SectionEyebrow label="Metodologia" />
        <h2 className="text-3xl md:text-4xl font-semibold">Nuestra metodologia.</h2>
        <p className="text-white/60">
          Procesos claros, resultados reales y una comunicacion directa para que sepas siempre en que punto estamos.
        </p>
        <div className="space-y-4">
          {METHODOLOGY_PILLARS.map(pillar => (
            <div key={pillar.iconName} className="pillar-card">
              <p className="pillar-description">{pillar.description}</p>
              <div className="mt-4 space-y-2">
                {pillar.features.map(feature => (
                  <div key={feature.text} className="pillar-feature">
                    {feature.type === 'check' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400" />
                    )}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <LiquidGlassCard className="flex flex-col justify-center rounded-2xl p-6 mx-auto">
        <div className="flex items-center justify-between text-sm text-white/70">
          <span>Proceso</span>
          <span className="text-xs">En 3 pasos</span>
        </div>
        <div className="mt-6 space-y-4">
          {STEPS.map(step => (
            <div key={step.number} className="step-card">
              <div className="flex items-center justify-between">
                <span className="step-number">Paso {step.number}</span>
                <span className="step-title">{step.title}</span>
              </div>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </LiquidGlassCard>
    </section>
  )
}
