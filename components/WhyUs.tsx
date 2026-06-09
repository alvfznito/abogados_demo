const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Más de 20 años de experiencia',
    description:
      'Dos décadas resolviendo los casos más complejos nos convierten en uno de los bufetes de mayor trayectoria y prestigio de la región.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Equipo especializado',
    description:
      'Cada área de práctica cuenta con abogados especializados y en formación continua, garantizando la máxima competencia técnica.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Resultados probados',
    description:
      'Más de 500 casos resueltos con éxito y una tasa de satisfacción del 98% avalan nuestra capacidad para defender sus intereses.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Atención personalizada',
    description:
      'Cada cliente merece un trato único. Le asignamos un abogado responsable que le acompañará en todo momento con total disponibilidad.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-inter font-medium">
              Nuestra diferencia
            </span>
            <div className="w-12 h-px bg-gold/60" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            Nos distingue nuestro compromiso absoluto con la excelencia jurídica
            y la satisfacción de nuestros clientes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group border border-white/10 p-8 hover:border-gold/40 transition-all duration-300 hover:bg-white/5"
            >
              <div className="text-gold mb-6">{reason.icon}</div>
              <h3 className="font-playfair text-lg text-white font-bold mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-inter">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white font-playfair text-xl lg:text-2xl font-bold text-center md:text-left">
            Primera consulta completamente gratuita y sin compromiso.
          </p>
          <a
            href="#contacto"
            className="shrink-0 bg-gold text-navy px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase hover:bg-[#b8963e] transition-colors font-inter"
          >
            Solicitar Consulta
          </a>
        </div>
      </div>
    </section>
  )
}
