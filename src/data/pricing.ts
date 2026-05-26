import type { Plan } from '../types'

export const PLANS: Plan[] = [
  {
    id: 'software-landing',
    title: 'Landing Page',
    description:
      'Diseñada para convertir visitas en consultas. La opción rápida para quienes necesitan empezar a vender ya.',
    price: '250 – 600 USD',
    features: [
      'Estructura enfocada en ventas',
      'Optimización de velocidad (Carga instantánea)',
      'Formularios de contacto inteligentes',
      'Configuración de dominio y hosting',
      'Adaptada 100% a celulares',
    ],
  },
  {
    id: 'software-web-profesional',
    title: 'Web Profesional',
    description:
      'Tu negocio escalado al mundo digital. Una presencia sólida que genera confianza y automatiza tus procesos.',
    price: '800 – 1500 USD',
    features: [
      'Hasta 5 secciones personalizadas',
      'Gestor de contenidos (Editá vos mismo)',
      'Pasarelas de pago integradas',
      'Estrategia de SEO para aparecer en Google',
      'Botón de WhatsApp y redes integradas',
    ],
    highlighted: true,
  },
  {
    id: 'software-saas',
    title: 'Sistema a medida / SaaS',
    description:
      'Herramientas potentes para problemas específicos. Digitalizamos tu operativa para que dejes de perder tiempo.',
    price: 'Desde 1800 USD',
    features: [
      'Paneles de administración avanzados',
      'Gestión de usuarios y permisos',
      'Automatización de tareas repetitivas',
      'Base de datos segura y escalable',
      'Soporte técnico prioritario',
    ],
  },
]

export const CYBER_PLANS: Plan[] = [
  {
    id: 'cyber-auditoria',
    title: 'Auditoria de riesgo inicial',
    description:
      'Radiografia completa de tu superficie de ataque y un roadmap de remediacion priorizado.',
    price: '700 – 1200 USD',
    features: [
      'Inventario de activos y accesos',
      'Analisis de configuracion y permisos',
      'Reporte ejecutivo + tecnico',
      'Plan de mitigacion en 7 dias',
    ],
  },
  {
    id: 'cyber-pentesting',
    title: 'Pentesting caja negra/blanca',
    description:
      'Simulacion de ataques reales sobre apps, APIs y redes internas.',
    price: '1500 – 3500 USD',
    features: [
      'OWASP + pruebas personalizadas',
      'Hallazgos con CVSS y evidencia',
      'Reunion de cierre con tu equipo',
      'Re-testeo de vulnerabilidades criticas',
    ],
    highlighted: true,
  },
  {
    id: 'cyber-secops',
    title: 'SecOps continuo',
    description:
      'Monitoreo, hardening y respuesta a incidentes con SLA claro.',
    price: 'Desde 900 USD/mes',
    features: [
      'Alertas 24/7 y playbooks activos',
      'SIEM + correlacion de eventos',
      'Remediacion mensual priorizada',
      'Reportes para compliance y auditoria',
    ],
  },
]
