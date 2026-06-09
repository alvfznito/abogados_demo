'use client'

import { useState } from 'react'

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-inter font-medium">
              Contacto
            </span>
            <div className="w-12 h-px bg-gold/60" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4">
            Solicite Su Consulta Gratuita
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            Cuéntenos su caso. Nuestros abogados le responderán en menos de 24
            horas con total confidencialidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase font-inter mb-6">
                Información de contacto
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Teléfono',
                    value: '000 000 000',
                    href: 'tel:000000000',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'info@bufetecampos.es',
                    href: 'mailto:info@bufetecampos.es',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Dirección',
                    value: 'Calle Mayor 1, Tu ciudad',
                    href: '#',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: 'Horario',
                    value: 'Lunes – Viernes: 9:00 – 19:00',
                    href: '#',
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-inter mb-0.5 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-white font-inter text-sm group-hover:text-gold transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* First consultation badge */}
            <div className="border border-gold/30 p-6 bg-gold/5">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gold font-semibold font-inter text-sm tracking-wide">
                  Primera consulta gratuita
                </span>
              </div>
              <p className="text-gray-400 text-sm font-inter leading-relaxed">
                Sin compromiso. Confidencialidad absoluta garantizada. Le
                asesoramos antes de tomar ninguna decisión.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl text-white font-bold mb-2">
                  Mensaje recibido
                </h3>
                <p className="text-gray-400 text-sm font-inter">
                  Le contactaremos en menos de 24 horas. Gracias por confiar en
                  Bufete Legal Campos.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider font-inter mb-1.5">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Su nombre completo"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm font-inter focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider font-inter mb-1.5">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="000 000 000"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm font-inter focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider font-inter mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="su@email.com"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm font-inter focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider font-inter mb-1.5">
                    Área de consulta
                  </label>
                  <select className="w-full bg-[#0c1e38] border border-white/10 text-gray-300 px-4 py-3 text-sm font-inter focus:outline-none focus:border-gold/50 transition-colors">
                    <option value="">Seleccione un área</option>
                    <option>Derecho Civil</option>
                    <option>Derecho Penal</option>
                    <option>Derecho Laboral</option>
                    <option>Derecho Mercantil</option>
                    <option>Derecho de Familia</option>
                    <option>Derecho Inmobiliario</option>
                    <option>Otra consulta</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider font-inter mb-1.5">
                    Descripción del caso
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describa brevemente su situación..."
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm font-inter focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  />
                </div>
                <p className="text-gray-600 text-xs font-inter">
                  Sus datos serán tratados con total confidencialidad de acuerdo
                  a nuestra política de privacidad.
                </p>
                <button
                  type="submit"
                  className="w-full bg-gold text-navy py-4 font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[#b8963e] transition-colors duration-200 font-inter"
                >
                  Solicitar Consulta Gratuita
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
