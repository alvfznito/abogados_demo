import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bufete Legal Campos | Abogados en Tu Ciudad',
  description:
    'Despacho de abogados con más de 20 años de experiencia. Especialistas en derecho civil, penal, laboral, mercantil, familia e inmobiliario. Primera consulta gratuita.',
  keywords: 'abogados, bufete, derecho civil, derecho penal, derecho laboral, consulta gratuita',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
