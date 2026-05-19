import PricingCard from '../ui/PricingCard'
import { PLANS } from '../../data/constants'

export default function Pricing() {
  return (
    <section id="pricing" className="bg-section-white section">
      <div className="container">
        <div className="text-center flex flex-col items-center gap-4 mb-6">
          <span className="section-label reveal-fade">Planes</span>
          <h2 className="heading-lg reveal-fade">Soluciones para cada etapa</h2>
          <p className="lead mx-auto reveal-fade">
            Desde una landing simple hasta sistemas completos y escalables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-fade">
          {PLANS.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}