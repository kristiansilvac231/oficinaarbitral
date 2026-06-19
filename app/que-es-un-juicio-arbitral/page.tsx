import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { CTABanner } from '@/components/sections/CTABanner'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: '¿Qué es un juicio arbitral de partición en Chile?',
  description:
    'Guía completa sobre el juicio arbitral de partición en Chile: qué es, cómo funciona, quién es el juez árbitro partidor, cuánto dura y cuándo termina en remate.',
  path: '/que-es-un-juicio-arbitral',
  keywords: [
    'juicio arbitral Chile',
    'juez árbitro partidor',
    'partición de comunidad Chile',
    'partición de herencia Chile',
    'remate judicial herencia',
    'arbitraje partición bienes',
  ],
})

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Qué es un juicio arbitral de partición en Chile?',
  description:
    'Guía completa sobre el juicio arbitral de partición en Chile: qué es, cómo funciona, el rol del juez árbitro partidor y cómo termina en remate.',
  url: `${SITE_URL}/que-es-un-juicio-arbitral`,
  author: { '@type': 'Organization', name: 'Oficina Arbitral' },
  publisher: {
    '@type': 'Organization',
    name: 'Oficina Arbitral',
    url: SITE_URL,
  },
  dateModified: new Date().toISOString().split('T')[0],
}

export default function QueEsUnJuicioArbitralPage() {
  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Page header */}
      <div className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: '¿Qué es un juicio arbitral?', href: '/que-es-un-juicio-arbitral' }]}
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 leading-tight">
            ¿Qué es un juicio arbitral de partición?
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Todo lo que necesita saber sobre este proceso judicial: para qué sirve,
            cómo funciona y cómo termina.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="py-12 lg:py-16" aria-label="Artículo informativo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-navy prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy-800 prose-a:text-navy-700 prose-strong:text-navy-800">

            <h2>¿Qué es una comunidad?</h2>
            <p>
              En Chile existe una <strong>comunidad</strong> cuando dos o más personas son
              dueñas en conjunto de uno o más bienes. Los casos más frecuentes son la
              herencia (cuando fallece una persona y sus herederos pasan a ser copropietarios
              de sus bienes) y la sociedad conyugal que se disuelve por divorcio o muerte.
            </p>

            <h2>¿Qué es el juicio de partición?</h2>
            <p>
              El juicio de partición es el proceso legal por el cual esa comunidad se divide:
              se distribuyen los bienes entre los comuneros, ya sea en especie (adjudicando
              bienes concretos) o mediante la venta de los bienes y el reparto del dinero
              obtenido. Este último caso, cuando se vende un inmueble en el contexto de una
              partición, se llama <strong>remate de partición</strong>.
            </p>

            <h2>¿Quién es el juez árbitro partidor?</h2>
            <p>
              En Chile, la partición de bienes con inmuebles u otros bienes determinados por
              ley es de <strong>arbitraje forzoso</strong>: la ley exige que sea conducida por
              un <strong>juez árbitro partidor</strong>, es decir, un abogado habilitado que
              las partes designan (o que designa el tribunal en caso de no haber acuerdo) para
              actuar como juez en esa causa específica.
            </p>
            <p>
              El juez árbitro partidor tiene las mismas facultades que un juez ordinario
              para esa causa: puede dictar resoluciones, decretar medidas y, finalmente,
              dictar el <strong>laudo y ordenata</strong>, que es la sentencia que termina
              la partición.
            </p>

            <h2>¿Cómo funciona el proceso?</h2>
            <p>A grandes rasgos, el proceso tiene estas etapas:</p>
            <ol>
              <li>
                <strong>Designación:</strong> Las partes o el tribunal designan al juez
                árbitro partidor y fijan su retribución.
              </li>
              <li>
                <strong>Constitución del tribunal:</strong> El juez árbitro acepta el cargo,
                designa un actuario (secretario) y notifica a las partes.
              </li>
              <li>
                <strong>Comparendos y tramitación:</strong> Se realizan audiencias
                (comparendos) para discutir los bienes, las deudas, los créditos y las
                adjudicaciones posibles.
              </li>
              <li>
                <strong>Inventario y tasación:</strong> Se identifican y valoran los bienes
                de la comunidad, generalmente con apoyo de peritos tasadores.
              </li>
              <li>
                <strong>Proyecto de distribución:</strong> El juez elabora (o aprueba) una
                propuesta de cómo se distribuyen los bienes.
              </li>
              <li>
                <strong>Remate (si hay inmuebles u otros bienes indivisibles):</strong> Si los
                bienes no pueden dividirse en especie, se rematan y el dinero se distribuye.
              </li>
              <li>
                <strong>Laudo y ordenata:</strong> Sentencia final que termina la partición.
              </li>
            </ol>

            <h2>¿Cuánto dura un juicio arbitral de partición?</h2>
            <p>
              El plazo legal del juez árbitro partidor es de <strong>2 años</strong> desde
              la constitución del tribunal (artículo 647 del Código de Procedimiento Civil).
              Sin embargo, en la práctica, muchas causas se extienden más allá de ese plazo
              por razones administrativas: falta de coordinación, peritos que demoran,
              comparendos postergados, documentos pendientes.
            </p>
            <p>
              <strong>La meta referencial de Oficina Arbitral es lograr el remate en
              aproximadamente 6 meses</strong>, manteniendo la causa activa y resolviendo
              los cuellos de botella administrativos de forma proactiva.
            </p>

            <h2>¿Qué pasa si las partes llegan a acuerdo?</h2>
            <p>
              El acuerdo de las partes es siempre el mejor resultado posible. Si los comuneros
              acuerdan cómo dividir los bienes durante el proceso, el juez árbitro aprueba ese
              acuerdo y termina la causa anticipadamente. Esto puede ocurrir en cualquier etapa
              del proceso.
            </p>

            <h2>¿Cuáles son los principales riesgos del proceso?</h2>
            <ul>
              <li>
                <strong>Vencimiento del plazo legal:</strong> Si el juez no falla en 2 años,
                el proceso puede quedar sin validez, salvo prórroga.
              </li>
              <li>
                <strong>Fallecimiento de una de las partes:</strong> Genera una nueva comunidad
                y puede complicar el proceso.
              </li>
              <li>
                <strong>Falta de acuerdo sobre la tasación:</strong> Puede requerir peritos
                de cada parte y alargar el proceso.
              </li>
              <li>
                <strong>Deudas de la comunidad:</strong> Las deudas deben pagarse antes o
                con cargo al remate, lo que afecta el resultado para los comuneros.
              </li>
            </ul>

            <div className="not-prose mt-10 p-6 bg-navy-50 rounded-xl border border-navy-100">
              <h3 className="font-heading font-bold text-navy-800 text-xl mb-3">
                ¿Tiene una causa de partición en tramitación?
              </h3>
              <p className="text-navy-500 mb-5">
                Si usted es juez árbitro designado o es parte de una causa de partición,
                podemos ayudarle a gestionar el proceso de forma eficiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/para-jueces-arbitros"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md bg-navy-700 text-white hover:bg-navy-800 transition-colors"
                >
                  Para jueces árbitros
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/para-comuneros-herederos"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md border border-navy-200 text-navy-700 hover:bg-navy-50 transition-colors"
                >
                  Para comuneros y herederos
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTABanner
        title="¿Listo para gestionar su causa con eficiencia?"
        description="Contáctenos y cuéntenos los antecedentes de su causa. Le respondemos a la brevedad."
        primaryHref="/contacto"
        primaryLabel="Solicitar información"
      />
    </>
  )
}
