import { Resend } from "resend";
import type { ContactFormData } from "./validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactNotification(data: ContactFormData) {
  const { name, email, subject, message } = data;

  return resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL_TO!,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2>Pesan Baru dari Portfolio</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <hr />
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  });
}