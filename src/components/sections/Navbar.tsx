import { useState, useEffect } from 'react'
import { m } from 'motion/react'
import { useLenis } from 'lenis/react'
import { NAV_LINKS, EASE } from '../../data/constants'
import BrandLogo from '../ui/BrandLogo'
import PrimaryButton from '../ui/PrimaryButton'
import { Menu, X } from 'lucide-react'
import type { SwitchOption } from '../../types'
import '../../styles/layout/navbar.css'

interface NavbarProps {
  activeTab: SwitchOption;
  setActiveTab: (tab: SwitchOption) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const lenis = useLenis()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)
  const [pendingScroll, setPendingScroll] = useState<string | null>(null)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string, itemTab?: SwitchOption) => {
    if (!target.startsWith('#')) return
    e.preventDefault()
    setMobileOpen(false)
    setExpandedGroup(null)

    if (itemTab && itemTab !== activeTab) {
      setPendingScroll(target)
      setActiveTab(itemTab)
      return
    }

    if (target === '#') {
      lenis?.scrollTo(0)
      return
    }
    lenis?.scrollTo(target)
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [mobileOpen])

  useEffect(() => {
    if (!pendingScroll) return
    const raf = requestAnimationFrame(() => {
      lenis?.scrollTo(pendingScroll)
      setPendingScroll(null)
    })
    return () => cancelAnimationFrame(raf)
  }, [pendingScroll, lenis])

  return (
    <m.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 navbar-pinned"
    >
      <div className="navbar">
        <div className="navbar-brand">
          <BrandLogo />
          <span className="navbar-brand-text">milogo.</span>
        </div>

        <div className="navbar-links">
          {NAV_LINKS.map(link =>
            link.groups ? (
              <div key={link.label} className="navbar-dropdown-wrapper">
                <button
                  type="button"
                  className="navbar-link navbar-dropdown-trigger"
                  aria-haspopup="true"
                  aria-expanded={false}
                >
                  {link.label}
                </button>
                <div className="navbar-dropdown" role="menu">
                  <div className="liquid-glass rounded-2xl border border-white/10 p-4 flex flex-col gap-5 min-w-[280px]">
                    {link.groups.map(group => (
                      <div key={group.title}>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 px-1">
                          {group.title}
                        </p>
                        <div className="flex flex-col gap-1">
                          {group.items.map(item => (
                              <a
                                key={item.label}
                                href={item.href}
                                role="menuitem"
                                className="navbar-dropdown-item"
                                onClick={(e) => handleScroll(e, item.href, item.tab)}
                              >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href!}
                className="navbar-link"
                onClick={(e) => handleScroll(e, link.href!)}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="navbar-cta-desktop">
          <PrimaryButton label="Contacto" />
        </a>

        <button
          type="button"
          className="navbar-menu-btn"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          aria-controls="navbar-mobile-menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="navbar-mobile-menu"
        className={`navbar-mobile-menu ${mobileOpen ? 'navbar-mobile-menu--open' : ''}`}
      >
        <div className="flex flex-col gap-1 mb-3">
          {NAV_LINKS.map(link =>
            link.groups ? (
              <div key={link.label} className="flex flex-col">
                <button
                  type="button"
                  className="navbar-mobile-link"
                  onClick={() => setExpandedGroup(expandedGroup === link.label ? null : link.label)}
                  aria-expanded={expandedGroup === link.label}
                >
                  {link.label}
                  <svg
                    className={`size-3 transition-transform duration-200 ${expandedGroup === link.label ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedGroup === link.label && (
                  <div className="flex flex-col pl-4 gap-1 pb-2">
                    {link.groups.map(group => (
                      <div key={group.title}>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 pt-2 pb-1 px-2">
                          {group.title}
                        </p>
                        {group.items.map(item => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="navbar-mobile-link navbar-mobile-link--sub"
                            onClick={(e) => handleScroll(e, item.href, item.tab)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href!}
                className="navbar-mobile-link"
                onClick={(e) => handleScroll(e, link.href!)}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleScroll(e, '#contact')}
          className="navbar-cta-mobile"
          aria-label="Contacto"
        >
          <PrimaryButton label="Contacto" className="w-full justify-center" />
        </a>
      </div>
    </m.nav>
  )
}
