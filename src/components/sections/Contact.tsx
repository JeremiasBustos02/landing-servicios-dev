import { m } from 'motion/react'
import { CONTACT_INFO, EASE } from '../../data/constants'
import SectionEyebrow from '../ui/SectionEyebrow'
import PrimaryButton from '../ui/PrimaryButton'
import LiquidGlassCard from '../ui/LiquidGlassCard'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
}

export default function Contact() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const form = event.currentTarget
  const formData = new FormData(form)

  try {
    const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      alert('Mail enviado correctamente')
      form.reset()
    } else {
      alert('Error al enviar el mensaje')
    }
  } catch (error) {
    alert('Error al enviar el mensaje')
  }
}
  return (
    <m.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="max-w-6xl mx-auto py-20 px-6"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="flex flex-col gap-6 text-left">
          <SectionEyebrow label="Contacto" />
          <h2 className="text-3xl md:text-5xl font-bold">Hablemos.</h2>
          <p className="text-lg text-white/60">
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
          <h3 className="text-2xl font-bold mb-4">Envianos un mensaje</h3>
          <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
            <div>
              <label htmlFor="name" className="contact-label">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                className="contact-input"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="contact-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                className="contact-input"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="contact-label">
                En que te podemos ayudar?
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Contame un poco sobre tu proyecto..."
                className="contact-input min-h-[140px]"
                required
              />
            </div>
           <PrimaryButton
              type="submit"
              label="Enviar mensaje"
              className="w-full justify-center"
            />
          </form>
        </LiquidGlassCard>
      </div>
    </m.section>
  )
}
