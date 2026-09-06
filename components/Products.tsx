"use client";

import { useLang } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Products() {
    const { t } = useLang();
    return (
        <section className="section" id="products">
            <div className="wrap">
                <Reveal>
                    <div className="section-head">
                        <span className="eyebrow">{t.products.eyebrow}</span>
                        <h2>{t.products.title}</h2>
                        <p>{t.products.sub}</p>
                    </div>
                </Reveal>
                <div className="work-grid">
                    {t.products.cards.map((c, i) => (
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
                                            <a className="store-btn" href={c.ios} target="_blank" rel="noopener noreferrer">
                                                App Store →
                                            </a>
                                        )}
                                        {c.android && (
                                            <a className="store-btn" href={c.android} target="_blank" rel="noopener noreferrer">
                                                ▶ Google Play →
                                            </a>
                                        )}
                                    </div>
                                )}
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}