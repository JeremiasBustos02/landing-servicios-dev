'use client'

import { CONTACT_INFO } from '../data/constants'

export default function Contact() {

    // Función temporal para evitar que la página recargue al mandar el form
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("¡Mensaje de prueba! Más adelante lo conectamos a un servicio de emails.");
    };

    return (
        <section id="contact" className="bg-section-off-white section">
            <div className="container max-w-5xl">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* COLUMNA IZQUIERDA: Textos y Contacto Directo */}
                    <div className="flex flex-col gap-6 text-left reveal-fade">

                        <span className="section-label self-start">Contacto</span>

                        <h2 className="heading-xl">Hablemos.</h2>
                        <p className="lead">
                            Cuéntanos sobre tu negocio y qué tenés en mente. Te respondemos rápido,
                            sin compromiso y con una propuesta clara sobre la mesa.
                        </p>

                        {/* Contenedor de las Mini-Cards */}
                        <div className="flex flex-col gap-4 mt-4">

                            {/* Mini-card Correo */}
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200 hover:border-green-500 hover:shadow-md transition-all text-left"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 group-hover:bg-green-50 transition-colors shrink-0">
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-colors">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div className="overflow-hidden">
                                    <span className="block text-sm font-medium text-gray-500 mb-0.5">Envíanos un correo</span>
                                    <span className="block text-base font-semibold text-gray-900 truncate">{CONTACT_INFO.email}</span>
                                </div>
                            </a>

                            {/* Mini-card WhatsApp */}
                            <a
                                href={CONTACT_INFO.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#25D366] hover:shadow-md transition-all text-left"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366] transition-colors shrink-0">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div className="overflow-hidden">
                                    <span className="block text-sm font-medium text-gray-500 mb-0.5">Chateá con nosotros</span>
                                    <span className="block text-base font-semibold text-gray-900 truncate">{CONTACT_INFO.whatsapp}</span>
                                </div>
                            </a>

                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Formulario */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 reveal-fade">
                        <h3 className="heading-md mb-6">Envianos un mensaje</h3>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Nombre</label>
                                <input type="text" id="name" placeholder="Tu nombre" className="input-field" required />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                                <input type="email" id="email" placeholder="tucorreo@ejemplo.com" className="input-field" required />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">¿En qué te podemos ayudar?</label>
                                <textarea id="message" placeholder="Contame un poco sobre tu proyecto..." className="input-field" required></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full justify-center mt-2">
                                Enviar mensaje
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}