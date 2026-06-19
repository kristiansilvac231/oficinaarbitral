'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Scale } from 'lucide-react'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-shadow duration-200',
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-navy-900',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
            aria-label={`${SITE_NAME} — ir al inicio`}
          >
            <Scale className="h-6 w-6 text-gold-500 shrink-0" aria-hidden="true" />
            <span className="font-heading font-bold text-lg leading-none">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400',
                  isActive(link.href)
                    ? 'text-gold-400 bg-white/10'
                    : 'text-white/85 hover:text-white hover:bg-white/10',
                )}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/ingresar"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-md bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Ingresar al portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-white/85 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-200 ease-in-out',
          open ? 'max-h-screen border-t border-white/10' : 'max-h-0',
        )}
        aria-hidden={!open}
      >
        <div className="bg-navy-900 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                isActive(link.href)
                  ? 'text-gold-400 bg-white/10'
                  : 'text-white/85 hover:text-white hover:bg-white/10',
              )}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/ingresar"
              className="block w-full text-center px-4 py-2.5 text-sm font-semibold rounded-md bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors"
            >
              Ingresar al portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
