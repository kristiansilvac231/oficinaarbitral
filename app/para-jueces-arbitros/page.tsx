import type { Metadata } from 'next'
import { CheckCircle2, Clock, TrendingDown, Brain, Scale, Zap } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { CTABanner } from '@/components/sections/CTABanner'
import { HowItWorks } from '@/components/sections/HowItWorks'

export const metadata: Metadata = buildMetadata({
  title: 'Para jueces árbitros partidores — Gestión integral de causas',
  description:
    'Delegue la gestión administrativa de sus causas arbitrales de partición. Oficina Arbitral se encarga de correos, comparendos, actas y borradores. Usted solo resuelve el fondo.',
  path: '/para-jueces-arbitros',
  keywords: [
    'juez árbitro partidor Chile',
    'gestión causas arbitrales juez',
    'delegación gestión arbitral',
    'eficiencia juicio arbitral',
    'expediente digital árbitro',
  ],
})

const pains = [
  {
    icon: Clock,
    title: 'Horas perdidas en coordinación',
    description:
      'Correos que van y vienen con abogados, peritos y partes. Fechas de comparendos que se renegocian múltiples veces. Tiempo que podría dedicar a resolver el fondo.',
  },
  {
    icon: TrendingDown,
    title: 'Causas que se atrasan sin razón jurídica',
    description:
      'El plazo de 2 años avanza. La causa no progresa. No porque el análisis jurídico sea complejo, sino porque nadie está empujando lo administrativo.',
  },
  {
    icon: Brain,
    title: 'Carga mental de gestionar el expediente',
    description:
      'Recordar qué documentos faltan, qué perito no ha respondido, cuándo vence el plazo: todo eso ocupa espacio mental que debería estar libre para el análisis jurídico.',
  },
]

const gains = [
  'Usted recibe los borradores listos para revisar y aprobar.',
  'Los comparendos están programados, convocados y con link de Zoom.',
  'Las actas están redactadas en 48 horas hábiles.',
  'El expediente digital está ordenado y accesible en cualquier momento.',
  'Recibe alertas automáticas cuando un plazo se acerca.',
  'Los peritos son coordinados y seguidos sin que usted tenga que intervenir.',
  'Las partes y sus abogados tienen acceso al portal 24/7.',
  'Usted solo aprueba, firma y resuelve el fondo.',
]

export default function ParaJuecesArbitrosPage() {
  return (
    <>
      <div className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Para jueces árbitros', href: '/para-jueces-arbitros' }]}
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 leading-tight">
            Usted falla el fondo.<br />
            <span className="text-gold-400">Nosotros tramitamos todo lo demás.</span>
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Propuesta de valor exclusiva para jueces árbitros partidores que quieren causas
            eficientes sin cargar con la gestión administrativa.
          </p>
        </div>
      </div>

      {/* Pain points */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="problemas-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="problemas-title"
              className="font-heading text-3xl lg:text-4xl font-bold text-navy-800 mb-4"
            >
              ¿Le resulta familiar alguna de estas situaciones?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {pains.map((pain) => {
              const Icon = pain.icon
              return (
                <div
                  key={pain.title}
                  className="bg-red-50 border border-red-100 rounded-xl p-6"
                >
                  <Icon className="h-8 w-8 text-red-400 mb-4" aria-hidden="true" />
                  <h3 className="font-heading font-bold text-navy-800 mb-2">{pain.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{pain.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-navy-800 rounded-2xl p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div
                className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gold-500 text-navy-900"
                aria-hidden="true"
              >
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-white text-2xl mb-2">
                  La solución: Oficina Arbitral como su equipo de gestión
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Nos convertimos en la oficina administrativa de sus causas.
                  Usted mantiene el control jurídico absoluto; nosotros eliminamos
                  todos los cuellos de botella operativos.
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {gains.map((gain) => (
                <li key={gain} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-white/80 text-sm">{gain}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Differentiators */}
      <section className="py-16 lg:py-20 bg-navy-50" aria-labelledby="diferenciadores-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="diferenciadores-title"
            className="font-heading text-3xl font-bold text-navy-800 mb-8 text-center"
          >
            Por qué Oficina Arbitral y no un expediente virtual genérico
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-navy-200">
                  <th className="text-left py-3 pr-4 font-semibold text-navy-800">Función</th>
                  <th className="text-center py-3 px-4 font-semibold text-navy-400 w-36">
                    Expediente virtual genérico
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-gold-700 bg-gold-100 rounded-t-lg w-36">
                    Oficina Arbitral
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Expediente digital accesible', true, true],
                  ['Portal para partes y abogados', true, true],
                  ['Redacción de actas', false, true],
                  ['Borradores de resoluciones', false, true],
                  ['Coordinación de comparendos', false, true],
                  ['Gestión de correos', false, true],
                  ['Coordinación de peritos', false, true],
                  ['Gestión del remate', false, true],
                  ['Fee sobre resultado (no solo mensualidad)', false, true],
                  ['Equipo con experiencia arbitral real', 'Variable', true],
                ].map(([func, generic, us]) => (
                  <tr key={String(func)} className="border-b border-navy-100">
                    <td className="py-3 pr-4 text-navy-700">{func}</td>
                    <td className="py-3 px-4 text-center text-navy-400">
                      {generic === true ? '✓' : generic === false ? '✗' : String(generic)}
                    </td>
                    <td className="py-3 px-4 text-center font-semibold text-gold-700 bg-gold-50">
                      {us === true ? '✓' : String(us)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 bg-white" aria-labelledby="confianza-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="h-10 w-10 text-navy-400 mx-auto mb-4" aria-hidden="true" />
          <h2
            id="confianza-title"
            className="font-heading text-2xl font-bold text-navy-800 mb-4"
          >
            La confidencialidad es innegociable
          </h2>
          <p className="text-navy-500 leading-relaxed max-w-2xl mx-auto">
            Firmamos un acuerdo de confidencialidad en cada encargo. Los datos de la causa,
            de las partes y de las resoluciones solo son accesibles para quienes
            usted autorice. El control siempre es suyo.
          </p>
        </div>
      </section>

      <CTABanner
        title="¿Listo para gestionar sus causas con eficiencia?"
        description="Contáctenos hoy. Evaluamos juntos cómo podemos colaborar en su causa o en su cartera de causas."
        primaryHref="/contacto"
        primaryLabel="Solicitar información"
        secondaryHref="/precios"
        secondaryLabel="Ver planes y precios"
      />
    </>
  )
}
