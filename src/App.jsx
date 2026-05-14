import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import MeshWrapper from './components/MeshWrapper'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* El Hero está 100% aislado. Vuelve a tener su glow y su propio fondo off-white. */}
        <Hero />

        {/* Agrupamos Servicios y Testimonios adentro de nuestro fondo verde animado */}
        <MeshWrapper>
          <Services />
          <Testimonials />
          <CTA />
        </MeshWrapper>

        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}