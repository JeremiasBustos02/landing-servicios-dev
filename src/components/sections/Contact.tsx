import { CONTACT_INFO } from '../../data/constants'
import SectionEyebrow from '../ui/SectionEyebrow'
import PrimaryButton from '../ui/PrimaryButton'
import LiquidGlassCard from '../ui/LiquidGlassCard'

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('¡Mensaje de prueba! Mas adelante lo conectamos a un servicio de emails.')
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto py-20 px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="flex flex-col gap-6 text-left">
          <SectionEyebrow label="Contacto" />
          <h2 className="text-3xl md:text-4xl font-semibold">Hablemos.</h2>
          <p className="text-white/60">
            Tenes dudas o consultas? Contanos de tu proyecto. Respondemos en menos de 24 hs.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <LiquidGlassCard className="rounded-2xl border border-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Email</p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="block text-lg font-semibold mt-2">
                {CONTACT_INFO.email}
              </a>
            </LiquidGlassCard>
            <LiquidGlassCard className="rounded-2xl border border-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">WhatsApp</p>
              <a href={CONTACT_INFO.whatsappLink} className="block text-lg font-semibold mt-2">
                {CONTACT_INFO.whatsapp}
              </a>
            </LiquidGlassCard>
          </div>
        </div>

        <LiquidGlassCard className="rounded-2xl border border-white/10 p-8">
          <h3 className="text-lg font-semibold mb-6">Envianos un mensaje</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                placeholder="Tu nombre"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="tucorreo@ejemplo.com"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                En que te podemos ayudar?
              </label>
              <textarea
                id="message"
                placeholder="Contame un poco sobre tu proyecto..."
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 min-h-[140px]"
                required
              />
            </div>
            <PrimaryButton label="Enviar mensaje" className="w-full justify-center" />
          </form>
        </LiquidGlassCard>
      </div>
    </section>
  )
}
