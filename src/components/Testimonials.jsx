import { TESTIMONIALS } from "../data/constants"

export default function Testimonials() {
    return (
        <section id="testimonials" className="section">
            <div className="container border-t border-black/20 mt-4 pt-16">
                <div className="flex flex-col items-start gap-4 mb-6 text-left">
                    <span className="section-label-inv reveal-fade">Casos de exito</span>
                    <h2 className="heading-lg reveal-fade">Lo que dicen quienes ya confiaron</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {TESTIMONIALS.map((item, index) => (
                        <div key={index} className="testimonial-card reveal-fade">
                            
                            <svg 
                                width="32" height="32" viewBox="0 0 24 24" fill="currentColor" 
                                style={{ color: 'var(--border-green)' }} 
                                className="mb-2"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>

                            <p className="testimonial-text">
                                "{item.text}"
                            </p>

                            <div className="testimonial-author">
                                <div className="avatar">
                                    {item.initials}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                                        {item.name}
                                    </span>
                                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                        {item.role}
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}