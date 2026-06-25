"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

const GITHUB = "https://github.com/Mihir22c?tab=repositories";
const FLAGSHIP_REPO = "https://github.com/Mihir22c/Perks";
const BACKEND_REPO = "https://github.com/Mihir22c/Perks-Backend";

export default function Work() {
  const { t } = useLang();
  return (
    <section className="section" id="work" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">{t.work.eyebrow}</span>
            <h2>{t.work.title}</h2>
            <p>{t.work.sub}</p>
          </div>
        </Reveal>
        <div className="work-grid">
          {t.work.cards.map((c, i) => (
            <Reveal delay={i * 50} key={c.name}>
              <article className="work-card">
                <div className="work-tag">{c.tag}</div>
                <h3>{c.name}</h3>
                <div className="work-org">{c.org}</div>
                <p>{c.body}</p>
                <div className="work-stack">
                  {c.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                {(c.ios || c.android) && (
                  <div className="store-row">
                    {c.ios && (
                      <a
                        className="store-btn"
                        href={c.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        App Store →
                      </a>
                    )}
                    {c.android && (
                      <a
                        className="store-btn"
                        href={c.android}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ▶ Google Play →
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}

          <Reveal>
            <article className="work-card flagship">
              <div className="work-tag">{t.work.flagshipTag}</div>
              <h3>{t.work.flagshipName}</h3>
              <p>{t.work.flagshipBody}</p>
              <div className="work-stack">
                {t.work.flagshipStack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="flagship-row">
                <a
                  className="btn btn-onviolet"
                  href={FLAGSHIP_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ★ {t.work.flagshipCta}
                </a>
                <a
                  className="btn btn-line-light"
                  href={BACKEND_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.work.backendCta} →
                </a>
                <a
                  className="btn btn-line-light"
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.work.ghCta} →
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}