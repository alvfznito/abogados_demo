const reviews = [
  {
    name: 'Alejandro M.',
    location: 'Empresario, Tu ciudad',
    rating: 5,
    text: 'El bufete nos asesoró en una compleja disputa mercantil con absoluta profesionalidad. La claridad con la que explicaron el proceso y la contundencia de su defensa fue determinante para resolver el conflicto favorablemente. Los recomiendo sin reservas.',
    area: 'Derecho Mercantil',
  },
  {
    name: 'Laura S.',
    location: 'Profesional liberal, Tu ciudad',
    rating: 5,
    text: 'Acudí a Bufete Legal Campos en un momento muy difícil de mi vida. Su equipo de familia me trató con una empatía y rigor excepcionales. El resultado fue mejor de lo que esperaba. Su discreción y compromiso marcaron una diferencia enorme.',
    area: 'Derecho de Familia',
  },
  {
    name: 'Roberto P.',
    location: 'Director de RRHH, Tu ciudad',
    rating: 5,
    text: 'Llevamos trabajando con el bufete más de cinco años en materia laboral. Su conocimiento profundo de la legislación y su capacidad de negociación nos ha ahorrado tiempo y recursos en multitud de ocasiones. Una relación de confianza que ya es imprescindible.',
    area: 'Derecho Laboral',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-gold' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="resenas" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-inter font-medium">
              Testimonios
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-navy font-bold mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            La confianza de nuestros clientes es el mejor aval de nuestro
            trabajo y dedicación.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="border border-gray-100 p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="font-playfair text-6xl text-gold/20 leading-none mb-4 select-none">
                &ldquo;
              </div>

              <p className="text-gray-600 text-sm leading-relaxed font-inter mb-8 italic">
                {review.text}
              </p>

              <div className="border-t border-gray-100 pt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="font-playfair text-navy font-bold">{review.name}</p>
                  <p className="text-gray-400 text-xs font-inter mt-0.5">
                    {review.location}
                  </p>
                  <span className="inline-block mt-2 text-xs text-gold font-semibold font-inter tracking-wide">
                    {review.area}
                  </span>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {[
            { value: '500+', label: 'Casos gestionados' },
            { value: '20+', label: 'Años de experiencia' },
            { value: '98%', label: 'Tasa de satisfacción' },
            { value: '6', label: 'Áreas de especialización' },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <div className="font-playfair text-3xl lg:text-4xl text-navy font-bold">
                {badge.value}
              </div>
              <div className="text-gray-400 text-sm font-inter mt-1">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
