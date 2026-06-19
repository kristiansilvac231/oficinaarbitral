import Link from 'next/link'

interface CTABannerProps {
  title: string
  description: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
  variant?: 'navy' | 'gold'
}

export function CTABanner({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  variant = 'navy',
}: CTABannerProps) {
  const isNavy = variant === 'navy'

  return (
    <section
      className={`py-16 lg:py-20 ${isNavy ? 'bg-navy-800' : 'bg-gold-500'}`}
      aria-labelledby="cta-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-title"
          className={`font-heading text-3xl lg:text-4xl font-bold mb-4 ${isNavy ? 'text-white' : 'text-navy-900'}`}
        >
          {title}
        </h2>
        <p className={`text-lg mb-8 ${isNavy ? 'text-white/75' : 'text-navy-800'}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className={`inline-flex items-center px-7 py-3.5 text-base font-semibold rounded-md transition-colors ${
              isNavy
                ? 'bg-gold-500 text-navy-900 hover:bg-gold-400'
                : 'bg-navy-900 text-white hover:bg-navy-800'
            }`}
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className={`inline-flex items-center px-7 py-3.5 text-base font-semibold rounded-md transition-colors border-2 ${
                isNavy
                  ? 'border-white/30 text-white hover:bg-white/10'
                  : 'border-navy-900 text-navy-900 hover:bg-navy-900/10'
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
