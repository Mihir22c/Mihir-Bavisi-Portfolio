"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Skills() {
  const { t } = useLang();
  return (
    <section className="section" id="skills" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">{t.skills.eyebrow}</span>
            <h2>{t.skills.title}</h2>
            <p>{t.skills.sub}</p>
          </div>
        </Reveal>
        <div className="skill-grid">
          {t.skills.groups.map((g, i) => (
            <Reveal delay={i * 60} key={g.label}>
              <div className="skill-card">
                <h3>{g.label}</h3>
                <ul>
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
