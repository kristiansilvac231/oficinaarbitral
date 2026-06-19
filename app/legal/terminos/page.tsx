import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Términos de servicio',
  description: `Términos y condiciones del servicio de ${SITE_NAME}. Lea antes de contratar o utilizar la plataforma.`,
  path: '/legal/terminos',
})

export default function TerminosPage() {
  return (
    <>
      <div className="bg-navy-800 py-10 lg:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Legal', href: '/legal/terminos' },
              { label: 'Términos de servicio' },
            ]}
          />
          <h1 className="font-heading text-2xl sm:text-3xl font-black text-white mt-4">
            Términos de servicio
          </h1>
          <p className="text-white/60 text-sm mt-2">
            Última actualización: [CONFIGURAR_FECHA] — A revisar por abogado antes del lanzamiento.
          </p>
        </div>
      </div>

      <div className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-800">
            <strong>Aviso:</strong> Este documento es un borrador estructural. Su contenido
            definitivo debe ser revisado y aprobado por un abogado antes del lanzamiento del sitio.
          </div>

          <div className="prose prose-navy max-w-none prose-headings:font-heading prose-headings:text-navy-800">
            <h2>1. Identificación</h2>
            <p>
              {SITE_NAME} es una plataforma de gestión de juicios arbitrales de partición,
              operada por [RAZÓN_SOCIAL], RUT [CONFIGURAR_RUT], con domicilio en [CONFIGURAR_DOMICILIO],
              Chile. Contacto: {CONTACT_EMAIL}.
            </p>

            <h2>2. Objeto del servicio</h2>
            <p>
              {SITE_NAME} ofrece servicios de gestión administrativa de causas arbitrales de
              partición, incluyendo: coordinación de comparendos, redacción de actas y borradores,
              coordinación de peritos, gestión de documentos y acceso a un portal digital de
              expediente. El servicio no incluye representación legal ni asesoría jurídica.
            </p>

            <h2>3. Usuarios y roles</h2>
            <p>
              El acceso a la plataforma es restringido y por invitación. Existen tres tipos
              de usuario: Administrador (equipo {SITE_NAME}), Juez Árbitro y Usuario/Parte.
              Cada usuario es responsable de mantener la confidencialidad de sus credenciales
              de acceso.
            </p>

            <h2>4. Confidencialidad</h2>
            <p>
              {SITE_NAME} se obliga a mantener estricta confidencialidad sobre toda la
              información relativa a las causas gestionadas, las partes involucradas y
              los documentos del expediente. El detalle de las obligaciones de confidencialidad
              se establece en el contrato de encargo firmado con cada cliente.
            </p>

            <h2>5. Limitación de responsabilidad</h2>
            <p>
              {SITE_NAME} no es parte en ningún juicio arbitral ni actúa como representante
              de ninguna de las partes. Las decisiones jurídicas corresponden exclusivamente
              al juez árbitro designado. {SITE_NAME} no es responsable de las resoluciones
              ni del resultado de las causas gestionadas.
            </p>

            <h2>6. Precios y pagos</h2>
            <p>
              Los precios del servicio se establecen en el contrato de encargo. El modelo de
              cobro puede incluir un fee sobre el resultado del remate y/o mensualidades,
              según lo acordado con cada cliente.
            </p>

            <h2>7. Resolución de conflictos</h2>
            <p>
              Cualquier controversia derivada del uso de la plataforma o del servicio se
              someterá a la legislación chilena y a los tribunales competentes de Santiago
              de Chile.
            </p>

            <h2>8. Modificaciones</h2>
            <p>
              {SITE_NAME} se reserva el derecho de modificar estos términos en cualquier
              momento. Las modificaciones serán notificadas a los usuarios registrados con
              al menos 15 días de anticipación.
            </p>

            <h2>9. Contacto</h2>
            <p>
              Para consultas sobre estos términos, escriba a: {CONTACT_EMAIL}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
