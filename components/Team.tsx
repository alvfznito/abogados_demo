import Image from 'next/image'

const lawyers = [
  {
    name: 'Carlos Campos Ruiz',
    role: 'Socio Director',
    specialty: 'Derecho Civil y Mercantil',
    bio: '25 años de trayectoria en derecho civil y mercantil. Colegiado n.º 5.241. Máster en Derecho Empresarial por la Universidad Complutense.',
    photo:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80',
  },
  {
    name: 'María González Vidal',
    role: 'Socia',
    specialty: 'Derecho de Familia y Laboral',
    bio: '18 años de experiencia en procesos familiares y derecho laboral. Reconocida por su sensibilidad y eficacia en casos de alta complejidad.',
    photo:
      'https://images.unsplash.com/photo-1662104935883-e9dd0619eaba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80',
  },
  {
    name: 'Javier Martínez Polo',
    role: 'Abogado Senior',
    specialty: 'Derecho Penal e Inmobiliario',
    bio: '12 años especializándose en defensa penal y derecho inmobiliario. Experto en negociación y resolución de conflictos complejos.',
    photo:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80',
  },
]

export default function Team() {
  return (
    <section id="equipo" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-inter font-medium">
              Profesionales
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-navy font-bold mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            Un equipo de abogados altamente cualificados, comprometidos con la
            excelencia y con la defensa de sus intereses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {lawyers.map((lawyer) => (
            <div key={lawyer.name} className="group">
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <Image
                  src={lawyer.photo}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-inter leading-relaxed">{lawyer.bio}</p>
                </div>
              </div>

              {/* Info */}
              <div className="border-l-2 border-gold pl-5">
                <h3 className="font-playfair text-xl text-navy font-bold leading-tight">
                  {lawyer.name}
                </h3>
                <p className="text-gold text-sm font-semibold font-inter mt-0.5 tracking-wide">
                  {lawyer.role}
                </p>
                <p className="text-gray-500 text-sm font-inter mt-1">
                  {lawyer.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
