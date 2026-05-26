import { m } from 'motion/react'
import { useLenis } from 'lenis/react'
import PrimaryButton from '../ui/PrimaryButton'
import { CONTACT_INFO, EASE } from '../../data/constants'
import '../../styles/sections/cta.css'
import type { SwitchOption } from '../../types'
interface CTAProps {
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
export default function CTA({ activeTab }: CTAProps) {
  const lenis = useLenis()
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    lenis?.scrollTo(target)
  }
  return activeTab === 'software' ? (
    <section key="software-cta" className="max-w-6xl mx-auto px-6 py-5 md:py-12">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        <div className="absolute inset-0 cta-radial-glow" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Tu próximo proyecto. <br /> Hecho realidad.
          </h2>
          <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            Deja de perder clientes por una web que no convierte. Únete a los negocios que ya escalaron sus ventas con nosotros.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CONTACT_INFO.whatsappLink}>
              <PrimaryButton label="Hablar por WhatsApp" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="liquid-glass-card rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition-colors"
            >
              Agendar una llamada
            </a>
          </div>
        </div>
      </m.div>
    </section>
  ) : (
    <section key="cyber-cta" className="max-w-6xl mx-auto px-6 py-5 md:py-12">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        <div className="absolute inset-0 cta-radial-glow" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Detectemos tu superficie de ataque hoy.
          </h2>
          <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            Un escaneo inicial revela brechas criticas antes de que impacten tu operacion. Actuemos con datos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CONTACT_INFO.whatsappLink}>
              <PrimaryButton label="Solicitar escaneo inicial" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="liquid-glass-card rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition-colors"
            >
              Agendar reunion tecnica
            </a>
          </div>
        </div>
      </m.div>
    </section>
  )
}