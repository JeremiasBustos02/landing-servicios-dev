import { TESTIMONIALS } from '../../data/constants'
import SectionEyebrow from '../ui/SectionEyebrow'
import LiquidGlassCard from '../ui/LiquidGlassCard'

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto py-20 px-6">
      <div className="flex flex-col items-start gap-4 mb-10">
        <SectionEyebrow label="Casos de exito" />
        <h2 className="text-3xl md:text-4xl font-semibold">Lo que dicen quienes ya confiaron</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map(item => (
          <LiquidGlassCard key={item.name} className="rounded-2xl border border-white/10 p-6 flex flex-col">
            <p className="text-sm text-white/70">"{item.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs">
                {item.initials}
              </div>
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-white/50">{item.role}</p>
              </div>
            </div>
          </LiquidGlassCard>
        ))}
      </div>
    </section>
  )
}
