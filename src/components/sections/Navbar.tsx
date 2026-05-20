import { motion } from 'motion/react'
import { useLenis } from 'lenis/react'
import { NAV_LINKS, EASE } from '../../data/constants'
import BrandLogo from '../ui/BrandLogo'
import PrimaryButton from '../ui/PrimaryButton'
import '../../styles/layout/navbar.css'
export default function Navbar() {
  const lenis = useLenis()
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (!target.startsWith('#')) return
    e.preventDefault()
    if (target === '#') {
      lenis?.scrollTo(0)
      return
    }
    lenis?.scrollTo(target)
  }
  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40"
    >
      <div className="navbar">
        <div className="navbar-brand">
          <BrandLogo />
          <span className="navbar-brand-text">milogo.</span>
        </div>
        <div className="navbar-links">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>
          <PrimaryButton label="Contacto" />
        </a>
      </div>
    </motion.nav>
  )
}