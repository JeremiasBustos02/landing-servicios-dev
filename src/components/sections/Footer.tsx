import { FOOTER_LINKS } from '../../data/constants'
import BrandLogo from '../ui/BrandLogo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="max-w-6xl mx-auto px-6 pb-16">
      <div className="liquid-glass rounded-3xl p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <BrandLogo />
            <p className="text-white/60 mt-3 max-w-sm">
              Desarrollo web y software a medida para negocios que buscan resultados reales, sin tecnicismos.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90"
          >
            Escribinos por WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12 text-sm text-white/70">
          <div>
            <h4 className="text-white font-semibold mb-3">Servicios</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.servicios.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Empresa</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.empresa.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Conectemos</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.social.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
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
            <h4 className="text-white font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.contacto.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
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

        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs text-white/40 gap-4">
          <span>&copy; {year} Nombre. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Terminos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
