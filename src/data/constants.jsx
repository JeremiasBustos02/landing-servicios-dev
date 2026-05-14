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

export const FAQS = [
  {
    pregunta: "¿Cuánto tiempo tarda el desarrollo?",
    respuesta: "Depende de la complejidad. Una Landing Page suele estar lista en 1 o 2 semanas. Una Web Profesional o un Sistema a medida lleva más tiempo, pero siempre definimos una fecha de entrega clara en el presupuesto y la respetamos a rajatabla."
  },
  {
    pregunta: "¿Tengo que pagar un mantenimiento mensual?",
    respuesta: "No es obligatorio. Yo te entrego la web funcionando al 100% y es tuya. Si querés que yo me encargue de mantenerla actualizada, hacer backups y gestionar el servidor mes a mes, te ofrezco un abono opcional. La decisión es tuya."
  },
  {
    pregunta: "No entiendo nada de tecnología, ¿es un problema?",
    respuesta: "Para nada. Ese es mi trabajo. Yo me encargo de todo el lado técnico: dominio, hosting, código y configuraciones. Vos solo tenés que contarme sobre tu negocio y qué querés lograr."
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
    title: <>
        Sin <span className="text-error font-bold">tecnicismos</span>, solo<span className="text-accent font-bold"> resultados</span> 
      </>,
    description: (
      <>
        Nos enfocamos en <span className="font-bold">soluciones reales</span>. No te mareamos con palabras raras ni 
        funcionalidades que no vas a usar. Construimos webs que cargan rápido, se 
        ven bien en cualquier pantalla y sobre todo, cumplen su objetivo: 
        <span className="text-accent font-bold"> conseguir clientes</span>.
      </>
    )
  },
  {
    title: "Procesos ágiles y claros",
    description: (
      <>
       <span className="text-error font-bold"> Odiamos las vueltas</span> tanto como vos. <span className="font-bold">Trabajo por etapas claras y con comunicación 
        directa</span>. Vas a saber siempre en qué punto estamos, sin sorpresas en el presupuesto 
        ni fechas de entrega que se estiran para siempre. Nuestra meta es que tengas tu web 
        lista en <span className="font-bold">tiempo récord.</span>
      </>
    )
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
  ]
};

export const CONTACT_INFO = {
  email: "hola@midominio.com",
  whatsapp: "+5492266483093", 
  whatsappLink: "https://wa.me/5492266483093?text=Hola!%20Vengo%20de%20tu%20web%20y%20me%20gustar%C3%ADa%20hacerte%20una%20consulta."
}