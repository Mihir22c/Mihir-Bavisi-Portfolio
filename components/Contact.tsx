"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";
import PdfButton from "./PdfButton";

type Status = "idle" | "sending" | "ok" | "error" | "invalid";

const EMAIL = "mihir.m.bavisi@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/mihirbavisi/";
const GITHUB = "https://github.com/Mihir22c";

export default function Contact() {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [status, setStatus] = useState<Status>("idle");

  const cvHref =
    lang === "de" ? "/Lebenslauf_Mihirkumar_Bavisi_Core.pdf" : "/CV_Mihirkumar_Bavisi_Core.pdf";

  const validEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  async function submit() {
    if (status === "sending") return;
    if (!form.name.trim() || !validEmail(form.email) || form.message.trim().length < 2) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("ok");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal>
          <div className="contact-grid">
            <div className="contact-side">
              <span className="eyebrow">{t.contact.eyebrow}</span>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.sub}</p>

              <div className="contact-links">
                <div>
                  <div className="lbl">{t.contact.cv}</div>
                  <div className="dl-row">
                    <PdfButton href={cvHref} label={t.contact.cv} title="Mihir Bavisi — CV" className="dl" />
                    <PdfButton href="/ArbeitsZeugnis.pdf" label={t.contact.refs} title="References & certificates" className="dl" />
                  </div>
                </div>
                <div>
                  <div className="lbl">{t.contact.or}</div>
                  <div className="contact-direct">
                    <a href={`mailto:${EMAIL}`}>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span className="mono">{EMAIL}</span>
                    </a>
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                      LinkedIn / mihirbavisi
                    </a>
                    <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
                      </svg>
                      GitHub / Mihir22c
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="form">
              <div className="field">
                <label htmlFor="cf-name">{t.contact.name}</label>
                <input
                  id="cf-name"
                  type="text"
                  autoComplete="name"
                  placeholder={t.contact.namePh}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="cf-email">{t.contact.email}</label>
                <input
                  id="cf-email"
                  type="email"
                  autoComplete="email"
                  placeholder={t.contact.emailPh}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="cf-msg">{t.contact.message}</label>
                <textarea
                  id="cf-msg"
                  placeholder={t.contact.messagePh}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              {/* honeypot: hidden from humans, bots fill it and get rejected */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="cf-company">Company</label>
                <input
                  id="cf-company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>

              <button
                className="btn btn-primary"
                onClick={submit}
                disabled={status === "sending"}
              >
                {status === "sending" ? t.contact.sending : t.contact.send}
              </button>

              {status === "ok" && <div className="note ok">{t.contact.sent}</div>}
              {status === "error" && <div className="note bad">{t.contact.error}</div>}
              {status === "invalid" && <div className="note bad">{t.contact.invalid}</div>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}