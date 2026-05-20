import LiquidGlassCard from '../ui/LiquidGlassCard'
import { useState, useEffect } from 'react'
import { PROJECTS, SITE } from '../../data/constants'
import '../../styles/sections/app-mockup.css'
import SectionEyebrow from '../ui/SectionEyebrow'
import { SwitchOption } from '../../App'

interface AppMockupProps {
  activeTab: SwitchOption;
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
    <section key="software-app-mockup" className="max-w-[100vw] mx-auto px-4 py-20 overflow-hidden">
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

    </section>
  ) : (
    <section key="cyber-app-mockup" className="max-w-[100vw] mx-auto px-4 py-20 overflow-hidden">
      <div className="flex justify-center items-start mb-6 md:mb-6">
        <SectionEyebrow label="Monitoreo" />
      </div>
      <div className="relative w-full max-w-5xl mx-auto aspect-[16/9]">
        <LiquidGlassCard className="w-full h-full rounded-[2rem] border border-white/10 overflow-hidden">
          <div className="relative w-full h-full bg-[#0b0f14]/80">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-xs text-white/40 font-mono">secure-scan@core</span>
              <span className="text-[10px] tracking-[0.3em] text-emerald-400">LIVE</span>
            </div>

            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 p-6 md:p-10 h-full">
              <div className="space-y-2 font-mono text-xs md:text-sm text-white/60">
                <div className="text-white/80">[00:00:14] Iniciando escaneo de superficie...</div>
                <div>[00:00:21] Enumerando hosts y servicios expuestos</div>
                <div className="text-emerald-400">[OK] 214 hosts detectados</div>
                <div className="text-amber-300">[WARN] 17 puertos con configuracion debil</div>
                <div className="text-red-400">[CRITICAL] 3 vulnerabilidades con CVSS &gt; 8.5</div>
                <div>[00:00:46] Correlacionando logs y eventos SIEM</div>
                <div className="text-cyan-300">[INFO] Vector probable: API /auth/login</div>
                <div className="text-white/50">[00:01:02] Generando plan de remediacion...</div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="liquid-glass-card rounded-2xl border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">Cobertura</p>
                  <p className="text-sm text-white/70 mt-2">Red interna, VPN, endpoints, cloud</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs text-white/60">74% superficie auditada</span>
                  </div>
                </div>

                <div className="liquid-glass-card rounded-2xl border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">Alertas activas</p>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <p className="text-[10px] text-white/40">Critical</p>
                      <p className="text-xl font-semibold text-red-400">3</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <p className="text-[10px] text-white/40">High</p>
                      <p className="text-xl font-semibold text-amber-300">9</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <p className="text-[10px] text-white/40">Medium</p>
                      <p className="text-xl font-semibold text-cyan-300">22</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </div>
    </section>
  )
}
