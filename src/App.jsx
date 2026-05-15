import './index.css'
import { useScrollReveal } from './components/useScrollReveal'

import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Services     from './components/Services'
import Testimonials from './components/Testimonials'
import Pricing      from './components/Pricing'
import CTA          from './components/CTA'
import FAQ          from './components/FAQ'
import MeshWrapper  from './components/MeshWrapper'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

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