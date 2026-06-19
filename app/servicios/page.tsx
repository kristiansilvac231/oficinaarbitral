import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Video, FileText, Users, Building2, Shield, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata: Metadata = buildMetadata({
  title: 'Servicios de gestión integral de causas arbitrales',
  description:
    'Conozca en detalle todos los servicios que Oficina Arbitral ofrece para la tramitación de juicios arbitrales de partición: comparendos, actas, borradores, peritos y remate.',
  path: '/servicios',
  keywords: [
    'gestión juicio arbitral Chile',
    'tramitación causa arbitral',
    'comparendos zoom arbitraje',
    'expediente digital arbitral',
    'peritos partición herencia',
  ],
})

const services = [
  {
    icon: Mail,
    title: 'Gestión de comunicaciones',
    description: [
      'Redacción y envío de correos electrónicos a partes, abogados y terceros.',
      'Seguimiento de respuestas y notificaciones de estado.',
      'Toda la comunicación queda registrada en el expediente digital.',
      'Notificaciones automáticas de eventos importantes a los involucrados.',
    ],
  },
  {
    icon: Video,
    title: 'Comparendos vía Zoom',
    description: [
      'Programación de la fecha y hora con todos los participantes.',
      'Convocatoria formal con link de Zoom y agenda del comparendo.',
      'Soporte técnico durante la sesión si es necesario.',
      'Acta redactada y disponible en el portal en 48 horas hábiles.',
    ],
  },
  {
    icon: FileText,
    title: 'Actas y borradores de resoluciones',
    description: [
      'Redacción de actas de todos los comparendos realizados.',
      'Borradores de resoluciones e interlocutorias para revisión del juez.',
      'Borradores de oficio, decreto de pagos y otros escritos procesales.',
      'El juez árbitro aprueba y firma; nosotros gestionamos el resto.',
    ],
  },
  {
    icon: Users,
    title: 'Coordinación de peritos y tasadores',
    description: [
      'Identificación de peritos idóneos según el tipo de bien.',
      'Coordinación de visitas y plazos de entrega de informes.',
      'Seguimiento al cumplimiento de los honorarios de peritos.',
      'Incorporación del informe pericial al expediente digital.',
    ],
  },
  {
    icon: Building2,
    title: 'Gestión del remate',
    description: [
      'Difusión del remate entre compradores calificados e interesados.',
      'Coordinación con corredores de propiedades si aplica.',
      'Apoyo en la preparación de bases del remate.',
      'Seguimiento del proceso de escrituración posterior al remate.',
    ],
  },
  {
    icon: Shield,
    title: 'Portal digital de expediente',
    description: [
      'Acceso 24/7 para el juez árbitro, las partes y sus abogados.',
      'Control de acceso por rol: cada usuario ve solo lo que le corresponde.',
      'Repositorio de documentos ordenado por tipo y fecha.',
      'Alertas de plazos legales y de comparendos próximos.',
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
      <div className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Servicios', href: '/servicios' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Servicios de gestión integral
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Todo lo que necesita para tramitar su causa arbitral de principio a fin,
            sin tener que ocuparse de lo administrativo.
          </p>
        </div>
      </div>

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="servicios-lista">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="servicios-lista" className="sr-only">
            Lista de servicios
          </h2>
          <div className="space-y-10">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-10 border-b border-navy-100 last:border-0 last:pb-0"
                >
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-navy-700 text-gold-400"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">
                        Servicio {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-navy-800 mt-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="lg:col-span-8 space-y-2.5">
                    {service.description.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-navy-600">
                        <span className="text-gold-500 font-bold mt-0.5 shrink-0" aria-hidden="true">—</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's NOT included */}
      <section className="py-12 bg-navy-50" aria-labelledby="no-incluido">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-navy-100 p-6 lg:p-8">
            <h2 id="no-incluido" className="font-heading font-bold text-navy-800 text-xl mb-4">
              ¿Qué NO hacemos?
            </h2>
            <p className="text-navy-500 mb-4 leading-relaxed">
              Oficina Arbitral es un servicio de <strong>gestión administrativa</strong>.
              No ejercemos como abogados ni reemplazamos al juez árbitro en ninguna función jurídica.
              Específicamente, <strong>no</strong>:
            </p>
            <ul className="space-y-2 text-sm text-navy-500">
              {[
                'Representamos a ninguna de las partes como abogados.',
                'Tomamos decisiones jurídicas: esas siempre corresponden al juez árbitro.',
                'Firmamos documentos judiciales en nombre del juez o las partes.',
                'Asesoramos jurídicamente a los comuneros o herederos sobre sus derechos.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0" aria-hidden="true">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Desea saber cómo podemos ayudar en su causa específica?"
        description="Cada causa tiene sus particularidades. Cuéntenos los antecedentes y le explicamos cómo adaptamos nuestros servicios a su situación."
        primaryHref="/contacto"
        primaryLabel="Solicitar información"
        secondaryHref="/planes"
        secondaryLabel="Ver planes y precios"
      />
    </>
  )
}
