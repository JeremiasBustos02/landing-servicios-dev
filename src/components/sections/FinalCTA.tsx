import { motion } from 'motion/react'
import { CONTACT_INFO, EASE } from '../../data/constants'
import PrimaryButton from '../ui/PrimaryButton'
import { SwitchOption } from '../../App'

interface FinalCTAProps {
  activeTab: SwitchOption;
}

export default function FinalCTA({ activeTab }: FinalCTAProps) {
  return activeTab === 'software' ? (
    <section key="software-final-cta" className="max-w-6xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE }}
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
      </motion.div>
    </section>
  ) : (
    <section key="cyber-final-cta" className="max-w-6xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE }}
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
              className="liquid-glass-card rounded-full px-5 py-3 text-sm text-white/80 hover:text-white transition"
            >
              Ver planes
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
