import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
          alt="Despacho de abogados"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy" />
      </div>

      {/* Decorative side lines */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-gold/50" />
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-gold/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        {/* Label */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gold/60" />
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-inter font-medium">
            Fundado en 2004
          </span>
          <div className="w-16 h-px bg-gold/60" />
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6">
          Excelencia Legal
          <br />
          <span className="text-gold italic">A Su Servicio</span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-inter">
          Más de 20 años defendiendo sus derechos con rigor, dedicación y los
          más altos estándares profesionales. Su confianza es nuestro mayor
          compromiso.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="#contacto"
            className="bg-gold text-navy px-10 py-4 font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[#b8963e] transition-colors duration-200 font-inter"
          >
            Consulta Gratuita
          </a>
          <a
            href="#areas"
            className="border border-white/50 text-white px-10 py-4 font-semibold text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors duration-200 font-inter"
          >
            Nuestras Áreas
          </a>
        </div>

        {/* Stats */}
        <div className="border-t border-white/10 pt-10 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { value: '20+', label: 'Años de experiencia' },
            { value: '500+', label: 'Casos resueltos' },
            { value: '98%', label: 'Clientes satisfechos' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-playfair text-3xl sm:text-4xl text-gold font-bold">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1 font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
          <svg
            className="w-4 h-4 text-gold/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
