import { useState } from 'react'
import { FAQS } from '../../data/constants'
import SectionEyebrow from '../ui/SectionEyebrow'

const ChevronIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (index: number) => setActive(active === index ? null : index)

  return (
    <section id="faq" className="max-w-6xl mx-auto py-20 px-6">
      <div className="text-center flex flex-col items-center gap-4 mb-12">
        <SectionEyebrow label="FAQ" />
        <h2 className="text-3xl md:text-4xl font-semibold">Preguntas frecuentes</h2>
        <p className="text-white/60 max-w-2xl">
          Resolvemos tus dudas mas comunes para que te sientas seguro de elegirnos.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {FAQS.map((faq, index) => (
          <div
            key={faq.pregunta}
            className={`liquid-glass rounded-2xl border border-white/10 p-5 transition ${active === index ? 'bg-white/5' : ''}`}
          >
            <button
              className="w-full flex items-center justify-between text-left text-sm font-medium"
              onClick={() => toggle(index)}
            >
              {faq.pregunta}
              <span className={`transition-transform ${active === index ? 'rotate-180' : ''}`}>
                <ChevronIcon />
              </span>
            </button>
            {active === index && <p className="text-sm text-white/60 mt-4">{faq.respuesta}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
