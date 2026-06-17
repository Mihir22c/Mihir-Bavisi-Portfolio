import { Resend } from "resend";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO_EMAIL || "mihir.m.bavisi@gmail.com";
// Resend's shared sender works without verifying your own domain.
// Once you own a domain, switch this to e.g. "Portfolio <hello@yourdomain.com>".
const FROM = "Portfolio <onboarding@resend.dev>";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string; company?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  // Honeypot: real users never fill this field.
  if (body.company && body.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  if (!name || !isEmail(email) || message.length < 2) {
    return Response.json({ error: "Missing or invalid fields" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Portfolio contact ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Could not send" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (e) {
    console.error("Send failed:", e);
    return Response.json({ error: "Could not send" }, { status: 502 });
  }
}
