import Link from 'next/link'
import { Scale } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <Scale className="h-12 w-12 text-navy-300 mb-6" aria-hidden="true" />
      <h1 className="font-heading text-4xl font-black text-navy-800 mb-3">
        Página no encontrada
      </h1>
      <p className="text-navy-500 mb-8 max-w-sm">
        La página que busca no existe o fue movida. Use el menú de navegación para
        encontrar lo que necesita.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-md bg-navy-700 text-white hover:bg-navy-800 transition-colors"
        >
          Volver al inicio
        </Link>
        <Link
          href="/contacto"
          className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-md border border-navy-200 text-navy-700 hover:bg-navy-50 transition-colors"
        >
          Contactar
        </Link>
      </div>
    </div>
  )
}
