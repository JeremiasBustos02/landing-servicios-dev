import { m } from 'motion/react'
import { useLenis } from 'lenis/react'
import { CONTACT_INFO, EASE } from '../../data/constants'
import PrimaryButton from '../ui/PrimaryButton'
import type { SwitchOption } from '../../types'
interface FinalCTAProps {
  activeTab: SwitchOption;
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
}
export default function FinalCTA({ activeTab }: FinalCTAProps) {
  const lenis = useLenis()
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    lenis?.scrollTo(target)
  }
  return activeTab === 'software' ? (
    <section key="software-final-cta" className="max-w-6xl mx-auto px-6 py-12">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="liquid-glass rounded-3xl p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 cta-radial-glow" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-semibold">Listo para convertir visitas en clientes?</h2>
          <p className="text-white/60 mt-4">Hablemos hoy y definamos un plan claro para tu proyecto.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CONTACT_INFO.whatsappLink}>
              <PrimaryButton label="Escribinos por WhatsApp" />
            </a>
            <button
              type="button"
              className="liquid-glass-card rounded-full px-5 py-3 text-sm text-white/80 hover:text-white transition"
            >
              Ver planes
            </button>
          </div>
        </div>
      </m.div>
    </section>
  ) : (
    <section key="cyber-final-cta" className="max-w-6xl mx-auto px-6 py-12">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="liquid-glass rounded-3xl p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 cta-radial-glow" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-semibold">Un incidente cuesta mas que prevenirlo.</h2>
          <p className="text-white/60 mt-4">Empeza con una auditoria inicial y un plan de remediacion claro.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CONTACT_INFO.whatsappLink}>
              <PrimaryButton label="Hablar con un especialista" />
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleScroll(e, '#pricing')}
              className="liquid-glass-card rounded-full px-5 py-3 text-sm text-white/80 hover:text-white transition"
            >
              Ver planes
            </a>
          </div>
        </div>
      </m.div>
    </section>
  )
}