export default function PricingCard({ title, description, price, features, highlighted = false }) {
  return (
    <div
      className={`card flex h-full flex-col justify-between ${
        highlighted ? 'card-highlighted scale-[1.02]' : ''
      }`}
    >
      <div>
        <span className={`mb-3 ${highlighted ? 'section-label-inv' : 'section-label'}`}>
          {title}
        </span>

        <p className="card__description">{description}</p>

        <div className="mb-4">
          <span className="text-price">{price}</span>
        </div>

        <ul className="feature-list text-sm lg:text-base">
          {features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <a
        href="#contact"
        className={`mt-6 w-full justify-center ${
          highlighted ? 'btn-primary-blur' : 'btn-secondary-blur'
        }`}
      >
        Empezar proyecto
      </a>
    </div>
  )
}