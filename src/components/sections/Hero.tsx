import { m } from 'motion/react'
import { useLenis } from 'lenis/react'
import { SITE, EASE } from '../../data/constants'
import PrimaryButton from '../ui/PrimaryButton'
import HeroSwitch from '../ui/HeroSwitch'
import type { SwitchOption } from '../../types'
import '../../styles/sections/hero.css'
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
}
interface HeroProps {
  activeTab: SwitchOption;
  setActiveTab: (tab: SwitchOption) => void;
}
export default function Hero({ activeTab, setActiveTab }: HeroProps) {
  const lenis = useLenis()
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    lenis?.scrollTo(target)
  }
  return (
    <m.section
      id="hero"
      initial="hidden"
      animate="show"
      className="text-center px-6 min-h-[100dvh] flex flex-col justify-center items-center"
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-center mb-6">
          <HeroSwitch activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        {activeTab === 'software' ? (
          <div key="software-hero">
            <m.h1 variants={fadeUp} className="text-[2.5rem] sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mt-6 text-balance mx-auto">
              Diseñamos webs que
              <br className="hidden sm:block" />
              <span className="animate-shiny hero-shiny-text"> VENDEN por vos.</span>
            </m.h1>
            <m.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#pricing" onClick={(e) => handleScroll(e, '#pricing')}>
                  <PrimaryButton label="Ver planes" className='btn-primary' />
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleScroll(e, '#services')}
                  className="liquid-glass-card rounded-full px-5 py-3 text-sm text-white/80 hover:text-white transition"
                >
                  ¿Cómo trabajamos?
                </a>
              </div>
              <span className="text-xs text-white/40">Sin compromiso · Presupuesto en 24 hs</span>
            </m.div>
          </div>
        ) : (
          <div key="cyber-hero">
            <m.h1 variants={fadeUp} className="text-[2.5rem] sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mt-6 text-balance">
              La tranquilidad empieza
              <br className="hidden sm:block" /> con
              <span className="animate-shiny hero-shiny-text-cyber"> CIBERSEGURIDAD.</span>
            </m.h1>
            <m.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>
                  <PrimaryButton label="Solicitar escaneo inicial" className="btn-primary" />
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleScroll(e, '#services')}
                  className="liquid-glass-card rounded-full px-5 py-3 text-sm text-white/80 hover:text-white transition"
                >
                  Ver servicios de ciberseguridad
                </a>
              </div>
              <span className="text-xs text-white/40">Monitoreo 24/7 · Reporte técnico inicial en 48 hs</span>
            </m.div>
          </div>
        )}
        <m.div variants={fadeUp} className="mt-4 flex items-center justify-center gap-4 text-white/60">
          <div className="flex -space-x-2">
            {SITE.socialProofInitials.map(initials => (
              <div key={initials} className="size-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs">
                {initials}
              </div>
            ))}
          </div>
          <span className="text-sm">
            <strong className="text-white">+12 negocios</strong> ya confían en nosotros
          </span>
        </m.div>
      </div>
    </m.section>
  )
}