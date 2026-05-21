"use client"

import { useState } from 'react'
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

export type SwitchOption = 'software' | 'cyber'

export default function App() {
  const [activeTab, setActiveTab] = useState<SwitchOption>('software')

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true , syncTouch: true, touchMultiplier: 1.5,}}>
      <div data-theme={activeTab} className="relative min-h-screen bg-[#0c0c0c] text-white">
        <SVGNoiseFilters />
        <CinematicBackground activeTab={activeTab} />

        <div className="relative z-10">
          <Navbar />

          <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
          <AppMockup activeTab={activeTab} />
          <Features activeTab={activeTab} />
          <CTA activeTab={activeTab} />
          <Pricing activeTab={activeTab} />

          <FAQ activeTab={activeTab} />
          <Contact />
          <FinalCTA activeTab={activeTab} />
          <Footer />
        </div>
      </div>
    </ReactLenis>
  )
}
