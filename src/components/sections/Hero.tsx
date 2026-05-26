import { m } from 'motion/react'
import { useScrollTo } from '@/hooks'
import { SITE, EASE } from '@/data'
import PrimaryButton from '@/components/ui/PrimaryButton'
import HeroSwitch from '@/components/ui/HeroSwitch'
import type { SwitchOption } from '@/types'
import '@/styles/sections/hero.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
}

const heroContent = {
  software: {
    titleClass: 'text-[2.5rem] sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mt-6 text-balance mx-auto',
    beforeBr: 'Diseñamos webs que',
    afterBr: '',
    shinyText: ' VENDEN por vos.',
    shinyClass: 'hero-shiny-text',
    primaryBtn: { label: 'Ver planes', target: '#pricing' },
    secondaryBtn: { label: '¿Cómo trabajamos?', target: '#services' },
    subtitle: 'Sin compromiso · Presupuesto en 24 hs',
  },
  cyber: {
    titleClass: 'text-[2.5rem] sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mt-6 text-balance',
    beforeBr: 'La tranquilidad empieza',
    afterBr: ' con',
    shinyText: ' CIBERSEGURIDAD.',
    shinyClass: 'hero-shiny-text-cyber',
    primaryBtn: { label: 'Solicitar escaneo inicial', target: '#contact' },
    secondaryBtn: { label: 'Ver servicios de ciberseguridad', target: '#services' },
    subtitle: 'Monitoreo 24/7 · Reporte técnico inicial en 48 hs',
  },
} as const

interface HeroProps {
  activeTab: SwitchOption;
  setActiveTab: (tab: SwitchOption) => void;
}

export default function Hero({ activeTab, setActiveTab }: HeroProps) {
  const { handleClick } = useScrollTo()
  const content = heroContent[activeTab]

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

        <div key={`${activeTab}-hero`}>
          <m.h1 variants={fadeUp} className={content.titleClass}>
            {content.beforeBr}
            <br className="hidden sm:block" />
            {content.afterBr}
            <span className={`animate-shiny ${content.shinyClass}`}>{content.shinyText}</span>
          </m.h1>
          <m.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={content.primaryBtn.target} onClick={(e) => handleClick(e, content.primaryBtn.target)}>
                <PrimaryButton label={content.primaryBtn.label} className='btn-primary' />
              </a>
              <a
                href={content.secondaryBtn.target}
                onClick={(e) => handleClick(e, content.secondaryBtn.target)}
                className="liquid-glass-card rounded-full px-5 py-3 text-sm text-white/80 hover:text-white transition"
              >
                {content.secondaryBtn.label}
              </a>
            </div>
            <span className="text-xs text-white/40">{content.subtitle}</span>
          </m.div>
        </div>

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
