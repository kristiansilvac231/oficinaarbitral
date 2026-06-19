import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { SITE_NAME, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Política de privacidad',
  description: `Política de privacidad de ${SITE_NAME}. Cómo recopilamos, usamos y protegemos su información personal.`,
  path: '/legal/privacidad',
})

export default function PrivacidadPage() {
  return (
    <>
      <div className="bg-navy-800 py-10 lg:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Legal', href: '/legal/terminos' },
              { label: 'Política de privacidad' },
            ]}
          />
          <h1 className="font-heading text-2xl sm:text-3xl font-black text-white mt-4">
            Política de privacidad
          </h1>
          <p className="text-white/60 text-sm mt-2">
            Última actualización: [CONFIGURAR_FECHA] — A revisar por abogado antes del lanzamiento.
          </p>
        </div>
      </div>

      <div className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-800">
            <strong>Aviso:</strong> Este documento es un borrador estructural conforme a la
            Ley N° 19.628 de Protección de la Vida Privada de Chile. Su contenido definitivo
            debe ser revisado y aprobado por un abogado antes del lanzamiento.
          </div>

          <div className="prose prose-navy max-w-none prose-headings:font-heading prose-headings:text-navy-800">
            <h2>1. Responsable del tratamiento</h2>
            <p>
              [RAZÓN_SOCIAL], RUT [CONFIGURAR_RUT], con domicilio en [CONFIGURAR_DOMICILIO],
              Chile. Contacto: {CONTACT_EMAIL}.
            </p>

            <h2>2. Datos que recopilamos</h2>
            <p>Recopilamos los siguientes datos personales:</p>
            <ul>
              <li>Nombre completo, correo electrónico y teléfono (formulario de contacto y registro).</li>
              <li>Credenciales de acceso (correo y contraseña cifrada, nunca en texto plano).</li>
              <li>Datos asociados a causas: calidad en la causa, documentos aportados, comunicaciones.</li>
              <li>Datos de uso del portal (logs de acceso, funciones utilizadas).</li>
            </ul>

            <h2>3. Finalidad del tratamiento</h2>
            <p>Utilizamos sus datos para:</p>
            <ul>
              <li>Gestionar su acceso al portal de la plataforma.</li>
              <li>Comunicarnos sobre el estado de la causa en la que usted participa.</li>
              <li>Responder consultas enviadas a través del formulario de contacto.</li>
              <li>Cumplir con las obligaciones contractuales del encargo de gestión.</li>
              <li>Mejorar el funcionamiento de la plataforma (datos agregados, no individuales).</li>
            </ul>

            <h2>4. Base legal del tratamiento</h2>
            <p>
              El tratamiento de sus datos se realiza sobre la base de la Ley N° 19.628 y sus
              modificaciones, con su consentimiento (formulario de contacto) o en cumplimiento
              de una relación contractual (portal de usuarios).
            </p>

            <h2>5. Comunicación a terceros</h2>
            <p>
              No vendemos ni cedemos sus datos personales a terceros con fines comerciales.
              Podemos compartir datos con proveedores de servicios tecnológicos que nos ayudan
              a operar la plataforma (servidores, email transaccional), bajo acuerdos de
              confidencialidad y protección de datos.
            </p>

            <h2>6. Almacenamiento y seguridad</h2>
            <p>
              Sus datos se almacenan en servidores seguros con cifrado en tránsito (TLS) y
              en reposo. El acceso al portal está protegido por contraseñas cifradas y control
              de acceso por roles.
            </p>

            <h2>7. Sus derechos</h2>
            <p>
              Conforme a la Ley N° 19.628, usted tiene derecho a acceder, rectificar, cancelar
              y oponerse al tratamiento de sus datos personales. Para ejercer estos derechos,
              escriba a: {CONTACT_EMAIL}.
            </p>

            <h2>8. Cookies</h2>
            <p>
              El sitio utiliza cookies necesarias para el funcionamiento técnico del portal
              (sesión autenticada). No utilizamos cookies de seguimiento de terceros sin su
              consentimiento. Si habilita Google Analytics, se aplicará la política de cookies
              de Google.
            </p>

            <h2>9. Modificaciones</h2>
            <p>
              Podemos actualizar esta política en cualquier momento. Le notificaremos los
              cambios relevantes por correo electrónico o mediante aviso en el portal.
            </p>

            <h2>10. Contacto</h2>
            <p>Para consultas sobre privacidad: {CONTACT_EMAIL}</p>
          </div>
        </div>
      </div>
    </>
  )
}
