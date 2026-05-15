import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/constants'


export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`navbar sticky top-0 z-50 w-full h-20 ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container h-full flex items-center justify-between">

          <a href="#" className="navbar-logo" onClick={close}>milogo.</a>

          {/* ── Desktop nav ── */}
          <nav className="navbar-links hidden md:flex gap-8 items-center font-medium">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>
            ))}
            <a href="#contact" className="btn-primary-blur">Contacto</a>
          </nav>

          {/* ── Hamburger button ── */}
          <button
            className={`hamburger md:hidden ${open ? 'hamburger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
          </button>

        </div>
      </header>

      {/* ── Overlay ── */}
      <div
        className={`drawer-overlay ${open ? 'drawer-overlay--visible' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Drawer ── */}
      <nav
        className={`drawer ${open ? 'drawer--open' : ''}`}
        aria-hidden={!open}
      >
        <div className="drawer__header">
          <span className="navbar-logo">milogo.</span>
          <button className="drawer__close" onClick={close} aria-label="Cerrar menú">✕</button>
        </div>

        <ul className="drawer__links">
          {NAV_LINKS.map((l, i) => (
            <li
              key={l.href}
              className="drawer__item"
              style={{ '--i': i }}
            >
              <a href={l.href} className="drawer__link" onClick={close}>
                {l.label}
                <span className="drawer__arrow">→</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary drawer__cta" onClick={close}>
          Hablemos →
        </a>
      </nav>
    </>
  )
}