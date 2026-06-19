import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mail, Video, FileText, Users, Building2, Shield } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { TrustSignals } from '@/components/sections/TrustSignals'
import { CTABanner } from '@/components/sections/CTABanner'
import { SITE_URL, FAQ_ITEMS, SERVICES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Gestión profesional de juicios arbitrales en Chile',
  description:
    'Oficina Arbitral gestiona íntegramente sus causas arbitrales de partición: correos, comparendos vía Zoom, actas, borradores y coordinación de remate. Usted solo resuelve el fondo.',
  path: '/',
  keywords: [
    'juicio arbitral Chile',
    'juez árbitro partidor',
    'partición de herencia Chile',
    'gestión causas arbitrales',
    'tramitación juicio arbitral Santiago',
  ],
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.slice(0, 4).map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const serviceIcons: Record<string, React.ElementType> = {
  Mail,
  Video,
  FileText,
  Users,
  Building2,
  Shield,
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative bg-navy-800 overflow-hidden" aria-labelledby="hero-title">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-navy-700 opacity-40" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-navy-900 opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" aria-hidden="true" />
              <span className="text-gold-300 text-sm font-medium">
                Juicios arbitrales de partición en Chile
              </span>
            </div>

            <h1
              id="hero-title"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              Gestión profesional de sus{' '}
              <span className="text-gold-400">causas arbitrales</span>
            </h1>

            <p className="text-xl text-white/75 leading-relaxed mb-8 max-w-2xl">
              Su expediente organizado, sus comparendos agendados, sus actas redactadas y
              sus borradores listos. Usted solo resuelve el fondo jurídico.
            </p>

            <ul className="space-y-2.5 mb-10" aria-label="Beneficios principales">
              {[
                'Meta referencial: remate en ~6 meses desde la designación',
                'Portal digital seguro para juez, partes y abogados',
                'Fundada por un juez árbitro con experiencia real',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors"
              >
                Solicitar gestión de mi causa
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/para-comuneros-herederos"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-md border-2 border-white/25 text-white hover:bg-white/10 transition-colors"
              >
                Soy comunero o heredero
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Context */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="problema-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="problema-title"
                className="font-heading text-3xl lg:text-4xl font-bold text-navy-800 mb-5"
              >
                El atraso administrativo es el mayor enemigo de la partición
              </h2>
              <p className="text-navy-500 leading-relaxed mb-5">
                Un juicio arbitral de partición puede durar años no por razones jurídicas,
                sino administrativas: correos sin respuesta, peritos difíciles de coordinar,
                comparendos postergados, actas pendientes.
              </p>
              <p className="text-navy-500 leading-relaxed mb-8">
                El juez árbitro tiene el conocimiento jurídico para resolver. Lo que no tiene
                es el tiempo ni la estructura para gestionar eficientemente cada causa.
                <strong className="text-navy-700"> Oficina Arbitral existe para eso.</strong>
              </p>
              <Link
                href="/que-es-un-juicio-arbitral"
                className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-gold-600 transition-colors"
              >
                ¿Qué es un juicio arbitral de partición?
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '~2.000', label: 'causas arbitrales al año solo en la Región Metropolitana' },
                { value: '2 años', label: 'es el plazo legal máximo del juez árbitro partidor' },
                { value: '~6 meses', label: 'es la meta referencial de Oficina Arbitral para el remate' },
                { value: '3 roles', label: 'acceden al portal digital: juez, partes y abogados' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-navy-50 rounded-xl p-6 border border-navy-100"
                >
                  <div className="font-heading text-3xl font-black text-navy-700 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-navy-500 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-navy-50" aria-labelledby="servicios-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="servicios-title"
              className="font-heading text-3xl lg:text-4xl font-bold text-navy-800 mb-4"
            >
              ¿Qué gestionamos por usted?
            </h2>
            <p className="text-lg text-navy-500 max-w-2xl mx-auto">
              Todo lo administrativo de su causa arbitral, sin que usted tenga que ocuparse de ello.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-6 border border-navy-100 hover:shadow-md transition-shadow"
                >
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-lg bg-navy-700 text-gold-400 mb-4"
                    aria-hidden="true"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="font-heading font-bold text-navy-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-gold-600 transition-colors"
            >
              Ver todos los servicios en detalle
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Trust signals */}
      <TrustSignals />

      {/* For judges teaser */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="jueces-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-400/30 rounded-full px-3 py-1 mb-5 w-fit">
                  <span className="text-gold-300 text-xs font-semibold uppercase tracking-wider">
                    Para jueces árbitros
                  </span>
                </div>
                <h2
                  id="jueces-title"
                  className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4"
                >
                  Usted falla el fondo. Nosotros tramitamos todo lo demás.
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Dedique su tiempo a lo que realmente importa: el análisis jurídico y la
                  resolución de la causa. Deje la coordinación, los correos y las actas en manos
                  de un equipo especializado.
                </p>
                <Link
                  href="/para-jueces-arbitros"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors w-fit"
                >
                  Ver propuesta para jueces árbitros
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="bg-navy-700 p-8 lg:p-12 flex flex-col justify-center space-y-4">
                {[
                  'Expediente digital ordenado y accesible 24/7',
                  'Borradores de resoluciones listos para su revisión',
                  'Alertas automáticas de plazos legales',
                  'Comparendos Zoom programados y notificados',
                  'Coordinación directa con peritos y compradores',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-16 lg:py-20 bg-navy-50" aria-labelledby="faq-preview-title">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              id="faq-preview-title"
              className="font-heading text-3xl font-bold text-navy-800 mb-3"
            >
              Preguntas frecuentes
            </h2>
            <p className="text-navy-500">Las consultas más comunes sobre nuestro servicio.</p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.slice(0, 4).map((item) => (
              <details
                key={item.question}
                className="group bg-white rounded-xl border border-navy-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer select-none list-none font-semibold text-navy-800 hover:text-navy-600 transition-colors">
                  {item.question}
                  <span
                    className="shrink-0 text-navy-400 group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-navy-500 leading-relaxed border-t border-navy-50 pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/preguntas-frecuentes"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-gold-600 transition-colors"
            >
              Ver todas las preguntas frecuentes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="¿Tiene una causa arbitral que gestionar?"
        description="Contáctenos hoy y cuéntenos los antecedentes. Le explicaremos cómo podemos colaborar en su causa."
        primaryHref="/contacto"
        primaryLabel="Solicitar información"
        secondaryHref="/precios"
        secondaryLabel="Ver planes y precios"
      />
    </>
  )
}
