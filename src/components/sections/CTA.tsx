import { motion } from 'motion/react'
import PrimaryButton from '../ui/PrimaryButton'
import { CONTACT_INFO, EASE } from '../../data/constants'
import '../../styles/sections/cta.css'

export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
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
              className="rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition-colors"
            >
              Agendar una llamada
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
