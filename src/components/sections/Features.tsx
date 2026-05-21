import SectionEyebrow from '../ui/SectionEyebrow'
import LiquidGlassCard from '../ui/LiquidGlassCard'
import { motion } from 'motion/react'
import { METHODOLOGY_PILLARS, STEPS, EASE } from '../../data/constants'
import { CheckCircle, XCircle } from 'lucide-react'
import '../../styles/sections/services.css'
import { SwitchOption } from '../../App'

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
    <motion.section
      key="software-features"
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-2 gap-16 items-center"
    >
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
      <LiquidGlassCard className="flex flex-col justify-center rounded-2xl p-6 mx-auto h-full">
        <div className="flex items-center justify-between text-sm text-white/70">
          <span className="text-lg font-semibold">Proceso</span>
          <span className="text-xs ">En 3 pasos</span>
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
    </motion.section>
  ) : (
    <motion.section
      key="cyber-features"
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-1 gap-16 items-center"
    >
      <div className="space-y-6 flex flex-col justify-center items-center md:items-start w-full">
        <SectionEyebrow label="Ciberseguridad" />
        <h2 className="text-3xl md:text-4xl font-semibold">Defensa activa, evidencia medible.</h2>
        <p className="text-white/60">
          Protegemos infraestructura critica con ataques simulados, auditorias profundas y respuesta inmediata.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {CYBER_FEATURES.map(feature => (
            <div key={feature.title} className="pillar-card flex flex-col h-full">
              <p className="text-sm font-semibold text-white">{feature.title}</p>
              <p className="pillar-description flex-grow">{feature.description}</p>
              <div className="mt-4 space-y-2">
                {feature.highlights.map(highlight => (
                  <div key={highlight} className="pillar-feature">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
     
    </motion.section>
  )
}
