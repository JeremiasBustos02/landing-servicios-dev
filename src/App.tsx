"use client"

import { useState } from 'react'
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
  // El estado global de la OnePage vive acá
  const [activeTab, setActiveTab] = useState<SwitchOption>('software')

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <SVGNoiseFilters />
      <CinematicBackground />

      <div className="relative z-10">
        <Navbar />
        
        {/* Pasamos el estado y la función para que el Switch lo pueda cambiar */}
        <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* 
          A partir de acá, podés pasarle `activeTab` como prop a cualquier componente 
          que necesite cambiar su contenido (Precios, Características, FAQ, etc.)
        */}
        <AppMockup activeTab={activeTab} />
        <Features activeTab={activeTab} />
        <CTA activeTab={activeTab} />
        <Pricing activeTab={activeTab} />
        
        <FAQ activeTab={activeTab} />
        <Contact activeTab={activeTab} />
        <FinalCTA activeTab={activeTab} />
        <Footer />
      </div>
    </div>
  )
}