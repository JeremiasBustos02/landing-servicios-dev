import { m } from 'motion/react'
import { useLenis } from 'lenis/react'
import { FOOTER_LINKS, EASE } from '../../data/constants'
import BrandLogo from '../ui/BrandLogo'
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
}
export default function Footer() {
  const year = new Date().getFullYear()
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
    <m.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="footer"
    >
      <div className="liquid-glass footer-inner">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <BrandLogo />
            <p className="text-white/60 mt-3 max-w-sm">
              Desarrollo web y software a medida para negocios que buscan resultados reales, sin tecnicismos.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="footer-cta-btn"
          >
            Escribinos por WhatsApp
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12 text-sm text-white/70">
          <div>
            <h4 className="footer-heading">Servicios</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.servicios.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => handleScroll(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Empresa</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.empresa.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => handleScroll(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Conectemos</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.social.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => handleScroll(e, link.href)}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Contacto</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.contacto.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => handleScroll(e, link.href)}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Nombre. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <button type="button" className="footer-link" onClick={() => lenis?.scrollTo(0)}>Privacidad</button>
            <button type="button" className="footer-link" onClick={() => lenis?.scrollTo(0)}>Terminos</button>
          </div>
        </div>
      </div>
    </m.footer>
  )
}