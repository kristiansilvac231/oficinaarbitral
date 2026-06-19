import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { CTABanner } from '@/components/sections/CTABanner'
import { PRICING_PLANS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Planes de gestión de causas arbitrales',
  description:
    'Conozca los planes de Oficina Arbitral para la gestión integral de juicios arbitrales de partición en Chile. Cotice según las características de su causa.',
  path: '/planes',
  keywords: [
    'planes gestión juicio arbitral Chile',
    'tramitación causa arbitral',
    'oficina arbitral planes',
    'gestión integral arbitraje partición',
  ],
})

export default function PlanesPage() {
  return (
    <>
      <div className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Planes', href: '/planes' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Planes
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Elija el plan que mejor se adapte a su volumen de causas.
            Contáctenos para obtener una cotización personalizada.
          </p>
        </div>
      </div>

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

                <div className={`p-7 ${plan.highlighted ? 'bg-navy-800' : 'bg-white'}`}>
                  <h3
                    className={`font-heading font-bold text-xl mb-2 ${
                      plan.highlighted ? 'text-white' : 'text-navy-800'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      plan.highlighted ? 'text-white/65' : 'text-navy-500'
                    }`}
                  >
                    {plan.description}
                  </p>

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
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                      plan.highlighted ? 'text-gold-400' : 'text-navy-400'
                    }`}
                  >
                    Incluye
                  </p>
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

      <CTABanner
        title="¿Desea una cotización para su causa específica?"
        description="Cuéntenos los antecedentes y le entregamos una propuesta ajustada a sus necesidades."
        primaryHref="/contacto"
        primaryLabel="Solicitar cotización"
      />
    </>
  )
}
