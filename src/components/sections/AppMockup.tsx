import { CheckCircle, CheckSquare, Circle, Clock, Home, Inbox, Map, Plus, Sparkles } from 'lucide-react'
import LiquidGlassCard from '../ui/LiquidGlassCard'

export default function AppMockup() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <LiquidGlassCard className="rounded-2xl border border-white/10 h-[560px] grid grid-cols-12 overflow-hidden">
        <div className="col-span-12 md:col-span-3 bg-black/30 p-4 border-b md:border-b-0 md:border-r border-white/10">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-white text-black text-sm font-medium py-2"
          >
            <Plus className="w-4 h-4" />
            Nuevo proyecto
          </button>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            {[{ label: 'Inicio', icon: Home }, { label: 'Inbox', icon: Inbox, badge: '3' }].map(item => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs bg-white/10 rounded-full px-2 py-0.5 text-white/70">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
            {[{ label: 'Mis tareas', icon: CheckSquare }, { label: 'Roadmaps', icon: Map }].map(item => (
              <div key={item.label} className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5">
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Workspace</p>
            <div className="mt-3 space-y-2 text-sm text-white/70">
              {['Engineering', 'Marketing', 'Design'].map(team => (
                <div key={team} className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  {team}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Lanzamiento Web Comercial</h3>
            <div className="flex -space-x-2">
              {['JA', 'MS', 'DR'].map(initials => (
                <div
                  key={initials}
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs"
                >
                  {initials}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Definir estrategia de conversion</span>
              </div>
              <span className="text-xs text-emerald-300 bg-emerald-400/10 px-2 py-1 rounded-full">Listo</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-300" />
                <span>Diseñar landing optimizada</span>
              </div>
              <span className="text-xs text-amber-200 bg-amber-400/10 px-2 py-1 rounded-full">En progreso</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <Circle className="w-4 h-4 text-sky-300" />
                <span>Integrar formularios inteligentes</span>
              </div>
              <span className="text-xs text-sky-200 bg-sky-400/10 px-2 py-1 rounded-full">Por hacer</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 bg-gradient-to-b from-[#0e1014] to-black p-4 border-t md:border-t-0 md:border-l border-white/10">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Asistente IA
          </div>
          <div className="liquid-glass rounded-xl p-4 mt-4 text-sm text-white/80">
            El cliente tiene 3 tareas pendientes. Reasignamos la definicion del buyer persona al equipo de marketing?
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <button
              type="button"
              className="liquid-glass rounded-lg px-3 py-2 text-xs text-white/90 hover:bg-white/5 transition"
            >
              Si, reasignar
            </button>
            <button
              type="button"
              className="liquid-glass rounded-lg px-3 py-2 text-xs text-white/60 hover:text-white transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      </LiquidGlassCard>
    </section>
  )
}
