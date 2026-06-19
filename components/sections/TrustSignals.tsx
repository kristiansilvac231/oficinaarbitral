import { ShieldCheck, Clock, Lock, Scale, TrendingUp, Users } from 'lucide-react'

const signals = [
  {
    icon: Scale,
    title: 'Fundada por un juez árbitro',
    description:
      'Conocemos el proceso desde adentro. Nuestro equipo incluye a un árbitro partidor con experiencia en causas de alta complejidad.',
  },
  {
    icon: Clock,
    title: 'Meta: remate en ~6 meses',
    description:
      'El atraso es el mayor riesgo en un juicio arbitral. Nuestra metodología está diseñada para mantener el ritmo y cumplir plazos.',
  },
  {
    icon: Lock,
    title: 'Confidencialidad garantizada',
    description:
      'Firmamos acuerdo de confidencialidad en cada encargo. El portal digital usa cifrado y control de acceso estricto por rol.',
  },
  {
    icon: ShieldCheck,
    title: 'Control total del juez',
    description:
      'Usted aprueba cada borrador y cada comparendo. La gestión es nuestra; las decisiones jurídicas, siempre suyas.',
  },
  {
    icon: TrendingUp,
    title: 'Fee sobre resultado',
    description:
      'Nos alineamos con su éxito. Nuestro principal modelo de cobro está basado en el resultado del remate, no solo en mensualidades.',
  },
  {
    icon: Users,
    title: 'Portal para todas las partes',
    description:
      'Juez árbitro, comuneros, herederos y abogados acceden al expediente digital desde cualquier lugar, 24/7.',
  },
]

export function TrustSignals() {
  return (
    <section className="py-16 lg:py-20 bg-navy-50" aria-labelledby="trust-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="trust-title"
            className="font-heading text-3xl lg:text-4xl font-bold text-navy-800 mb-4"
          >
            Por qué confiar en Oficina Arbitral
          </h2>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto">
            Seriedad, confidencialidad y resultados. Esto es lo que nos diferencia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signals.map((signal) => {
            const Icon = signal.icon
            return (
              <div
                key={signal.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-navy-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-navy-700 text-gold-400"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy-800 mb-1.5">
                      {signal.title}
                    </h3>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      {signal.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
