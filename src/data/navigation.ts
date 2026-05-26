import type { NavLink, FooterLinks } from '../types'

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Servicios',
    groups: [
      {
        title: 'Desarrollo de software',
        items: [
          { href: '#pricing-software', label: 'Landing page', tab: 'software' },
          { href: '#pricing-software', label: 'Web profesional', tab: 'software' },
          { href: '#pricing-software', label: 'Sistema a medida / SaaS', tab: 'software' },
        ],
      },
      {
        title: 'Ciberseguridad',
        items: [
          { href: '#pricing-cyber', label: 'Auditoría de riesgo inicial', tab: 'cyber' },
          { href: '#pricing-cyber', label: 'Pentesting caja negra/blanca', tab: 'cyber' },
          { href: '#pricing-cyber', label: 'SecOps continuo', tab: 'cyber' },
        ],
      },
    ],
  },
  { href: '#process', label: 'Cómo trabajamos' },
  { href: '#pricing', label: 'Precios' },
  { href: '#faq', label: 'FAQ' },
]

export const FOOTER_LINKS: FooterLinks = {
  servicios: [
    { name: 'Desarrollo Web', href: '#pricing' },
    { name: 'Sistemas a Medida', href: '#pricing' },
    { name: 'Landing Pages', href: '#pricing' },
  ],
  empresa: [
    { name: 'Metodología', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com', external: true },
    { name: 'GitHub', href: 'https://github.com', external: true },
    { name: 'Instagram', href: 'https://instagram.com', external: true },
  ],
  contacto: [
    { name: 'hola@midominio.com', href: 'mailto:hola@midominio.com' },
    { name: '+54 9 2266 483093', href: 'https://wa.me/5492266483093' },
  ],
}
