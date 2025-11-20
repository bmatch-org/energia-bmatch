// api/send-consent-email.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

if (!SENDGRID_API_KEY) {
  console.error('Falta la variable de entorno SENDGRID_API_KEY');
}

sgMail.setApiKey(SENDGRID_API_KEY as string);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      rut,
      razonSocial,
      nombre,
      rutRepresentante,
      telefono,
      email,
      aceptaTerminos,
    } = req.body;

    const text = `Se ha registrado un nuevo consentimiento de datos. Detalles:

                Razón Social: ${razonSocial}
                RUT Empresa: ${rut}
                Nombre Representante: ${nombre}
                RUT Representante: ${rutRepresentante}
                Teléfono: ${telefono}
                Email: ${email}
                Acepta Términos: ${aceptaTerminos ? 'Sí' : 'No'}
                `;

    const msg = {
      to: 'mtoledo@nodo.it.com',
      from: 'contacto@bmatch.cl', // Debe estar verificado en SendGrid
      subject: 'Nuevo Registro de Consentimiento de Datos BMATCH',
      text,
      html: `
        <h2>Nuevo registro de consentimiento</h2>
        <p><strong>Razón Social:</strong> ${razonSocial}</p>
        <p><strong>RUT Empresa:</strong> ${rut}</p>
        <p><strong>Nombre Representante:</strong> ${nombre}</p>
        <p><strong>RUT Representante:</strong> ${rutRepresentante}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Acepta Términos:</strong> ${aceptaTerminos ? 'Sí' : 'No'}</p>
      `,
    };

    await sgMail.send(msg);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return res.status(500).json({ ok: false, error: 'Error enviando correo' });
  }
}
