import { METHODOLOGY_PILLARS } from '../data/constants'
import { STEPS } from '../data/constants'


export default function Services() {
  return (

    <section id="services" className="section">
      <div className="container">

        <div className="flex flex-col items-start gap-4 mb-6 text-left">
          <span className="section-label-inv">Que ofrecemos</span>
          <h2 className="heading-lg">Nuestra metodología</h2>
        </div>

        {/* Grilla de contenidos */}
        <div className="grid md:grid-cols-2 gap-x-16 mb-20">
          {METHODOLOGY_PILLARS.map((pillar, index) => (
            <div key={index} className="flex flex-col mb-10 md:mb-0">
              <h3 className="heading-md mb-4">{pillar.title}</h3>
              <p className="lead">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-black/20 mt-16 pt-16">
          <h3 className="heading-md mb-12 text-center md:text-left">¿Cómo es trabajar con nosotros?</h3>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map((step) => (
              <div key={step.number} className="flex flex-col gap-4 relative">

                {/* Número gigante estético de fondo (marca de agua) */}
                <span
                  className="absolute -top-10 -left-4 text-8xl font-bold opacity-5 pointer-events-none select-none"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                >
                  {step.number}
                </span>

                {/* Contenido del paso */}
                <div className="relative z-10">
                  <span className="text-accent font-bold mb-2 block">{step.number} //</span>
                  <h4 className="heading-md mb-3 text-lg">{step.title}</h4>
                  <p className="lead text-sm lg:text-base">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}