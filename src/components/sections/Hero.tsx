import { motion } from 'motion/react'
import { CONTACT_INFO, SITE, EASE } from '../../data/constants'
import PrimaryButton from '../ui/PrimaryButton'
import SectionEyebrow from '../ui/SectionEyebrow'
import '../../styles/sections/hero.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export default function Hero() {
  return (
    <motion.section
      id="hero"
      variants={stagger}
      initial="hidden"
      animate="show"
      className="text-center pt-28 pb-20 px-6"
    >
      <motion.div variants={fadeUp} className="flex justify-center">
        <SectionEyebrow label="Desarrollo web & software" />
      </motion.div>
      <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.9] mt-6">
        <span className="block">Tu negocio merece</span>
        <span className="block">una web que</span>
        <span className="block animate-shiny hero-shiny-text">
          realmente venda.
        </span>
      </motion.h1>
      <motion.p variants={fadeUp} className="text-white/60 max-w-xl mx-auto mt-8">
        Diseno y desarrollo web claro, rapido y sin vueltas. Resultados desde la primera semana.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={CONTACT_INFO.whatsappLink}>
            <PrimaryButton label="Hablar por WhatsApp" />
          </a>
          <a
            href="#services"
            className="liquid-glass rounded-full px-5 py-3 text-sm text-white/80 hover:text-white transition"
          >
            ¿Cómo trabajamos?
          </a>
        </div>
        <span className="text-xs text-white/40">Sin compromiso · Presupuesto en 24 hs</span>
      </motion.div>
      <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-4 text-white/60">
        <div className="flex -space-x-2">
          {SITE.socialProofInitials.map(initials => (
            <div
              key={initials}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs"
            >
              {initials}
            </div>
          ))}
        </div>
        <span className="text-sm">
          <strong className="text-white">+12 negocios</strong> ya confian en nosotros
        </span>
      </motion.div>
    </motion.section>
  )
}
