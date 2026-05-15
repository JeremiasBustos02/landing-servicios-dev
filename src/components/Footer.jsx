import { FOOTER_LINKS } from '../data/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-cta flex flex-col items-center gap-6">
          <h2 className="heading-xl text-white">¿Listo para arrancar?</h2>
          <p className="lead footer-cta__lead">
            Dejá de perder tiempo y clientes. Hablemos hoy mismo sobre tu proyecto
            y definamos un plan de acción claro.
          </p>
          <a href="#contact" className="btn-primary-blur mt-4">
            Escríbenos por WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          <div className="col-span-2 md:col-span-1">
            <span className="footer-logo">milogo.</span>
            <p className="footer-tagline">
              Desarrollo web y software a medida para negocios que buscan resultados reales, sin tecnicismos.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Servicios</h4>
            <ul>
              {FOOTER_LINKS.servicios.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Empresa</h4>
            <ul>
              {FOOTER_LINKS.empresa.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Conectemos</h4>
            <ul>
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

        </div>

        <div className="footer-bottom">
          <span>&copy; {year} Nombre. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>

      </div>
    </footer>
  )
}