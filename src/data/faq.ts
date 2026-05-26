import type { FAQ } from '../types'

export const FAQS: FAQ[] = [
  {
    pregunta: '¿Cuánto tiempo tarda el desarrollo?',
    respuesta:
      'Depende de la complejidad. Una Landing Page suele estar lista en 1 o 2 semanas. Una Web Profesional o un Sistema a medida lleva más tiempo, pero siempre definimos una fecha de entrega clara en el presupuesto y la respetamos a rajatabla.',
  },
  {
    pregunta: '¿Tengo que pagar un mantenimiento mensual?',
    respuesta:
      'No es obligatorio. Te entregamos la web funcionando al 100% y es tuya. Si querés que nos encarguemos de mantenerla actualizada, hacer backups y gestionar el servidor mes a mes, te ofrecemos un abono opcional. La decisión es tuya.',
  },
  {
    pregunta: 'No entiendo nada de tecnología, ¿es un problema?',
    respuesta:
      'Para nada. Ese es nuestro trabajo. Nos encargamos de todo el lado técnico: dominio, hosting, código y configuraciones. Vos solo tenés que contarnos sobre tu negocio y qué querés lograr.',
  },
  {
    pregunta: '¿Cómo es la forma de pago?',
    respuesta:
      'Trabajamos con un 50% de anticipo para arrancar el proyecto y el 50% restante contra entrega, una vez que la web está terminada y aprobada. Aceptamos transferencias, Mercado Pago y criptomonedas.',
  },
]

export const CYBER_FAQS: FAQ[] = [
  {
    pregunta: 'Cuanto tarda una auditoria completa?',
    respuesta:
      'Entre 7 y 15 dias segun el alcance. Definimos un cronograma claro y entregables semanales para que veas avances reales.',
  },
  {
    pregunta: 'El pentesting afecta mis sistemas en produccion?',
    respuesta:
      'No. Coordinamos ventanas seguras y usamos metodologias de hackeo etico para minimizar impacto. Probamos primero en entornos controlados si aplica.',
  },
  {
    pregunta: 'Que estandares y marcos utilizan?',
    respuesta:
      'Trabajamos con OWASP, MITRE ATT&CK y NIST, ajustando el enfoque a tu industria y requisitos de compliance.',
  },
  {
    pregunta: 'Que incluye el informe final?',
    respuesta:
      'Un reporte ejecutivo, detalle tecnico con evidencia, severidad CVSS y un plan de remediacion priorizado con re-testeo de hallazgos criticos.',
  },
]
