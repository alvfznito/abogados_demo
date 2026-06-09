export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-0.5 h-8 bg-gold" />
              <div>
                <div className="text-white font-playfair text-lg font-bold">
                  Bufete Legal Campos
                </div>
                <div className="text-gold text-[10px] tracking-[0.25em] uppercase font-inter">
                  Abogados &amp; Asociados
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed font-inter max-w-sm">
              Despacho de abogados con más de 20 años de experiencia ofreciendo
              asesoramiento jurídico de alta calidad. Su confianza, nuestra
              mayor responsabilidad.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm font-inter text-green-400">
                Primera consulta gratuita disponible
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-playfair font-bold text-base mb-5 tracking-wide">
              Navegación
            </h3>
            <ul className="space-y-3">
              {[
                { href: '#areas', label: 'Áreas de práctica' },
                { href: '#equipo', label: 'Nuestro equipo' },
                { href: '#proceso', label: 'Proceso de trabajo' },
                { href: '#resenas', label: 'Reseñas' },
                { href: '#contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-inter hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-gold/40 group-hover:w-5 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-playfair font-bold text-base mb-5 tracking-wide">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm font-inter">
              <li>
                <a href="tel:000000000" className="hover:text-gold transition-colors">
                  T. 000 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@bufetecampos.es" className="hover:text-gold transition-colors">
                  info@bufetecampos.es
                </a>
              </li>
              <li className="leading-relaxed">
                Calle Mayor 1<br />Tu ciudad
              </li>
              <li className="text-gray-500">
                L – V: 9:00 – 19:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-inter">
          <p>
            &copy; {currentYear} Bufete Legal Campos. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Aviso legal
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
