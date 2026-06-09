const steps = [
  {
    num: '01',
    title: 'Consulta inicial',
    description:
      'Nos reunimos para escuchar su caso sin coste alguno. Analizamos los hechos, respondemos sus dudas y evaluamos las opciones disponibles.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Análisis del caso',
    description:
      'Estudiamos en profundidad la documentación y los fundamentos jurídicos aplicables para determinar la posición legal más sólida.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Estrategia legal',
    description:
      'Diseñamos una hoja de ruta clara y personalizada, explicando cada paso del proceso y los plazos previstos con total transparencia.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Resolución',
    description:
      'Ejecutamos la estrategia con precisión y determinación hasta obtener el mejor resultado posible, manteniéndole informado en todo momento.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="proceso" className="py-20 lg:py-32 bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-inter font-medium">
              Metodología
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-navy font-bold mb-4">
            Proceso de Trabajo
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            Un método estructurado y transparente que garantiza resultados
            óptimos en cada caso que asumimos.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line – visible on lg+ */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gold/20 mx-[calc(12.5%+1.75rem)]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Step header */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 mb-5">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 bg-navy flex items-center justify-center text-gold z-10 relative">
                      {step.icon}
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-gold text-navy text-[10px] font-bold flex items-center justify-center font-inter">
                      {i + 1}
                    </div>
                  </div>
                  <span className="font-playfair text-5xl font-bold text-gray-100 leading-none lg:hidden">
                    {step.num}
                  </span>
                </div>

                <span className="hidden lg:block font-playfair text-5xl font-bold text-gray-200 leading-none mb-3">
                  {step.num}
                </span>

                <h3 className="font-playfair text-xl text-navy font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-inter">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
