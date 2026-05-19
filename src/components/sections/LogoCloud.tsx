import { FOOTER_LINKS } from '../../data/constants'

const focusItems = [...FOOTER_LINKS.servicios, ...FOOTER_LINKS.empresa].map(item => item.name)

export default function LogoCloud() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <p className="text-sm uppercase tracking-[0.25em] text-white/50">Areas de foco</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-6 text-white/50 text-lg font-semibold tracking-tight">
        {focusItems.map(item => (
          <div key={item} className="text-center">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
