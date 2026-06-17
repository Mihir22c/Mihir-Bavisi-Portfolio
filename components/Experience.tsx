"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLang();
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">{t.exp.eyebrow}</span>
            <h2>{t.exp.title}</h2>
          </div>
        </Reveal>
        <div className="exp-list">
          {t.exp.items.map((e, i) => (
            <Reveal delay={i * 40} key={e.role + e.when}>
              <div className="exp-item">
                <div className="exp-when">{e.when}</div>
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-org">{e.org}</div>
                  <div className="exp-place">{e.place}</div>
                  <ul className="exp-points">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
