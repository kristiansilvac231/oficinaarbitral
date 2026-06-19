import type { Metadata } from 'next'
import { Scale, Target, Eye } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { CTABanner } from '@/components/sections/CTABanner'
import { TrustSignals } from '@/components/sections/TrustSignals'

export const metadata: Metadata = buildMetadata({
  title: 'Sobre nosotros — Equipo de Oficina Arbitral',
  description:
    'Conoce al equipo detrás de Oficina Arbitral: fundada por un juez árbitro con experiencia real en causas de partición, orientada a la eficiencia y la confidencialidad.',
  path: '/nosotros',
  keywords: [
    'quiénes somos oficina arbitral',
    'juez árbitro fundador',
    'equipo gestión arbitral Chile',
    'experiencia arbitraje partición',
  ],
})

export default function NosotrosPage() {
  return (
    <>
      <div className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Sobre nosotros', href: '/nosotros' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Sobre nosotros
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Quiénes somos, por qué creamos Oficina Arbitral y en qué creemos.
          </p>
        </div>
      </div>

      {/* Origin story */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="historia-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy-700 text-gold-400"
                  aria-hidden="true"
                >
                  <Scale className="h-6 w-6" />
                </div>
                <h2 id="historia-title" className="font-heading text-2xl font-bold text-navy-800">
                  Nuestra historia
                </h2>
              </div>

              <div className="space-y-4 text-navy-500 leading-relaxed">
                <p>
                  Oficina Arbitral nació de una observación directa: los juicios arbitrales
                  de partición en Chile se atrasaban no por razones jurídicas, sino
                  administrativas. Correos sin respuesta, peritos difíciles de coordinar,
                  comparendos postergados una y otra vez.
                </p>
                <p>
                  El fundador, un juez árbitro con experiencia en causas de alta complejidad,
                  comprendió que el problema no estaba en el conocimiento jurídico de los
                  árbitros —que es excelente— sino en la falta de una estructura
                  administrativa dedicada a mantener el ritmo de la causa.
                </p>
                <p>
                  Junto a su socio de negocios, creó Oficina Arbitral con una propuesta
                  simple: el juez árbitro hace lo que mejor sabe hacer (resolver el fondo),
                  mientras el equipo de Oficina Arbitral hace lo que el árbitro no tiene
                  tiempo de hacer (gestionar todo lo demás).
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-5">
              {[
                {
                  icon: Target,
                  title: 'Nuestra misión',
                  text: 'Hacer que los juicios arbitrales de partición en Chile sean más rápidos, eficientes y predecibles para todos los involucrados: jueces, partes y familias.',
                },
                {
                  icon: Eye,
                  title: 'Nuestra visión',
                  text: 'Convertirnos en el estándar de gestión para los juicios arbitrales de partición en Chile, extendiendo nuestro alcance a todas las regiones del país.',
                },
                {
                  icon: Scale,
                  title: 'Nuestros valores',
                  text: 'Confidencialidad absoluta, integridad en cada comunicación, eficiencia sin sacrificar calidad, y respeto profundo por el rol y la responsabilidad del juez árbitro.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 bg-navy-50 rounded-xl p-5 border border-navy-100"
                  >
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-navy-700 text-gold-400"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy-800 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-navy-500 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-navy-50" aria-labelledby="equipo-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="equipo-title"
            className="font-heading text-2xl font-bold text-navy-800 mb-8 text-center"
          >
            Nuestro equipo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                initials: 'JA',
                nombre: '[NOMBRE DEL JUEZ ÁRBITRO]',
                rol: 'Fundador y Director Jurídico',
                bio: 'Juez árbitro partidor con experiencia en causas de alta complejidad. Su experiencia directa como árbitro define la metodología y los estándares de calidad de Oficina Arbitral.',
              },
              {
                initials: 'SN',
                nombre: '[NOMBRE DEL SOCIO]',
                rol: 'Co-Fundador y Director de Operaciones',
                bio: 'Especialista en operaciones y gestión de procesos. Responsable de la implementación de la metodología de tramitación y del desarrollo tecnológico de la plataforma.',
              },
            ].map((persona) => (
              <div
                key={persona.nombre}
                className="bg-white rounded-xl border border-navy-100 p-6 text-center"
              >
                <div
                  className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-navy-700 text-gold-400 font-heading font-bold text-xl mb-4"
                  aria-hidden="true"
                >
                  {persona.initials}
                </div>
                <h3 className="font-heading font-bold text-navy-800">{persona.nombre}</h3>
                <p className="text-xs font-semibold text-gold-600 uppercase tracking-wide mt-1 mb-3">
                  {persona.rol}
                </p>
                <p className="text-sm text-navy-500 leading-relaxed">{persona.bio}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-navy-400 mt-6">
            Los datos personales del equipo se configuran antes del lanzamiento del sitio.
          </p>
        </div>
      </section>

      <TrustSignals />

      <CTABanner
        title="¿Quiere trabajar con nosotros?"
        description="Contáctenos para conocer más sobre nuestros servicios y evaluar juntos cómo colaborar."
        primaryHref="/contacto"
        primaryLabel="Ponerse en contacto"
      />
    </>
  )
}
