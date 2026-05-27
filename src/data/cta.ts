import type { SwitchOption } from '@/types'

interface CTAContent {
  title: string
  description: string
  primaryButton: {
    label: string
    whatsappMessage: string
  }
  secondaryButton: {
    label: string
    href: string
  }
}

export const CTA_CONTENT: Record<SwitchOption, CTAContent> = {
  software: {
    title: 'Tu próximo proyecto. Hecho realidad.',
    description:
      'Deja de perder clientes por una web que no convierte. Únete a los negocios que ya escalaron sus ventas con nosotros.',

    primaryButton: {
      label: 'Hablar por WhatsApp',
      whatsappMessage:
        'Hola! Vi la sección de desarrollo de software y me gustaría hablar sobre mi proyecto.',
    },

    secondaryButton: {
      label: 'Agendar una llamada',
      href: '#contact',
    },
  },

  cyber: {
    title: 'Detectemos tu superficie de ataque hoy.',
    description:
      'Un escaneo inicial revela brechas criticas antes de que impacten tu operacion. Actuemos con datos.',

    primaryButton: {
      label: 'Solicitar escaneo inicial',
      whatsappMessage:
        'Hola! Vi la sección de ciberseguridad y me gustaría solicitar un escaneo inicial.',
    },

    secondaryButton: {
      label: 'Agendar reunion tecnica',
      href: '#contact',
    },
  },
}

export const FINAL_CTA_CONTENT: Record<SwitchOption, CTAContent> = {
  software: {
    title: 'Listo para convertir visitas en clientes?',
    description:
      'Hablemos hoy y definamos un plan claro para tu proyecto.',

    primaryButton: {
      label: 'Escribinos por WhatsApp',
      whatsappMessage:
        'Hola! Quiero hablar sobre un proyecto de desarrollo de software.',
    },

    secondaryButton: {
      label: 'Ver planes',
      href: '#pricing',
    },
  },

  cyber: {
    title: 'Un incidente cuesta mas que prevenirlo.',
    description:
      'Empeza con una auditoria inicial y un plan de remediacion claro.',

    primaryButton: {
      label: 'Hablar con un especialista',
      whatsappMessage:
        'Hola! Quiero hablar con un especialista en ciberseguridad.',
    },

    secondaryButton: {
      label: 'Ver planes',
      href: '#pricing',
    },
  },
}