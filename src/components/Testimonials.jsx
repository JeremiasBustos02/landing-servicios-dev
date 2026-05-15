'use client'

import TestimonialCarousel from './TestimonialCarousel'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section overflow-hidden isolate-wrapper">
      <div className="container border-t border-black/20 mt-4 pt-16">

        <div className="flex flex-col items-start gap-4 mb-8">
          <span className="section-label-inv reveal-fade">Casos de éxito</span>
          <h2 className="heading-lg reveal-fade">Lo que dicen quienes ya confiaron</h2>
        </div>

        <div className="reveal-fade">
          <TestimonialCarousel />
        </div>

      </div>
    </section>
  )
}