import { motion } from 'motion/react'
import { CONTACT_INFO } from './data/constants'
import PrimaryButton from './components/ui/PrimaryButton'
import SVGNoiseFilters from './components/ui/SVGNoiseFilters'
import CinematicBackground from './components/ui/CinematicBackground'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import MenuBar from './components/sections/MenuBar'
import AppMockup from './components/sections/AppMockup'
import Features from './components/sections/Features'
import Testimonials from './components/sections/Testimonials'
import LogoCloud from './components/sections/LogoCloud'
import Pricing from './components/sections/Pricing'
import CTA from './components/sections/CTA'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

const ease = [0.21, 0.47, 0.32, 0.98] as const

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <SVGNoiseFilters />

      <CinematicBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AppMockup />
        <Features />
        <CTA />
        <Pricing />
        <FAQ />
        <Contact />
        <section className="max-w-6xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
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
                  className="liquid-glass rounded-full px-5 py-3 text-sm text-white/80 hover:text-white transition"
                >
                  Ver planes
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
