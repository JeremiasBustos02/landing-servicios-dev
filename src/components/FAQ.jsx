import { useState } from 'react'
import { FAQS } from '../data/constants'

const ChevronIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

export default function FAQ() {
  const [active, setActive] = useState(null)

  const toggle = i => setActive(active === i ? null : i)

  return (
    <section id="faq" className="bg-section-off-white section">
      <div className="container">

        <div className="text-center flex flex-col items-center gap-4 mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="heading-lg">Preguntas frecuentes</h2>
          <p className="lead mx-auto">
            Resolvemos tus dudas más comunes para que te sientas seguro de elegirnos.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-card ${active === i ? 'is-open' : ''}`}>
              <button className="faq-summary" onClick={() => toggle(i)}>
                {faq.pregunta}
                <span className="faq-icon"><ChevronIcon /></span>
              </button>

              <div className="faq-grid">
                <div className="faq-content-inner">
                  <p className="faq-text">{faq.respuesta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}