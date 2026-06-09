const areas = [
  {
    num: '01',
    title: 'Derecho Civil',
    description:
      'Contratos, responsabilidad civil, herencias y sucesiones. Protegemos sus intereses en toda clase de disputas civiles con rigor y eficacia.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Derecho Penal',
    description:
      'Defensa rigurosa ante cualquier acusación penal. Garantizamos la presunción de inocencia y el derecho a un proceso justo en todo momento.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Derecho Laboral',
    description:
      'Asesoramiento integral a trabajadores y empresas en despidos improcedentes, reclamaciones de cantidad y conflictos colectivos.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Derecho Mercantil',
    description:
      'Constitución de sociedades, contratos mercantiles, fusiones y adquisiciones. Soluciones legales completas para empresas y autónomos.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Derecho de Familia',
    description:
      'Divorcios, separaciones, custodia de menores y pensiones alimenticias tratados con la máxima discreción y sensibilidad que merecen.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Derecho Inmobiliario',
    description:
      'Compraventas, arrendamientos, reclamaciones a promotoras y toda clase de operaciones inmobiliarias con total seguridad jurídica.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-20 lg:py-32 bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-inter font-medium">
              Especialidades
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-navy font-bold mb-4">
            Áreas de Práctica
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            Ofrecemos asesoramiento jurídico especializado con un enfoque
            personalizado para cada cliente y cada situación.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.num}
              className="bg-white p-8 group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gold/30"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-navy/5 group-hover:bg-navy flex items-center justify-center transition-colors duration-300 text-navy group-hover:text-gold">
                  {area.icon}
                </div>
                <span className="font-playfair text-4xl font-bold text-gray-100 group-hover:text-gold/20 transition-colors duration-300 leading-none">
                  {area.num}
                </span>
              </div>
              <h3 className="font-playfair text-xl text-navy font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-inter">
                {area.description}
              </p>
              <div className="mt-5 flex items-center gap-2 text-gold text-sm font-semibold font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Consultar ahora</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
