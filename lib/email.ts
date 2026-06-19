import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactEmailData {
  nombre: string
  email: string
  telefono?: string
  calidad: string
  mensaje: string
}

export async function sendContactEmail(data: ContactEmailData) {
  const { nombre, email, telefono, calidad, mensaje } = data

  await resend.emails.send({
    from: `Oficina Arbitral Web <no-reply@${process.env.EMAIL_DOMAIN ?? 'oficinaarbitral.cl'}>`,
    to: [process.env.CONTACT_EMAIL ?? '[CONFIGURAR_EMAIL]'],
    replyTo: email,
    subject: `Nuevo contacto desde el sitio web — ${calidad}`,
    text: `
Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono ?? 'No indicado'}
Calidad: ${calidad}

Mensaje:
${mensaje}
    `.trim(),
  })

  await resend.emails.send({
    from: `Oficina Arbitral <no-reply@${process.env.EMAIL_DOMAIN ?? 'oficinaarbitral.cl'}>`,
    to: [email],
    subject: 'Recibimos su mensaje — Oficina Arbitral',
    text: `
Estimado/a ${nombre},

Hemos recibido su mensaje y nos pondremos en contacto con usted a la brevedad.

Su mensaje:
"${mensaje}"

Saludos,
Equipo Oficina Arbitral
www.oficinaarbitral.cl
    `.trim(),
  })
}
