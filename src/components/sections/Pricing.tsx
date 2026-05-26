import { m } from 'motion/react'
import { PLANS, CYBER_PLANS, fadeUp } from '@/data'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import PlanCard from '@/components/ui/PlanCard'
import type { SwitchOption } from '@/types'

interface PricingProps {
  activeTab: SwitchOption;
}

export default function Pricing({ activeTab }: PricingProps) {
  return activeTab === 'software' ? (
    <m.section
      key="software-pricing"
      id="pricing-software"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="relative max-w-6xl mx-auto py-10 px-6"
    >
      <span id="pricing" />
      <div className="flex items-center justify-between">
        <div>
          <SectionEyebrow label="Planes" />
          <h2 className="text-3xl md:text-5xl font-bold mt-4">Soluciones para cada etapa.</h2>
          <p className="text-lg text-white/60 mt-2">
            Desde una landing simple hasta sistemas completos y escalables.
          </p>
        </div>
      </div>
      <div className="pricing-grid relative z-10 mt-12 ">
        {PLANS.map(plan => (
          <PlanCard key={plan.title} plan={plan} buttonLabel="Empezar proyecto" variant="software" />
        ))}
      </div>
    </m.section>
  ) : (
    <m.section
      key="cyber-pricing"
      id="pricing-cyber"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="relative max-w-6xl mx-auto py-10 px-6"
    >
      <span id="pricing" />
      <div className="flex items-center justify-between">
        <div>
          <SectionEyebrow label="Planes" />
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Seguridad real en cada etapa.</h2>
          <p className="text-lg text-white/60 mt-2">
            Paquetes diseñados para cubrir desde un primer diagnostico hasta defensa continua.
          </p>
        </div>
      </div>
      <div className="pricing-grid relative z-10 mt-8 ">
        {CYBER_PLANS.map(plan => (
          <PlanCard key={plan.title} plan={plan} buttonLabel="Solicitar evaluacion" variant="cyber" />
        ))}
      </div>
    </m.section>
  )
}