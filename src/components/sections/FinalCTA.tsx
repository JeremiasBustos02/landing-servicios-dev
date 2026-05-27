import { m } from 'motion/react'
import { useScrollTo } from '@/hooks'
import {
  FINAL_CTA_CONTENT,
  buildWhatsAppLink,
  fadeUp,
} from '@/data'
import PrimaryButton from '@/components/ui/PrimaryButton'
import type { SwitchOption } from '@/types'

interface FinalCTAProps {
  activeTab: SwitchOption
}

export default function FinalCTA({ activeTab }: FinalCTAProps) {
  const { handleClick } = useScrollTo()

  const content = FINAL_CTA_CONTENT[activeTab]

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeUp}
        className="liquid-glass rounded-3xl p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 cta-radial-glow" />

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {content.title}
          </h2>

          <p className="text-white/60 mt-4">
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
              className="liquid-glass-card rounded-full px-5 py-3 text-sm text-white/80 hover:text-white transition"
            >
              {content.secondaryButton.label}
            </a>
          </div>
        </div>
      </m.div>
    </section>
  )
}