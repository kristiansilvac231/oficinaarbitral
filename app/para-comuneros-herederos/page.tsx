import type { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { CTABanner } from '@/components/sections/CTABanner'
import { FAQ_ITEMS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Para comuneros y herederos — Entienda su proceso de partición',
  description:
    'Si usted es parte de un juicio de partición de herencia o comunidad en Chile, aquí le explicamos qué está pasando, cuánto dura el proceso y cómo puede participar.',
  path: '/para-comuneros-herederos',
  keywords: [
    'herederos partición Chile',
    'comuneros herencia Chile',
    'proceso partición herencia',
    'remate herencia Chile',
    'juicio partición comunidad',
  ],
})

const etapas = [
  {
    numero: '01',
    titulo: 'Se designa un juez árbitro',
    descripcion:
      'Las partes (o el tribunal, si no hay acuerdo) designan a un juez árbitro partidor: un abogado que actuará como juez exclusivamente para esta causa.',
  },
  {
    numero: '02',
    titulo: 'Se realizan comparendos (audiencias)',
    descripcion:
      'El juez árbitro convoca a las partes a reuniones llamadas "comparendos" para discutir los bienes, las deudas y cómo se van a distribuir.',
  },
  {
    numero: '03',
    titulo: 'Se tasan los bienes',
    descripcion:
      'Un perito tasador valora los bienes de la comunidad (inmuebles, vehículos, etc.) para saber cuánto vale cada uno y cómo distribuir equitativamente.',
  },
  {
    numero: '04',
    titulo: 'Acuerdo o remate',
    descripcion:
      'Si las partes se ponen de acuerdo sobre cómo distribuirse los bienes, el juez aprueba ese acuerdo. Si no hay acuerdo o los bienes no se pueden dividir, se realiza un remate judicial.',
  },
  {
    numero: '05',
    titulo: 'Se reparte el dinero o los bienes',
    descripcion:
      'El dinero del remate (o los bienes adjudicados) se distribuye entre los comuneros según su participación, descontando deudas y costos del proceso.',
  },
]

const faqComuneros = FAQ_ITEMS.filter((_, i) => [0, 2, 3, 4, 6].includes(i))

export default function ParaComunerosHeredeosPage() {
  return (
    <>
      <div className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Para comuneros y herederos', href: '/para-comuneros-herederos' },
            ]}
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 leading-tight">
            ¿Le avisaron que es parte de un juicio de partición?
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Le explicamos en lenguaje simple qué significa, cómo funciona el proceso
            y qué puede esperar en cada etapa.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12 lg:py-16 bg-white" aria-labelledby="intro-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 id="intro-title" className="font-heading text-2xl font-bold text-navy-800 mb-4">
                ¿Qué es un juicio de partición?
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                Cuando un familiar fallece y deja bienes (una casa, un terreno, dinero en el banco),
                o cuando usted y otros son copropietarios de algún bien y quieren dividirlo,
                la ley chilena exige un proceso judicial llamado <strong>"juicio de partición"</strong>.
              </p>
              <p className="text-navy-500 leading-relaxed mb-4">
                En este proceso, un juez árbitro partidor —un abogado designado especialmente
                para esta causa— decide cómo se dividen esos bienes entre todos los que tienen
                derecho sobre ellos (llamados "comuneros" o "herederos").
              </p>
              <p className="text-navy-500 leading-relaxed">
                El proceso puede terminar de dos formas: en un <strong>acuerdo entre las partes</strong>
                (la más rápida y económica) o en un <strong>remate</strong>, donde el bien se vende
                públicamente y el dinero se reparte.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                <h3 className="font-heading font-bold text-navy-800">
                  Lo que debe saber desde el principio
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-navy-600">
                {[
                  'El proceso es judicial: tiene plazos legales y consecuencias si no se participa.',
                  'El juez árbitro tiene un plazo de 2 años para resolver la causa.',
                  'Si no responde citaciones, el proceso puede seguir sin usted en algunos casos.',
                  'Tiene derecho a un abogado que lo represente y defienda sus intereses.',
                  'Si hay deudas de la comunidad, se descuentan antes de repartir.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-12 lg:py-16 bg-navy-50" aria-labelledby="etapas-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="etapas-title" className="font-heading text-2xl font-bold text-navy-800 mb-8">
            Etapas del proceso, en lenguaje simple
          </h2>
          <ol className="space-y-4">
            {etapas.map((etapa) => (
              <li key={etapa.numero} className="flex gap-5 bg-white rounded-xl p-5 border border-navy-100">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-navy-700 text-white font-bold text-sm"
                  aria-label={`Etapa ${etapa.numero}`}
                >
                  {etapa.numero}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy-800 mb-1">{etapa.titulo}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{etapa.descripcion}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Role of Oficina Arbitral */}
      <section className="py-12 lg:py-16 bg-white" aria-labelledby="rol-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800 rounded-2xl p-8 lg:p-12">
            <h2 id="rol-title" className="font-heading text-2xl font-bold text-white mb-4">
              ¿Qué rol tiene Oficina Arbitral en su causa?
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Oficina Arbitral trabaja para el juez árbitro de la causa, gestionando toda la
              parte administrativa. Si su causa está siendo gestionada por nosotros, usted:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Recibirá notificaciones de comparendos con anticipación y con toda la información necesaria.',
                'Podrá acceder al expediente digital de su causa desde cualquier dispositivo.',
                'Tendrá un canal de comunicación para consultas y documentos.',
                'Recibirá actualizaciones del estado de la causa en lenguaje claro.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/60 text-sm">
              <strong className="text-white/80">Importante:</strong> Oficina Arbitral no representa
              a ninguna de las partes. Para defender sus intereses, necesita su propio abogado.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ for comuneros */}
      <section className="py-12 lg:py-16 bg-navy-50" aria-labelledby="faq-comuneros-title">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-comuneros-title"
            className="font-heading text-2xl font-bold text-navy-800 mb-8 flex items-center gap-3"
          >
            <HelpCircle className="h-7 w-7 text-navy-400" aria-hidden="true" />
            Preguntas frecuentes de comuneros y herederos
          </h2>

          <div className="space-y-4">
            {faqComuneros.map((item) => (
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

          <div className="mt-6 text-center">
            <Link
              href="/preguntas-frecuentes"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-gold-600 transition-colors text-sm"
            >
              Ver todas las preguntas frecuentes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Tiene preguntas sobre su proceso de partición?"
        description="Contáctenos y le orientamos sobre el estado de su causa y los próximos pasos."
        primaryHref="/contacto"
        primaryLabel="Contactar a Oficina Arbitral"
      />
    </>
  )
}
