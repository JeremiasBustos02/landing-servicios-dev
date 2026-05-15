'use client'

import { useRef, useState, useEffect } from 'react'
import { TESTIMONIALS } from "../data/constants"

export default function Testimonials() {
    const infiniteTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
    
    const trackRef = useRef(null);
    const [isDraggingState, setIsDraggingState] = useState(false);
    
    const dragState = useRef({
        isDragging: false,
        startX: 0,
        scrollLeft: 0,
        isHovered: false
    });
    
    // Nueva referencia para manejar la pausa por la "inercia" del iPhone
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animationId;
        
        const autoScroll = () => {
            if (!dragState.current.isDragging && !dragState.current.isHovered) {
                track.scrollLeft += 1; 
            }

            const singleSetWidth = track.scrollWidth / 3;
            
            if (track.scrollLeft >= singleSetWidth * 2) {
                track.scrollLeft -= singleSetWidth;
            } else if (track.scrollLeft <= 0) {
                track.scrollLeft += singleSetWidth;
            }

            animationId = requestAnimationFrame(autoScroll);
        };

        animationId = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    const handleMouseDown = (e) => {
        dragState.current.isDragging = true;
        dragState.current.startX = e.pageX - trackRef.current.offsetLeft;
        dragState.current.scrollLeft = trackRef.current.scrollLeft;
        setIsDraggingState(true);
    };

    const handleMouseMove = (e) => {
        if (!dragState.current.isDragging) return;
        e.preventDefault();
        const x = e.pageX - trackRef.current.offsetLeft;
        const walk = (x - dragState.current.startX) * 1.5;
        trackRef.current.scrollLeft = dragState.current.scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        dragState.current.isDragging = false;
        setIsDraggingState(false);
    };

    // FIX: Detecta el scroll por inercia nativo del iPhone
    const handleScroll = () => {
        dragState.current.isHovered = true; // Pausamos el auto-scroll de JS
        
        // Limpiamos el temporizador anterior
        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }
        
        // Si el usuario deja de scrollear por 150ms, retomamos el auto-scroll
        scrollTimeout.current = setTimeout(() => {
            if (!dragState.current.isDragging) {
                dragState.current.isHovered = false;
            }
        }, 150);
    };

    return (
        <section id="testimonials" className="section overflow-hidden">
            <div className="container border-t border-black/20 mt-4 pt-16">
                
                <div className="flex flex-col items-start gap-4 mb-8 text-left">
                    <span className="section-label-inv reveal-fade">Casos de éxito</span>
                    <h2 className="heading-lg reveal-fade">Lo que dicen quienes ya confiaron</h2>
                </div>

                <div className="carousel-container reveal-fade">
                    <div 
                        ref={trackRef}
                        /* Agregamos estilo nativo de iOS para scroll suave */
                        style={{ WebkitOverflowScrolling: 'touch' }}
                        className={`carousel-track overflow-x-auto no-scrollbar select-none ${isDraggingState ? 'cursor-grabbing' : 'cursor-grab'}`}
                        
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={() => {
                            handleMouseUpOrLeave();
                            dragState.current.isHovered = false;
                        }}
                        onMouseEnter={() => dragState.current.isHovered = true}
                        
                        // FIX: Escuchamos el evento onScroll en lugar del touch para controlar la inercia
                        onScroll={handleScroll}
                        onTouchStart={() => dragState.current.isHovered = true}
                    >
                        {infiniteTestimonials.map((item, index) => (
                            <div key={index} className="testimonial-card h-auto w-[300px] md:w-[400px] shrink-0">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--border-green)' }} className="mb-4 shrink-0 pointer-events-none">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="testimonial-text mb-6 pointer-events-none">"{item.text}"</p>
                                <div className="testimonial-author mt-auto pointer-events-none">
                                    <div className="avatar">{item.initials}</div>
                                    <div className="flex flex-col">
                                        <span className="font-bold" style={{ fontFamily: 'var(--font-display)' }}>{item.name}</span>
                                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}