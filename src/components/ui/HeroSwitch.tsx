import '../../styles/ui/hero-switch.css'

type SwitchOption = 'software' | 'cyber'

// Definimos la interfaz de las props
interface HeroSwitchProps {
  activeTab: SwitchOption;
  setActiveTab: (tab: SwitchOption) => void;
}

export default function HeroSwitch({ activeTab, setActiveTab }: HeroSwitchProps) {
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
