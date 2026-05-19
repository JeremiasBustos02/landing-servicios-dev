import { motion } from 'motion/react'
import { NAV_LINKS } from '../../data/constants'
import BrandLogo from '../ui/BrandLogo'
import PrimaryButton from '../ui/PrimaryButton'

const ease = [0.21, 0.47, 0.32, 0.98] as const

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="mx-auto flex items-center justify-between px-6 py-6 max-w-6xl"
    >
      <div className="flex items-center gap-3">
        <BrandLogo />
        <span className="text-sm font-semibold tracking-[0.4em] uppercase text-white/80">milogo.</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} className="transition-colors hover:text-white">
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
