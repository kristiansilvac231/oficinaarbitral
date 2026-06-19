'use server'

import { z } from 'zod'
import { sendContactEmail } from '@/lib/email'
import type { ContactFormState } from '@/types'

const schema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.').max(100),
  email: z.email('Ingrese un correo electrónico válido.'),
  telefono: z.string().max(20).optional(),
  calidad: z.enum(
    ['Juez Árbitro', 'Comunero / Heredero', 'Abogado de parte', 'Perito / Tasador', 'Otro'],
    { error: 'Seleccione su calidad.' },
  ),
  mensaje: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres.')
    .max(2000, 'El mensaje no puede superar los 2.000 caracteres.'),
})

export async function enviarContacto(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    nombre: formData.get('nombre'),
    email: formData.get('email'),
    telefono: formData.get('telefono') || undefined,
    calidad: formData.get('calidad'),
    mensaje: formData.get('mensaje'),
  }

  const parsed = schema.safeParse(raw)

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {}
    for (const [field, errors] of Object.entries(parsed.error.flatten().fieldErrors)) {
      if (errors) fieldErrors[field] = errors
    }
    return {
      success: false,
      error: 'Por favor corrija los errores del formulario.',
      fieldErrors,
    }
  }

  try {
    await sendContactEmail(parsed.data)
    return {
      success: true,
      message:
        'Su mensaje fue enviado correctamente. Le responderemos a la brevedad a su correo electrónico.',
    }
  } catch {
    return {
      success: false,
      error:
        'Ocurrió un error al enviar su mensaje. Intente nuevamente o escríbanos directamente a nuestro correo.',
    }
  }
}
