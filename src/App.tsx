import { useState } from 'react'
import { LazyMotion, domAnimation } from 'motion/react'
import { ReactLenis } from 'lenis/react'
import SVGNoiseFilters from './components/ui/SVGNoiseFilters'
import CinematicBackground from './components/ui/CinematicBackground'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import AppMockup from './components/sections/AppMockup'
import Features from './components/sections/Features'
import Pricing from './components/sections/Pricing'
import CTA from './components/sections/CTA'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/sections/Footer'
import type { SwitchOption } from './types'

export default function App() {
  const [activeTab, setActiveTab] = useState<SwitchOption>('software')

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1,
      }}
    >
      <LazyMotion features={domAnimation}>
      <div data-theme={activeTab} className="relative min-h-screen bg-[#0c0c0c] text-white">
        <SVGNoiseFilters />
        <CinematicBackground activeTab={activeTab} />

        <main className="relative z-10">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
          <AppMockup activeTab={activeTab} />
          <Features activeTab={activeTab} />
          <CTA activeTab={activeTab} />
          <Pricing activeTab={activeTab} />

          <FAQ activeTab={activeTab} />
          <Contact />
          <FinalCTA activeTab={activeTab} />
          <Footer />
        </main>
      </div>
      </LazyMotion>
    </ReactLenis>
  )
}
