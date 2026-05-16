export const PLANS = [
  {
    title: 'Landing Page',
    description: 'Diseñada para convertir visitas en consultas. La opción rápida para quienes necesitan empezar a vender ya.',
    price: '250 – 600 USD',
    features: [
      'Estructura enfocada en ventas',
      'Optimización de velocidad (Carga instantánea)',
      'Formularios de contacto inteligentes',
      'Configuración de dominio y hosting',
      'Adaptada 100% a celulares'
    ],
  },
  {
    title: 'Web Profesional',
    description: 'Tu negocio escalado al mundo digital. Una presencia sólida que genera confianza y automatiza tus procesos.',
    price: '800 – 1500 USD',
    features: [
      'Hasta 5 secciones personalizadas',
      'Gestor de contenidos (Editá vos mismo)',
      'Pasarelas de pago integradas',
      'Estrategia de SEO para aparecer en Google',
      'Botón de WhatsApp y redes integradas'
    ],
    highlighted: true,
  },
  {
    title: 'Sistema a medida / SaaS',
    description: 'Herramientas potentes para problemas específicos. Digitalizamos tu operativa para que dejes de perder tiempo.',
    price: 'Desde 1800 USD',
    features: [
      'Paneles de administración avanzados',
      'Gestión de usuarios y permisos',
      'Automatización de tareas repetitivas',
      'Base de datos segura y escalable',
      'Soporte técnico prioritario'
    ],
  },
]

export const NAV_LINKS = [
  { href: '#services', label: 'Servicios' },
  { href: '#testimonials', label: 'Testimonios' },
  { href: '#pricing', label: 'Precios' },
  { href: '#faq', label: 'FAQ' },
]

export const FAQS = [
  {
    pregunta: "¿Cuánto tiempo tarda el desarrollo?",
    respuesta: "Depende de la complejidad. Una Landing Page suele estar lista en 1 o 2 semanas. Una Web Profesional o un Sistema a medida lleva más tiempo, pero siempre definimos una fecha de entrega clara en el presupuesto y la respetamos a rajatabla."
  },
  {
    pregunta: "¿Tengo que pagar un mantenimiento mensual?",
    respuesta: "No es obligatorio. Te entregamos la web funcionando al 100% y es tuya. Si querés que nos encarguemos de mantenerla actualizada, hacer backups y gestionar el servidor mes a mes, te ofrecemos un abono opcional. La decisión es tuya."
  },
  {
    pregunta: "No entiendo nada de tecnología, ¿es un problema?",
    respuesta: "Para nada. Ese es nuestro trabajo. Nos encargamos de todo el lado técnico: dominio, hosting, código y configuraciones. Vos solo tenés que contarnos sobre tu negocio y qué querés lograr."
  },
  {
    pregunta: "¿Cómo es la forma de pago?",
    respuesta: "Trabajamos con un 50% de anticipo para arrancar el proyecto y el 50% restante contra entrega, una vez que la web está terminada y aprobada. Aceptamos transferencias, Mercado Pago y criptomonedas."
  }
]

export const TESTIMONIALS = [
  {
    name: "Martín S.",
    role: "Fundador de eCommerce",
    text: "Estaba cansado de programadores que me hablaban en difícil y desaparecían. Entendió mi necesidad al instante y en dos semanas tenía la web vendiendo. Cero vueltas.",
    initials: "MS"
  },
  {
    name: "Laura G.",
    role: "Directora de Operaciones",
    text: "El sistema a medida que nos armó nos ahorra literalmente 3 horas de trabajo manual por día. La inversión se pagó sola durante el primer mes de uso. Impecable.",
    initials: "LG"
  },
  {
    name: "Federico M.",
    role: "Emprendedor",
    text: "Necesitábamos una landing rápida para validar un servicio nuevo. Quedó espectacular, carga rapidísimo y es súper fácil de editar para nosotros. Un socio estratégico.",
    initials: "FM"
  }
]

export const METHODOLOGY_PILLARS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: (
      <>Sin <span className="text-error font-bold">tecnicismos</span>, solo <span className="text-accent font-bold">resultados</span></>
    ),
    description: "Construimos herramientas que cargan al instante y cumplen su objetivo principal: conseguir clientes.",
    features: [
      { text: "Carga instantánea asegurada", type: "check" },
      { text: "Diseño enfocado en conversiones", type: "check" },
      { text: "Palabras raras o humo", type: "cross" }
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Procesos ágiles y claros",
    description: "Vas a saber siempre en qué punto estamos, sin sorpresas en el presupuesto ni fechas que se estiran.",
    features: [
      { text: "Fechas de entrega estrictas", type: "check" },
      { text: "Comunicación directa por Meet y WhatsApp", type: "check" },
      { text: "Vueltas innecesarias", type: "cross" }
    ]
  }
];

export const STEPS = [
  {
    number: "01",
    title: "Escuchar y planificar",
    description: "Primero entendemos tu negocio. No programamos a ciegas. Te ayudamos a priorizar qué funciones te van a traer clientes reales y dejamos lo innecesario para después. Definimos el rumbo juntos."
  },
  {
    number: "02",
    title: "Diseño y arquitectura",
    description: "Antes de tirar una sola línea de código, armamos una maqueta visual para que veas exactamente cómo va a quedar. En paralelo, definimos la estructura tecnológica para que el sistema sea rápido y seguro."
  },
  {
    number: "03",
    title: "Desarrollo y lanzamiento",
    description: "Manos a la obra. Construimos tu proyecto manteniéndote al tanto del progreso. Lo probamos a fondo, lo subimos a internet y lo dejamos listo para que empieces a operar desde el día uno."
  }
];

export const FOOTER_LINKS = {
  servicios: [
    { name: "Desarrollo Web", href: "#pricing" },
    { name: "Sistemas a Medida", href: "#pricing" },
    { name: "Landing Pages", href: "#pricing" },
  ],
  empresa: [
    { name: "Metodología", href: "#services" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ],
  social: [
    { name: "LinkedIn", href: "https://linkedin.com", external: true },
    { name: "GitHub", href: "https://github.com", external: true },
    { name: "Instagram", href: "https://instagram.com", external: true },
  ],
  contacto: [
    { name: "hola@midominio.com", href: "mailto:hola@midominio.com" },
    { name: "+54 9 2266 483093", href: "https://wa.me/5492266483093" }
  ]
};

export const CONTACT_INFO = {
  email: "hola@midominio.com",
  whatsapp: "+54 9 2266 483093",
  whatsappLink: "https://wa.me/5492266483093?text=Hola!%20Vengo%20de%20tu%20web%20y%20me%20gustar%C3%ADa%20hacerte%20una%20consulta."
}