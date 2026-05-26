import { m } from 'motion/react'
import { useState } from 'react'
import { FAQS, EASE } from '../../data/constants'
import SectionEyebrow from '../ui/SectionEyebrow'
import type { SwitchOption } from '../../types'

const ChevronIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

interface FAQProps {
  activeTab: SwitchOption;
}

const CYBER_FAQS = [
  {
    pregunta: 'Cuanto tarda una auditoria completa?',
    respuesta:
      'Entre 7 y 15 dias segun el alcance. Definimos un cronograma claro y entregables semanales para que veas avances reales.',
  },
  {
    pregunta: 'El pentesting afecta mis sistemas en produccion?',
    respuesta:
      'No. Coordinamos ventanas seguras y usamos metodologias de hackeo etico para minimizar impacto. Probamos primero en entornos controlados si aplica.',
  },
  {
    pregunta: 'Que estandares y marcos utilizan?',
    respuesta:
      'Trabajamos con OWASP, MITRE ATT&CK y NIST, ajustando el enfoque a tu industria y requisitos de compliance.',
  },
  {
    pregunta: 'Que incluye el informe final?',
    respuesta:
      'Un reporte ejecutivo, detalle tecnico con evidencia, severidad CVSS y un plan de remediacion priorizado con re-testeo de hallazgos criticos.',
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

export default function FAQ({ activeTab }: FAQProps) {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (index: number) => setActive(active === index ? null : index)

  return activeTab === 'software' ? (
    <m.section
      key="software-faq"
      id="faq"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="max-w-6xl mx-auto py-20 px-6"
    >
      <div className="text-center flex flex-col items-center gap-4 mb-12">
        <SectionEyebrow label="FAQ" />
        <h2 className="text-3xl md:text-5xl font-bold">Preguntas frecuentes</h2>
        <p className="text-lg text-white/60">
          Resolvemos tus dudas mas comunes para que te sientas seguro de elegirnos.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {FAQS.map((faq, index) => (
          <div
            key={faq.pregunta}
            className={`liquid-glass-card rounded-2xl border border-white/10 transition-colors overflow-hidden ${
              active === index ? 'bg-white/5' : ''
            }`}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between text-left text-sm font-medium p-5 cursor-pointer outline-none"
              onClick={() => toggle(index)}
            >
              {faq.pregunta}
              <span className={`transition-transform duration-300 ${active === index ? 'rotate-180' : ''}`}>
                <ChevronIcon />
              </span>
            </button>
            
            {active === index && (
              <div className="px-5 pb-5">
                <p className="text-sm text-white/60">{faq.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </m.section>
  ) : (
    <m.section
      key="cyber-faq"
      id="faq"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="max-w-6xl mx-auto py-20 px-6"
    >
      <div className="text-center flex flex-col items-center gap-4 mb-12">
        <SectionEyebrow label="FAQ" />
        <h2 className="text-3xl md:text-5xl font-bold">Preguntas frecuentes de ciberseguridad</h2>
        <p className="text-lg text-white/60">
          Respondemos dudas sobre tiempos, metodologias y compliance para equipos tecnicos y directivos.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {CYBER_FAQS.map((faq, index) => (
          <div
            key={faq.pregunta}
            className={`liquid-glass-card rounded-2xl border border-white/10 transition-colors overflow-hidden ${
              active === index ? 'bg-white/5' : ''
            }`}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between text-left text-sm font-medium p-5 cursor-pointer outline-none"
              onClick={() => toggle(index)}
            >
              {faq.pregunta}
              <span className={`transition-transform duration-300 ${active === index ? 'rotate-180' : ''}`}>
                <ChevronIcon />
              </span>
            </button>
            
            {active === index && (
              <div className="px-5 pb-5">
                <p className="text-sm text-white/60">{faq.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </m.section>
  )
}
