import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ContactForm } from '@/components/forms/ContactForm'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Contacto — Solicite información sobre gestión de su causa',
  description:
    'Contáctenos para solicitar información sobre la gestión de su causa arbitral de partición. Le respondemos a la brevedad.',
  path: '/contacto',
  keywords: [
    'contacto oficina arbitral Chile',
    'solicitar gestión causa arbitral',
    'contactar árbitro partición',
  ],
})

const contactInfo = [
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: CONTACT_EMAIL,
    href: CONTACT_EMAIL !== '[CONFIGURAR_EMAIL]' ? `mailto:${CONTACT_EMAIL}` : undefined,
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: CONTACT_PHONE,
    href: CONTACT_PHONE !== '[CONFIGURAR_TELEFONO]' ? `tel:${CONTACT_PHONE.replace(/\s/g, '')}` : undefined,
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: CONTACT_ADDRESS,
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Horario de atención',
    value: 'Lunes a viernes, 9:00 – 18:00 hrs.',
    href: undefined,
  },
]

export default function ContactoPage() {
  return (
    <>
      <div className="bg-navy-800 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contacto', href: '/contacto' }]} />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4">
            Contáctenos
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            Cuéntenos los antecedentes de su causa y le explicamos cómo podemos colaborar.
            Le respondemos a la brevedad.
          </p>
        </div>
      </div>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-6">
                Envíenos un mensaje
              </h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-xl font-bold text-navy-800 mb-6">
                Información de contacto
              </h2>

              <ul className="space-y-5" aria-label="Datos de contacto">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label} className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-navy-50 text-navy-700"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-navy-700 hover:text-gold-600 transition-colors font-medium text-sm"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-navy-700 font-medium text-sm">{item.value}</p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-8 bg-navy-50 rounded-xl border border-navy-100 p-5">
                <h3 className="font-heading font-semibold text-navy-800 mb-2 text-sm">
                  Confidencialidad garantizada
                </h3>
                <p className="text-xs text-navy-500 leading-relaxed">
                  Toda la información que nos comparta sobre su causa es tratada con
                  estricta confidencialidad. Firmamos acuerdo de confidencialidad
                  antes de iniciar cualquier gestión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
