import Link from 'next/link'
import { Scale, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/lib/constants'

const legalLinks = [
  { href: '/legal/terminos', label: 'Términos de servicio' },
  { href: '/legal/privacidad', label: 'Política de privacidad' },
]

const siteLinks = [
  { href: '/que-es-un-juicio-arbitral', label: '¿Qué es un juicio arbitral?' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/para-jueces-arbitros', label: 'Para jueces árbitros' },
  { href: '/para-comuneros-herederos', label: 'Para comuneros y herederos' },
  { href: '/planes', label: 'Planes' },
  { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { href: '/nosotros', label: 'Sobre nosotros' },
  { href: '/blog', label: 'Blog jurídico' },
]

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white hover:text-gold-400 transition-colors"
              aria-label={`${SITE_NAME} — ir al inicio`}
            >
              <Scale className="h-6 w-6 text-gold-500 shrink-0" aria-hidden="true" />
              <span className="font-heading font-bold text-lg">{SITE_NAME}</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/65 max-w-xs">
              Gestión profesional e integral de juicios arbitrales de partición en Chile.
              Su causa, tramitada con eficiencia y confidencialidad.
            </p>

            {/* Contact */}
            <ul className="space-y-2 text-sm" aria-label="Información de contacto">
              {CONTACT_EMAIL !== '[CONFIGURAR_EMAIL]' && (
                <li className="flex items-center gap-2 text-white/65">
                  <Mail className="h-4 w-4 text-gold-500 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </li>
              )}
              {CONTACT_PHONE !== '[CONFIGURAR_TELEFONO]' && (
                <li className="flex items-center gap-2 text-white/65">
                  <Phone className="h-4 w-4 text-gold-500 shrink-0" aria-hidden="true" />
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                    {CONTACT_PHONE}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2 text-white/65">
                <MapPin className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{CONTACT_ADDRESS}</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Sitio
            </h2>
            <ul className="space-y-2" role="list">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider">
              ¿Necesita gestión para su causa?
            </h2>
            <p className="text-sm text-white/65 leading-relaxed">
              Contáctenos hoy y cuéntenos los antecedentes de su causa.
              Le responderemos a la brevedad.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-md bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors"
            >
              Solicitar información
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
          </p>
          <nav aria-label="Enlaces legales">
            <ul className="flex gap-4" role="list">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white/70 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
