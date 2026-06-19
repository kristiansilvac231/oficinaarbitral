import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { CTABanner } from '@/components/sections/CTABanner'
import { FAQ_ITEMS, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Preguntas frecuentes sobre gestión de juicios arbitrales',
  description:
    'Respuestas a las preguntas más comunes sobre juicios arbitrales de partición en Chile, el servicio de Oficina Arbitral, precios y cómo funciona el proceso.',
  path: '/preguntas-frecuentes',
  keywords: [
    'preguntas juicio arbitral Chile',
    'FAQ partición herencia',
    'dudas arbitraje partición',
    'cuánto cuesta gestión arbitral',
    'cómo funciona partición comunidad',
  ],
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <div className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' }]}
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Preguntas frecuentes
          </h1>
          <p className="text-white/70 text-lg mt-4">
            Las respuestas a las consultas más comunes sobre nuestro servicio y el proceso
            de juicio arbitral de partición en Chile.
          </p>
        </div>
      </div>

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="faq-lista">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-lista" className="sr-only">Lista de preguntas frecuentes</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <details
                key={item.question}
                className="group bg-white rounded-xl border border-navy-100 overflow-hidden shadow-sm"
                id={`faq-${index + 1}`}
              >
                <summary className="flex items-center justify-between gap-4 p-5 lg:p-6 cursor-pointer select-none list-none">
                  <h3 className="font-heading font-semibold text-navy-800 text-base lg:text-lg leading-snug">
                    {item.question}
                  </h3>
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-navy-50 text-navy-400 group-open:bg-navy-700 group-open:text-white group-open:rotate-45 transition-all"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-navy-500 leading-relaxed border-t border-navy-50 pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 bg-navy-50 rounded-xl p-6 border border-navy-100">
            <h3 className="font-heading font-bold text-navy-800 mb-2">
              ¿No encontró la respuesta que buscaba?
            </h3>
            <p className="text-sm text-navy-500 mb-4">
              Escríbanos directamente. Le responderemos a la brevedad.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-md bg-navy-700 text-white hover:bg-navy-800 transition-colors"
            >
              Contactar a Oficina Arbitral
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Tiene una causa arbitral que gestionar?"
        description="Tome el primer paso hoy. Le explicamos sin compromiso cómo podemos colaborar en su causa."
        primaryHref="/contacto"
        primaryLabel="Solicitar información"
      />
    </>
  )
}
