export default function CTA() {
  return (
    <section className="cta-section section">
      {/* Eliminamos el <div className="container"> */}
      <div className="cta-inner reveal-fade">

        {/* Decorative accent line */}
        <div className="cta-accent-line" aria-hidden="true" />

        <div className="cta-content">
          <span className="section-label-inv cta-label">Esto es urgente</span>

          <h2 className="heading-xl cta-heading">
            Cada día sin web profesional<br />
            es un cliente que se va<br />
            <span className="cta-heading--accent">a tu competencia.</span>
          </h2>

          <p className="lead cta-lead">
            No hace falta un presupuesto millonario ni meses de espera. Hoy mismo podés tener un plan claro, una fecha de entrega y una herramienta que trabaje por vos las 24 horas.
          </p>

          <div className="cta-actions">
            <a href="#contact" className="cta-btn-primary">
              <span>Quiero mi web ahora</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#pricing" className="cta-btn-secondary">
              Ver precios →
            </a>
          </div>

          <p className="cta-trust">
            ✓ Sin compromiso &nbsp;&nbsp; ✓ Presupuesto en 24 hs &nbsp;&nbsp; ✓ 50% al terminar
          </p>
        </div>

        {/* Visual decoration */}
        <div className="cta-visual" aria-hidden="true">
          <div className="cta-stat">
            <span className="cta-stat__number">3x</span>
            <span className="cta-stat__label">más consultas con una web optimizada</span>
          </div>
          <div className="cta-stat">
            <span className="cta-stat__number">2 sem</span>
            <span className="cta-stat__label">tiempo promedio de entrega</span>
          </div>
          <div className="cta-stat">
            <span className="cta-stat__number">100%</span>
            <span className="cta-stat__label">adaptada a celulares</span>
          </div>
        </div>

      </div>
    </section>
  )
}