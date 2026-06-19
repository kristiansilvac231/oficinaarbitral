'use client'

import Link from 'next/link'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="font-heading text-4xl font-black text-navy-800 mb-3">
        Ocurrió un error
      </h1>
      <p className="text-navy-500 mb-8 max-w-sm">
        Lo sentimos, algo salió mal. Intente recargar la página o vuelva al inicio.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-md bg-navy-700 text-white hover:bg-navy-800 transition-colors"
        >
          Reintentar
        </button>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-md border border-navy-200 text-navy-700 hover:bg-navy-50 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
      {error.digest && (
        <p className="mt-6 text-xs text-navy-300">Referencia: {error.digest}</p>
      )}
    </div>
  )
}
