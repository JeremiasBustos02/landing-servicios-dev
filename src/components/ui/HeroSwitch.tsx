"use client"

import { useState } from 'react'
import '../../styles/ui/hero-switch.css'

type SwitchOption = 'software' | 'cyber'

export default function HeroSwitch() {
  const [activeTab, setActiveTab] = useState<SwitchOption>('software')

  return (
    <div className="hero-switch" role="tablist">
      <div 
        className={`hero-switch__indicator hero-switch__indicator--${activeTab}`} 
        aria-hidden="true" 
      />

      <button
        type="button"
        role="tab"
        aria-selected={activeTab === 'software'}
        className={`hero-switch__btn ${activeTab === 'software' ? 'hero-switch__btn--active' : ''}`}
        onClick={() => setActiveTab('software')}
      >
        Desarrollo de Software
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={activeTab === 'cyber'}
        className={`hero-switch__btn ${activeTab === 'cyber' ? 'hero-switch__btn--active' : ''}`}
        onClick={() => setActiveTab('cyber')}
      >
        Ciberseguridad
      </button>
    </div>
  )
}