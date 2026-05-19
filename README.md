# mi-landing-servicios

Landing page profesional para un servicio de desarrollo web y software a medida. Construida con React + Vite + Tailwind CSS v4.

## Tecnologías

- **React 19** — UI declarativa con componentes funcionales y hooks
- **Vite 8** — bundler rápido con HMR
- **Tailwind CSS v4** — estilos utilitarios con `@tailwindcss/vite`
- **Lucide React** — iconos SVG ligeros
- **ESLint** — linting con flat config

## Scripts

| Comando            | Descripción                       |
| ------------------ | --------------------------------- |
| `npm run dev`      | Inicia servidor de desarrollo     |
| `npm run build`    | Compila para producción           |
| `npm run preview`  | Previsualiza el build de producción |
| `npm run lint`     | Ejecuta ESLint                    |

## Instalación

```bash
npm install
npm run dev
```

## Estructura

```
src/
├── assets/              # Imágenes estáticas (hero.png, svgs)
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, Services, Testimonials, Pricing, CTA, FAQ, Contact
│   └── ui/              # MeshWrapper, PricingCard, ProcessSteps, TestimonialCarousel
├── data/
│   └── constants.jsx    # Planes, testimonios, FAQ, nav links, etc.
├── hooks/
│   └── useScrollReveal  # IntersectionObserver para animaciones al hacer scroll
├── styles/
│   ├── base/            # tokens (CSS custom properties), reset, utilities
│   ├── layout/          # navbar.css, footer.css
│   ├── sections/        # hero, services, testimonials, faq, cta, contact, pricing
│   └── ui/              # animations, buttons, cards, mesh, typography
├── App.jsx              # Componente raíz que ensambla todas las secciones
├── index.css            # Entry point CSS (Google Fonts + Tailwind + estilos locales)
└── main.jsx             # Punto de entrada de React
```

## Secciones

- **Hero** — Presentación con glow interactivo que sigue el mouse y prueba social
- **Servicios / Metodología** — Pilares de valor con checklist y proceso de 3 pasos expandible
- **Testimonios** — Tarjetas con citas de clientes y avatares con iniciales
- **Precios** — 3 planes (Landing Page, Web Profesional destacado, Sistema a medida)
- **CTA** — Llamado a la acción directo
- **FAQ** — Acordeón de preguntas frecuentes
- **Contacto** — Formulario con enlaces a WhatsApp y email
- **Footer** — Navegación completa, redes sociales y enlaces legales

## Notas

- **SPA puro** — Sin Next.js ni enrutamiento. Cada "sección" es un componente que se renderiza en la misma página mediante anclas (`#id`).
- **No hay backend** — Los datos son estáticos (archivo `data/constants.jsx`). No se consume ninguna API.
- **CSS con capas (`@layer`)** — Organizado en `base`, `components` y `utilities` con `@import` para mantener el CSS modular sin conflicts con Tailwind.
- **Animaciones** — Scroll reveal mediante `IntersectionObserver` (hook `useScrollReveal`) y efecto de partículas interactivo en escritorio (`MeshWrapper` con Canvas).
