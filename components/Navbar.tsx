'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#areas', label: 'Áreas de Práctica' },
    { href: '#equipo', label: 'Nuestro Equipo' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#resenas', label: 'Reseñas' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-navy shadow-2xl' : 'bg-navy/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gold"></div>
            </div>
            <div>
              <div className="text-white font-playfair text-base lg:text-lg font-bold leading-tight tracking-wide">
                Bufete Legal Campos
              </div>
              <div className="text-gold text-[10px] tracking-[0.25em] uppercase font-inter">
                Abogados &amp; Asociados
              </div>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm tracking-wide font-inter"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-gold text-navy px-6 py-2.5 text-sm font-semibold tracking-widest uppercase hover:bg-[#b8963e] transition-colors duration-200 font-inter"
            >
              Consulta Gratis
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-gold/20 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold hover:bg-white/5 px-4 py-3 transition-colors text-sm font-inter tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-3 mx-4 bg-gold text-navy text-center py-3 text-sm font-semibold tracking-widest uppercase font-inter hover:bg-[#b8963e] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
