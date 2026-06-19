import type { Metadata } from 'next'
import { CheckCircle2, Info } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { CTABanner } from '@/components/sections/CTABanner'
import { PRICING_PLANS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Planes y precios — Gestión de causas arbitrales',
  description:
    'Conozca los planes de Oficina Arbitral para la gestión de juicios arbitrales de partición en Chile. Modelo basado principalmente en fee sobre resultado.',
  path: '/precios',
  keywords: [
    'precio gestión juicio arbitral Chile',
    'costo tramitación causa arbitral',
    'planes oficina arbitral',
    'fee resultado arbitraje partición',
  ],
})

export default function PreciosPage() {
  return (
    <>
      <div className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Precios', href: '/precios' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Planes y precios
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Nuestro modelo se basa principalmente en un fee sobre el resultado del remate,
            alineando nuestros incentivos con el éxito de su causa.
          </p>
        </div>
      </div>

      {/* Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-start gap-3 text-sm text-amber-800">
          <Info className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            Los precios se configuran antes del lanzamiento del sitio. Los planes descritos
            a continuación muestran la estructura de servicios incluidos.
            <strong> Contáctenos para obtener una cotización personalizada.</strong>
          </p>
        </div>
      </div>

      {/* Pricing grid */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="planes-title">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="planes-title" className="sr-only">Planes disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border overflow-hidden ${
                  plan.highlighted
                    ? 'border-gold-500 shadow-xl shadow-gold-500/10'
                    : 'border-navy-100'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest text-center py-2">
                    Más elegido
                  </div>
                )}

                <div
                  className={`p-7 ${plan.highlighted ? 'bg-navy-800' : 'bg-white'}`}
                >
                  <h3
                    className={`font-heading font-bold text-xl mb-1 ${
                      plan.highlighted ? 'text-white' : 'text-navy-800'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 leading-relaxed ${
                      plan.highlighted ? 'text-white/65' : 'text-navy-500'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div
                      className={`font-heading text-3xl font-black ${
                        plan.highlighted ? 'text-gold-400' : 'text-navy-700'
                      }`}
                    >
                      {plan.price}
                    </div>
                    <div
                      className={`text-xs mt-1 ${
                        plan.highlighted ? 'text-white/50' : 'text-navy-400'
                      }`}
                    >
                      {plan.unit}
                    </div>
                  </div>

                  <a
                    href="/contacto"
                    className={`block w-full text-center px-5 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-gold-500 text-navy-900 hover:bg-gold-400'
                        : 'bg-navy-700 text-white hover:bg-navy-800'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>

                <div
                  className={`px-7 py-6 border-t ${
                    plan.highlighted
                      ? 'border-white/10 bg-navy-900/50'
                      : 'border-navy-100 bg-navy-50/50'
                  }`}
                >
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            plan.highlighted ? 'text-gold-400' : 'text-navy-500'
                          }`}
                          aria-hidden="true"
                        />
                        <span
                          className={`text-sm ${
                            plan.highlighted ? 'text-white/75' : 'text-navy-600'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee model explanation */}
      <section className="py-12 bg-navy-50" aria-labelledby="modelo-title">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="modelo-title" className="font-heading text-2xl font-bold text-navy-800 mb-5">
            ¿Qué significa "fee sobre resultado"?
          </h2>
          <div className="space-y-4 text-navy-500 leading-relaxed">
            <p>
              A diferencia de otros servicios que cobran solo mensualidades fijas,
              nuestro modelo principal consiste en un porcentaje o monto acordado sobre
              el valor obtenido en el remate de la causa.
            </p>
            <p>
              Esto significa que <strong className="text-navy-700">nuestros incentivos están
              alineados con el éxito de la causa</strong>: nos interesa que el remate se
              realice bien, que se obtenga un buen precio y que el proceso termine
              de forma exitosa.
            </p>
            <p>
              Los detalles específicos del porcentaje, los hitos de pago y los casos de
              causas que terminan por acuerdo previo al remate se definen en el contrato
              de encargo, que firmamos antes de iniciar la gestión de cada causa.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Desea una cotización para su causa específica?"
        description="Cuéntenos los antecedentes y le entregamos una propuesta ajustada a sus necesidades."
        primaryHref="/contacto"
        primaryLabel="Solicitar cotización"
      />
    </>
  )
}
