import { motion } from 'motion/react'
import { NAV_LINKS, EASE } from '../../data/constants'
import BrandLogo from '../ui/BrandLogo'
import PrimaryButton from '../ui/PrimaryButton'
import '../../styles/layout/navbar.css'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="navbar"
    >
      <div className="navbar-brand">
        <BrandLogo />
        <span className="navbar-brand-text">milogo.</span>
      </div>
      <div className="navbar-links">
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} className="navbar-link">
            {link.label}
          </a>
        ))}
      </div>
      <a href="#contact">
        <PrimaryButton label="Contacto" />
      </a>
    </motion.nav>
  )
}
