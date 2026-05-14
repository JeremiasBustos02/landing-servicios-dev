export default function PricingCard({
  title,
  description,
  price,
  features,
  highlighted = false,
}) {
  return (
    <div className={`card flex flex-col justify-between ${highlighted ? 'card-highlighted scale-[1.02]' : ''}`}>
      <div>
        <span className={`mb-3 ${highlighted ? 'section-label-inv' : 'section-label'}`}>
          {title}
        </span>

        <p className="text-sm lg:text-base mb-4" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        <div className="mb-4">
          <span className="text-price">{price}</span>
        </div>

        <ul className="feature-list text-sm lg:text-base">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <a href="#contact" className={`w-full justify-center ${highlighted ? 'btn-primary' : 'btn-secondary'}`}>
        Empezar proyecto
      </a>
    </div>
  )
}