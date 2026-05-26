import type { MethodologyPillar, Step } from '../types'

export const METHODOLOGY_PILLARS: MethodologyPillar[] = [
  {
    iconName: 'zap',
    titleSegments: [
      { text: 'Sin ' },
      { text: 'tecnicismos', highlight: 'error' },
      { text: ', solo ' },
      { text: 'resultados', highlight: 'accent' },
    ],
    description:
      'Construimos herramientas que cargan al instante y cumplen su objetivo principal: conseguir clientes.',
    features: [
      { text: 'Carga instantánea asegurada', type: 'check' },
      { text: 'Diseño enfocado en conversiones', type: 'check' },
      { text: 'Palabras raras o humo', type: 'cross' },
    ],
  },
  {
    iconName: 'check-clipboard',
    titleSegments: [{ text: 'Procesos ágiles y claros' }],
    description:
      'Vas a saber siempre en qué punto estamos, sin sorpresas en el presupuesto ni fechas que se estiran.',
    features: [
      { text: 'Fechas de entrega estrictas', type: 'check' },
      { text: 'Comunicación directa por Meet y WhatsApp', type: 'check' },
      { text: 'Vueltas innecesarias', type: 'cross' },
    ],
  },
]

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Escuchar y planificar',
    description:
      'Primero entendemos tu negocio. No programamos a ciegas. Te ayudamos a priorizar qué funciones te van a traer clientes reales y dejamos lo innecesario para después. Definimos el rumbo juntos.',
  },
  {
    number: '02',
    title: 'Diseño y arquitectura',
    description:
      'Antes de tirar una sola línea de código, armamos una maqueta visual para que veas exactamente cómo va a quedar. En paralelo, definimos la estructura tecnológica para que el sistema sea rápido y seguro.',
  },
  {
    number: '03',
    title: 'Desarrollo y lanzamiento',
    description:
      'Manos a la obra. Construimos tu proyecto manteniéndote al tanto del progreso. Lo probamos a fondo, lo subimos a internet y lo dejamos listo para que empieces a operar desde el día uno.',
  },
]
