import { FOOTER_LINKS } from '../../data/constants'
import BrandLogo from '../ui/BrandLogo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
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
                  <a href={link.href} className="footer-link">
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
                  <a href={link.href} className="footer-link">
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
          <span>&copy; {year} Nombre. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="footer-link">Privacidad</a>
            <a href="#" className="footer-link">Terminos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
