import { FOOTER_LINKS } from '../data/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        
        {/* 1. SECCIÓN CTA (Llamado a la acción) */}
        <div className="footer-cta flex flex-col items-center gap-6">
          <h2 className="heading-xl text-white">¿Listo para arrancar?</h2>
          <p className="lead" style={{ color: 'var(--text-muted)' }}>
            Dejá de perder tiempo y clientes. Hablemos hoy mismo sobre tu proyecto 
            y definamos un plan de acción claro.
          </p>
          {/* Botón usando tu clase outline ya existente */}
          <a href="#contact" className="btn-primary-blur mt-4">
            Escríbenos por WhatsApp
          </a>
        </div>

        {/* 2. SECCIÓN LINKS (Fat Footer real) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          
          {/* Columna de Marca */}
          <div className="col-span-2 md:col-span-1">
            <span className="footer-logo">milogo.</span>
            <p className="text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
              Desarrollo web y software a medida para negocios que buscan resultados reales, sin tecnicismos.
            </p>
          </div>

          {/* Columna Servicios */}
          <div>
            <h4 className="footer-heading">Servicios</h4>
            <ul>
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Empresa */}
          <div>
            <h4 className="footer-heading">Empresa</h4>
            <ul>
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Social */}
          <div>
            <h4 className="footer-heading">Conectemos</h4>
            <ul>
              {FOOTER_LINKS.social.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="footer-link"
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 3. SECCIÓN BOTTOM (Copyright) */}
        <div className="footer-bottom">
          <span>&copy; {currentYear} Nombre. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>

      </div>
    </footer>
  )
}