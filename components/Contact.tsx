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
                      <span>✉</span>
                      <span className="mono">{EMAIL}</span>
                    </a>
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                      <span>in</span> LinkedIn / mihirbavisi
                    </a>
                    <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                      <span>{"</>"}</span> GitHub / Mihir22c
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
