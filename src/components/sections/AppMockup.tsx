import LiquidGlassCard from '../ui/LiquidGlassCard'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { PROJECTS, SITE, EASE } from '../../data/constants'
import '../../styles/sections/app-mockup.css'
import SectionEyebrow from '../ui/SectionEyebrow'
import { SwitchOption } from '../../App'

interface AppMockupProps {
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

export default function AppMockup({ activeTab }: AppMockupProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % PROJECTS.length)
    }, SITE.carouselInterval)

    return () => clearInterval(interval)
  }, [])

  const getPositionClass = (index: number): string => {
    const diff = (index - active + PROJECTS.length) % PROJECTS.length

    if (diff === 0) return 'carousel-card--active'
    if (diff === 1) return 'carousel-card--next'
    if (diff === PROJECTS.length - 1) return 'carousel-card--prev'
    return 'carousel-card--hidden'
  }

  return activeTab === 'software' ? (
    <motion.section
      key="software-app-mockup"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="max-w-[100vw] mx-auto px-4 pt-20 pb-5 overflow-hidden"
    >
      <div className="flex justify-center items-start mb-6 md:mb-6">
        <SectionEyebrow label="Proyectos" />
      </div>
      <div className="relative w-full max-w-5xl mx-auto aspect-[16/9]">
        {PROJECTS.map((project, index) => (
          <div
            key={project.title}
            className={`carousel-card ${getPositionClass(index)}`}
          >
            <LiquidGlassCard className="w-full h-full rounded-[2rem] border border-white/10 overflow-hidden">
              <div className="relative w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="carousel-image"
                />

                <div className="carousel-gradient" />

                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <h3 className="text-2xl md:text-5xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mt-1 md:mt-2 text-sm md:text-xl font-medium">
                    {project.category}
                  </p>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`carousel-dot ${active === index
              ? 'carousel-dot--active'
              : 'carousel-dot--inactive'
              }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>

    </motion.section>
  ) : (
    <motion.section
      key="cyber-app-mockup"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="max-w-[100vw] mx-auto px-4 pt-20 pb-5 overflow-hidden"
    >
      <div className="flex justify-center items-start mb-6 md:mb-6">
        <SectionEyebrow label="Monitoreo" />
      </div>
      <div className="relative w-full max-w-5xl mx-auto aspect-[4/5] sm:aspect-[5/6] md:aspect-[16/9]">
        <LiquidGlassCard className="w-full h-full rounded-[2rem] border border-white/10 overflow-hidden min-w-0 min-h-0">
          <div className="relative w-full h-full bg-[#0b0f14]/80 min-w-0 min-h-0 flex flex-col">
            <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 py-2 md:py-3 border-b border-white/10 min-w-0 gap-2">
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] sm:text-xs text-white/40 font-mono min-w-0 truncate max-w-[55%] md:max-w-none">
                secure-scan@core
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-emerald-400 whitespace-nowrap shrink-0">
                LIVE
              </span>
            </div>
            <div className="flex-1 min-h-0 min-w-0">
              <div className="flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 h-full md:hidden min-h-0 min-w-0 overflow-hidden">
                <div className="liquid-glass-card rounded-2xl border border-white/10 p-3 flex flex-col min-h-0 overflow-hidden flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Registro en vivo</p>
                  <div className="mt-2 min-h-0 flex-1 overflow-hidden">
                    <div className="h-full overflow-x-auto overflow-y-auto space-y-2 font-mono text-[10px] sm:text-xs text-white/60 whitespace-pre-wrap break-words pr-1">
                      <div className="text-white/80">[00:00:14] Iniciando escaneo de superficie...</div>
                      <div>[00:00:21] Enumerando hosts y servicios expuestos</div>
                      <div className="text-emerald-400">[OK] 214 hosts detectados</div>
                      <div className="text-amber-300">[WARN] 17 puertos con configuracion debil</div>
                      <div className="text-red-400">[CRITICAL] 3 vulnerabilidades con CVSS &gt; 8.5</div>
                      <div>[00:00:46] Correlacionando logs y eventos SIEM</div>
                      <div className="text-cyan-300">[INFO] Vector probable: API /auth/login</div>
                      <div className="text-white/50">[00:01:02] Generando plan de remediacion...</div>
                    </div>
                  </div>
                </div>
                <div className="liquid-glass-card rounded-2xl border border-white/10 p-3 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Cobertura</p>
                  <p className="text-xs text-white/70 mt-2 break-words">Red interna, VPN, endpoints, cloud</p>
                  <div className="mt-3 flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] text-white/60 truncate">74% superficie auditada</span>
                  </div>
                </div>
                <div className="liquid-glass-card rounded-2xl border border-white/10 p-3 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Alertas activas</p>
                  <div className="mt-3 space-y-2 min-w-0">
                    <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 p-2 min-w-0">
                      <span className="text-[10px] text-white/40 truncate">Critical</span>
                      <span className="text-base font-semibold text-red-400">3</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 p-2 min-w-0">
                      <span className="text-[10px] text-white/40 truncate">High</span>
                      <span className="text-base font-semibold text-amber-300">9</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 p-2 min-w-0">
                      <span className="text-[10px] text-white/40 truncate">Medium</span>
                      <span className="text-base font-semibold text-cyan-300">22</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:grid md:grid-cols-[1.2fr_0.8fr] gap-4 lg:gap-6 p-6 lg:p-10 h-full min-h-0 min-w-0">
                <div className="min-w-0 min-h-0 overflow-hidden">
                  <div className="h-full overflow-x-auto overflow-y-auto space-y-2 font-mono text-sm text-white/60 whitespace-pre-wrap break-words pr-1">
                    <div className="text-white/80">[00:00:14] Iniciando escaneo de superficie...</div>
                    <div>[00:00:21] Enumerando hosts y servicios expuestos</div>
                    <div className="text-emerald-400">[OK] 214 hosts detectados</div>
                    <div className="text-amber-300">[WARN] 17 puertos con configuracion debil</div>
                    <div className="text-red-400">[CRITICAL] 3 vulnerabilidades con CVSS &gt; 8.5</div>
                    <div>[00:00:46] Correlacionando logs y eventos SIEM</div>
                    <div className="text-cyan-300">[INFO] Vector probable: API /auth/login</div>
                    <div className="text-white/50">[00:01:02] Generando plan de remediacion...</div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:gap-4 min-w-0">
                  <div className="liquid-glass-card rounded-2xl border border-white/10 p-3 md:p-4 min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">Cobertura</p>
                    <p className="text-sm text-white/70 mt-2 break-words">Red interna, VPN, endpoints, cloud</p>
                    <div className="mt-4 flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs text-white/60 truncate">74% superficie auditada</span>
                    </div>
                  </div>
                  <div className="liquid-glass-card rounded-2xl border border-white/10 p-3 md:p-4 min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">Alertas activas</p>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center min-w-0">
                      <div className="rounded-xl bg-white/5 border border-white/10 p-2 md:p-3 min-w-0">
                        <p className="text-[10px] text-white/40 truncate">Critical</p>
                        <p className="text-lg md:text-xl font-semibold text-red-400">3</p>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-2 md:p-3 min-w-0">
                        <p className="text-[10px] text-white/40 truncate">High</p>
                        <p className="text-lg md:text-xl font-semibold text-amber-300">9</p>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-2 md:p-3 min-w-0">
                        <p className="text-[10px] text-white/40 truncate">Medium</p>
                        <p className="text-lg md:text-xl font-semibold text-cyan-300">22</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </div>
    </motion.section>
  )
}
