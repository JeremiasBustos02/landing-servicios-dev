import type { Plan } from '@/types'
import PrimaryButton from '@/components/ui/PrimaryButton'
import { CONTACT_INFO } from '@/data/contact'

interface PlanCardProps {
  plan: Plan
  buttonLabel: string
  variant?: 'software' | 'cyber'
}

const variantStyles = {
  software: {
    title: 'text-xl lg:text-2xl',
    price: 'text-3xl lg:text-4xl',
  },
  cyber: {
    title: 'text-xl lg:text-1xl',
    price: 'text-2xl lg:text-3xl',
  },
} as const

export default function PlanCard({
  plan,
  buttonLabel,
  variant = 'software',
}: PlanCardProps) {
  const styles = variantStyles[variant]

  const whatsappLink = `${CONTACT_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    plan.whatsappMessage
  )}`

  return (
    <div
      id={plan.id}
      className={`liquid-glass rounded-3xl border border-white/10 p-6 lg:p-8 flex flex-col h-full hover:-translate-y-2 transition-all duration-500 ${
        plan.highlighted ? 'pricing-pro border-[var(--shiny-center)]/50' : ''
      }`}
    >
      <div className="h-[140px]">
        <h3 className={`${styles.title} font-bold text-white tracking-tight`}>
          {plan.title}
        </h3>

        <p className="text-white/60 mt-3 leading-relaxed">
          {plan.description}
        </p>
      </div>

      <div className="mt-4 mb-6 pb-6 border-b border-white/10 shrink-0">
        <span
          className={`${styles.price} font-extrabold text-white tracking-tighter whitespace-nowrap`}
        >
          {plan.price}
        </span>
      </div>

      <div className="space-y-3 text-sm text-[var(--text-primary)] flex-grow">
        {plan.features.map(feature => (
          <div key={feature} className="flex items-start gap-3">
            <span className="size-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
            <span className="leading-tight">{feature}</span>
          </div>
        ))}
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PrimaryButton
          label={buttonLabel}
          className="w-full justify-center mt-8 shrink-0"
        />
      </a>
    </div>
  )
}