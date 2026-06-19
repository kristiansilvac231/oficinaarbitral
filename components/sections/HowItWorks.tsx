import { PROCESS_STEPS } from '@/lib/constants'

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="how-it-works-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="how-it-works-title"
            className="font-heading text-3xl lg:text-4xl font-bold text-navy-800 mb-4"
          >
            Cómo funciona
          </h2>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto">
            Cuatro pasos desde la designación hasta el remate. Usted jurídico, nosotros administrativos.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-0.5 bg-navy-100"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.step} className="flex flex-col items-center text-center relative">
                {/* Step number */}
                <div
                  className="relative z-10 flex items-center justify-center w-18 h-18 rounded-full bg-navy-700 text-white font-heading font-bold text-xl mb-5 shadow-md"
                  aria-label={`Paso ${index + 1}`}
                >
                  <span className="text-gold-400 text-xs font-semibold tracking-widest absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-1.5 rounded-full border border-navy-100">
                    {step.step}
                  </span>
                  <span className="text-2xl font-heading font-black">{index + 1}</span>
                </div>

                <h3 className="font-heading font-bold text-navy-800 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
