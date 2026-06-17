"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLang();
  const cards = [
    { ft: t.about.f1t, fb: t.about.f1b },
    { ft: t.about.f2t, fb: t.about.f2b },
    { ft: t.about.f3t, fb: t.about.f3b },
    { ft: t.about.f4t, fb: t.about.f4b },
  ];
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal>
          <div className="about-grid">
            <div>
              <span className="eyebrow">{t.about.eyebrow}</span>
              <h2
                style={{
                  fontFamily: "var(--disp)",
                  fontSize: "clamp(1.7rem,3.6vw,2.6rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-.02em",
                  margin: "14px 0 22px",
                }}
              >
                {t.about.title}
              </h2>
              <div className="about-prose">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </div>
            <div className="about-cards">
              {cards.map((c) => (
                <div className="fcard" key={c.ft}>
                  <div className="dotmark" />
                  <div className="ft">{c.ft}</div>
                  <div className="fb">{c.fb}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
