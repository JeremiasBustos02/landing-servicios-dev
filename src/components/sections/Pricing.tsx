import { PLANS } from '../../data/constants'
import SectionEyebrow from '../ui/SectionEyebrow'
import PrimaryButton from '../ui/PrimaryButton'

export default function Pricing() {
  return (
    <section id="pricing" className="relative max-w-6xl mx-auto py-24 px-6">
      <style>
        {`
          .pricing-grid {
            display: grid;
            gap: 1.5rem;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          }
          .pricing-pro {
            box-shadow: 0 0 0 1px rgba(165, 243, 252, 0.35), 0 25px 60px rgba(34, 211, 238, 0.18);
          }
        `}
      </style>
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
            <PrimaryButton label="Empezar proyecto" className="w-full justify-center mt-6" />
          </div>
        ))}
      </div>
    </section>
  )
}
