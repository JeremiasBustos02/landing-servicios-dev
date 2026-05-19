import SVGNoiseFilters from './components/ui/SVGNoiseFilters'
import CinematicBackground from './components/ui/CinematicBackground'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import AppMockup from './components/sections/AppMockup'
import Features from './components/sections/Features'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import CTA from './components/sections/CTA'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/sections/Footer'

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
        <FinalCTA />
        <Footer />
      </div>
    </div>
  )
}
