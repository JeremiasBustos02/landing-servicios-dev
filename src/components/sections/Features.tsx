import SectionEyebrow from '../ui/SectionEyebrow'
import LiquidGlassCard from '../ui/LiquidGlassCard'
import { m } from 'motion/react'
import { METHODOLOGY_PILLARS, STEPS, EASE } from '../../data/constants'
import { CheckCircle, XCircle } from 'lucide-react'
import '../../styles/sections/services.css'
import type { SwitchOption } from '../../types'

interface FeaturesProps {
  activeTab: SwitchOption;
}

const CYBER_FEATURES = [
  {
    title: 'Pentesting caja negra y blanca',
    description: 'Simulamos ataques reales para encontrar puntos criticos antes que un atacante.',
    highlights: [
      'Escenario externo e interno',
      'Reporte con evidencia y CVSS',
      'Retoque y re-testeo incluido',
    ],
  },
  {
    title: 'Mitigacion DDoS y hardening',
    description: 'Blindamos tu infraestructura para resistir picos de trafico malicioso.',
    highlights: [
      'WAF, rate-limit y reglas personalizadas',
      'Proteccion por capas cloud + edge',
      'Monitoreo continuo y alertas',
    ],
  },
  {
    title: 'Auditoria de codigo y cloud',
    description: 'Revisamos repositorios, CI/CD y configuraciones cloud con enfoque preventivo.',
    highlights: [
      'OWASP, CIS y buenas practicas',
      'Hallazgos priorizados por impacto',
      'Plan de remediacion ejecutable',
    ],
  },
  {
    title: 'Respuesta a incidentes 24/7',
    description: 'Contencion inmediata y analisis forense para minimizar impacto.',
    highlights: [
      'Equipo dedicado en guardia',
      'Playbooks por severidad',
      'Informe post-mortem ejecutivo',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
}

export default function Features({ activeTab }: FeaturesProps) {
  return activeTab === 'software' ? (
    <m.section
      key="software-features"
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-2 gap-16 items-center"
    >
      <div className="flex flex-col justify-center items-center md:items-start gap-4">
        <SectionEyebrow label="Metodologia" />
        <h2 className="text-3xl md:text-5xl font-bold">Nuestra metodologia.</h2>
        <p className="text-lg text-white/60">
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
                      <CheckCircle className="size-4 text-emerald-400" />
                    ) : (
                      <XCircle className="size-4 text-rose-400" />
                    )}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <LiquidGlassCard className="process-card flex flex-col justify-center rounded-3xl p-8 md:p-10 mx-auto h-full w-full border border-white/10 shadow-2xl relative overflow-hidden bg-[#0c0c0c]/80 backdrop-blur-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[var(--shiny-center)]/10 blur-[60px] pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2 mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Proceso</h3>
          <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-[var(--text-primary)]/10 border border-[var(--text-primary)]/30 text-[var(--text-primary)]">
            En 3 pasos
          </span>
        </div>

        <div className="relative z-10 space-y-5">
          {STEPS.map(step => (
            <div key={step.number} className="step-card bg-black/50 p-5 rounded-2xl border border-white/5 hover:border-white/15 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <span className="step-title text-xl md:text-2xl font-semibold text-white order-2 sm:order-1">{step.title}</span>
                <span className="step-number text-xs font-bold text-white/50 uppercase tracking-widest order-1 sm:order-2 mb-1 sm:mb-0">Paso {step.number}</span>
              </div>
              <p className="step-description text-base text-white/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </LiquidGlassCard>
    </m.section>
  ) : (
    <m.section
      key="cyber-features"
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-1 gap-16 items-center"
    >
      <div className="flex flex-col justify-center items-center md:items-start w-full gap-6">
        <SectionEyebrow label="Ciberseguridad" />
        <h2 className="text-3xl md:text-5xl font-bold">Defensa activa, evidencia medible.</h2>
        <p className="text-lg text-white/60">
          Protegemos infraestructura critica con ataques simulados, auditorias profundas y respuesta inmediata.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {CYBER_FEATURES.map(feature => (
            <div key={feature.title} className="pillar-card flex flex-col h-full p-6">
              <div className="mb-2">
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
              
              <div className="mt-auto space-y-3">
                {feature.highlights.map(highlight => (
                  <div key={highlight} className="flex flex-row text-sm text-[var(--text-primary)] gap-2 items-start">
                    <CheckCircle className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
     
    </m.section>
  )
}
