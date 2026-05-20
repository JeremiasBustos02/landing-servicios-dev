import { motion } from 'motion/react'
import { PLANS, EASE } from '../../data/constants'
import SectionEyebrow from '../ui/SectionEyebrow'
import PrimaryButton from '../ui/PrimaryButton'
import { SwitchOption } from '../../App'

interface PricingProps {
  activeTab: SwitchOption;
}

const CYBER_PLANS = [
  {
    title: 'Auditoria de riesgo inicial',
    description:
      'Radiografia completa de tu superficie de ataque y un roadmap de remediacion priorizado.',
    price: '700 – 1200 USD',
    features: [
      'Inventario de activos y accesos',
      'Analisis de configuracion y permisos',
      'Reporte ejecutivo + tecnico',
      'Plan de mitigacion en 7 dias',
    ],
  },
  {
    title: 'Pentesting caja negra/blanca',
    description:
      'Simulacion de ataques reales sobre apps, APIs y redes internas.',
    price: '1500 – 3500 USD',
    features: [
      'OWASP + pruebas personalizadas',
      'Hallazgos con CVSS y evidencia',
      'Reunion de cierre con tu equipo',
      'Re-testeo de vulnerabilidades criticas',
    ],
    highlighted: true,
  },
  {
    title: 'SecOps continuo',
    description:
      'Monitoreo, hardening y respuesta a incidentes con SLA claro.',
    price: 'Desde 900 USD/mes',
    features: [
      'Alertas 24/7 y playbooks activos',
      'SIEM + correlacion de eventos',
      'Remediacion mensual priorizada',
      'Reportes para compliance y auditoria',
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

export default function Pricing({ activeTab }: PricingProps) {
  return activeTab === 'software' ? (
    <motion.section
      key="software-pricing"
      id="pricing"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="relative max-w-6xl mx-auto py-10 px-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <SectionEyebrow label="Planes" />
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">Soluciones para cada etapa.</h2>
          <p className="text-white/60 mt-3 max-w-md">
            Desde una landing simple hasta sistemas completos y escalables.
          </p>
        </div>
      </div>
      <div className="pricing-grid relative z-10 mt-12 ">
        {PLANS.map(plan => (
          <div
            key={plan.title}
            className={`liquid-glass rounded-2xl border border-white/10 p-6 flex flex-col justify-between h-full hover:-translate-y-2 transition-all duration-500 ${
              plan.highlighted ? 'pricing-pro border-cyan-200/40' : ''
            }`}
          >
            <div>
              <p className="text-sm text-white/70">{plan.title}</p>
              <h3 className="text-4xl font-bold mt-3">{plan.price}</h3>
              <p className="text-white/50 mt-2">{plan.description}</p>
            </div>
            <div className="space-y-2 text-sm text-white/70 mt-6">
              {plan.features.map(feature => (
                <div key={feature} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {feature}
                </div>
              ))}
            </div>
            <PrimaryButton label="Empezar proyecto" className="liquid-glass-card w-full justify-center mt-6" />
          </div>
        ))}
      </div>
    </motion.section>
  ) : (
    <motion.section
      key="cyber-pricing"
      id="pricing"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="relative max-w-6xl mx-auto py-10 px-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <SectionEyebrow label="Planes" />
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">Seguridad real en cada etapa.</h2>
          <p className="text-white/60 mt-3 max-w-md">
            Paquetes diseñados para cubrir desde un primer diagnostico hasta defensa continua.
          </p>
        </div>
      </div>
      <div className="pricing-grid relative z-10 mt-12 ">
        {CYBER_PLANS.map(plan => (
          <div
            key={plan.title}
            className={`liquid-glass rounded-2xl border border-white/10 p-6 flex flex-col justify-between h-full hover:-translate-y-2 transition-all duration-500 ${
              plan.highlighted ? 'pricing-pro border-red-400/40' : ''
            }`}
          >
            <div>
              <p className="text-sm text-white/70">{plan.title}</p>
              <h3 className="text-4xl font-bold mt-3">{plan.price}</h3>
              <p className="text-white/50 mt-2">{plan.description}</p>
            </div>
            <div className="space-y-2 text-sm text-white/70 mt-6">
              {plan.features.map(feature => (
                <div key={feature} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {feature}
                </div>
              ))}
            </div>
            <PrimaryButton label="Solicitar evaluacion" className="liquid-glass-card w-full justify-center mt-6" />
          </div>
        ))}
      </div>
    </motion.section>
  )
}
