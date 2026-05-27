import { m } from 'motion/react'
import { useScrollTo } from '@/hooks'
import PrimaryButton from '@/components/ui/PrimaryButton'
import { CTA_CONTENT, buildWhatsAppLink, fadeUp } from '@/data'
import '@/styles/sections/cta.css'
import type { SwitchOption } from '@/types'

interface CTAProps {
  activeTab: SwitchOption
}

export default function CTA({ activeTab }: CTAProps) {
  const { handleClick } = useScrollTo()

  const content = CTA_CONTENT[activeTab]

  return (
    <section className="max-w-6xl mx-auto px-6 py-5 md:py-12">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        <div className="absolute inset-0 cta-radial-glow" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            {content.title}
          </h2>

          <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buildWhatsAppLink(content.primaryButton.whatsappMessage)}
            >
              <PrimaryButton label={content.primaryButton.label} />
            </a>

            <a
              href={content.secondaryButton.href}
              onClick={(e) =>
                handleClick(e, content.secondaryButton.href)
              }
              className="liquid-glass-card rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition-colors"
            >
              {content.secondaryButton.label}
            </a>
          </div>
        </div>
      </m.div>
    </section>
  )
}