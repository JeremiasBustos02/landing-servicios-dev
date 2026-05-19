import './index.css'
import { useScrollReveal } from './hooks/useScrollReveal'

import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import CTA from './components/sections/CTA'
import FAQ from './components/sections/FAQ'
import MeshWrapper from './components/ui/MeshWrapper'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <MeshWrapper>
          <Services />
          <Testimonials />
        </MeshWrapper>

        <CTA />
        <Pricing />
        <Contact />
        <MeshWrapper>
          <FAQ />
        </MeshWrapper>
      </main>

      <Footer />
    </>
  )
}