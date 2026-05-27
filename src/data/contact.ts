import type { ContactInfo } from '@/types'

export const CONTACT_INFO: ContactInfo = {
  email: 'hola@midominio.com',
  whatsapp: '+54 9 2266 483093',
  whatsappBaseUrl: 'https://wa.me/5492266483093',
}

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/5492266483093?text=${encodeURIComponent(message)}`