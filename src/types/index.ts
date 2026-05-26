export type SwitchOption = 'software' | 'cyber'

export interface Plan {
  title: string
  description: string
  price: string
  features: string[]
  highlighted?: boolean
}

export interface NavSubItem {
  href: string
  label: string
}

export interface NavGroup {
  title: string
  items: NavSubItem[]
}

export interface NavLink {
  href?: string
  label: string
  groups?: NavGroup[]
}

export interface FAQ {
  pregunta: string
  respuesta: string
}

export interface Testimonial {
  name: string
  role: string
  text: string
  initials: string
}

export interface FeatureItem {
  text: string
  type: 'check' | 'cross'
}

export interface TitleSegment {
  text: string
  highlight?: 'error' | 'accent'
}

export interface MethodologyPillar {
  iconName: 'zap' | 'check-clipboard'
  titleSegments: TitleSegment[]
  description: string
  features: FeatureItem[]
}

export interface Step {
  number: string
  title: string
  description: string
}

export interface FooterLinkGroupItem {
  name: string
  href: string
  external?: boolean
}

export interface FooterLinks {
  servicios: FooterLinkGroupItem[]
  empresa: FooterLinkGroupItem[]
  social: FooterLinkGroupItem[]
  contacto: FooterLinkGroupItem[]
}

export interface ContactInfo {
  email: string
  whatsapp: string
  whatsappLink: string
}

export interface ProjectData {
  title: string
  category: string
  image: string
}
