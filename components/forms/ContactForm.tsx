'use client'

import { useActionState, useRef, useEffect } from 'react'
import { enviarContacto } from '@/app/actions/contacto'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ContactFormState } from '@/types'

const CALIDADES = [
  'Juez Árbitro',
  'Comunero / Heredero',
  'Abogado de parte',
  'Perito / Tasador',
  'Otro',
]

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    enviarContacto,
    null,
  )
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset()
    }
  }, [state])

  const fieldError = (name: string) =>
    state && !state.success ? state.fieldErrors?.[name]?.[0] : undefined

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-5">
      {/* Success message */}
      {state?.success && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800"
        >
          {state.message}
        </div>
      )}

      {/* General error */}
      {state && !state.success && !state.fieldErrors && (
        <div
          role="alert"
          className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800"
        >
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="nombre">
            Nombre completo <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={fieldError('nombre') ? 'nombre-error' : undefined}
            className={cn(fieldError('nombre') && 'border-red-400 focus-visible:ring-red-400')}
          />
          {fieldError('nombre') && (
            <p id="nombre-error" role="alert" className="text-xs text-red-600">
              {fieldError('nombre')}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">
            Correo electrónico <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-describedby={fieldError('email') ? 'email-error' : undefined}
            className={cn(fieldError('email') && 'border-red-400 focus-visible:ring-red-400')}
          />
          {fieldError('email') && (
            <p id="email-error" role="alert" className="text-xs text-red-600">
              {fieldError('email')}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="telefono">Teléfono (opcional)</Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            placeholder="+56 9 XXXX XXXX"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="calidad">
            Su calidad <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <select
            id="calidad"
            name="calidad"
            required
            aria-required="true"
            aria-describedby={fieldError('calidad') ? 'calidad-error' : undefined}
            className={cn(
              'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
              fieldError('calidad') && 'border-red-400 focus-visible:ring-red-400',
            )}
            defaultValue=""
          >
            <option value="" disabled>
              Seleccione…
            </option>
            {CALIDADES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {fieldError('calidad') && (
            <p id="calidad-error" role="alert" className="text-xs text-red-600">
              {fieldError('calidad')}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="mensaje">
          Mensaje <span className="text-red-500" aria-hidden="true">*</span>
        </Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          aria-required="true"
          aria-describedby={fieldError('mensaje') ? 'mensaje-error' : undefined}
          placeholder="Descríbanos brevemente su causa o consulta…"
          className={cn(
            'resize-y',
            fieldError('mensaje') && 'border-red-400 focus-visible:ring-red-400',
          )}
        />
        {fieldError('mensaje') && (
          <p id="mensaje-error" role="alert" className="text-xs text-red-600">
            {fieldError('mensaje')}
          </p>
        )}
      </div>

      <p className="text-xs text-navy-400">
        Sus datos son tratados con estricta confidencialidad conforme a nuestra{' '}
        <a href="/legal/privacidad" className="underline hover:text-navy-700">
          Política de privacidad
        </a>
        .
      </p>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full sm:w-auto bg-navy-700 hover:bg-navy-800 text-white px-8"
      >
        {isPending ? 'Enviando…' : 'Enviar mensaje'}
      </Button>
    </form>
  )
}
