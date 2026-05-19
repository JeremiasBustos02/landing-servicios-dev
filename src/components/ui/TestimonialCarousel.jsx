'use client'

import { TESTIMONIALS } from '../../data/constants'

export default function TestimonialCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {TESTIMONIALS.map((item, i) => (
          <div key={i} className="testimonial-card">
            {/* Comillas SVG */}
            <svg
              width="28" height="28" viewBox="0 0 24 24" fill="currentColor"
              className="mb-4 shrink-0"
              style={{ color: 'var(--border-green)' }}
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            {/* Texto: flex-grow hace que empuje al autor hacia abajo si la card es más alta */}
            <p className="testimonial-text flex-grow mb-6">"{item.text}"</p>
            
            {/* Autor: mt-auto lo ancla siempre en la base de la tarjeta */}
            <div className="testimonial-author mt-auto flex items-center gap-3">
              <div className="avatar">{item.initials}</div>
              <div className="flex flex-col">
                <span className="testimonial-name font-bold">{item.name}</span>
                <span className="testimonial-role text-sm opacity-80">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}