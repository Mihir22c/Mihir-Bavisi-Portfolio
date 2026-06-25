"use client";

import { useLang } from "@/lib/i18n";
import Counter from "@/components/Counter";
import Magnetic from "@/components/Magnetic";
import Parallax from "@/components/Parallax";

export default function Hero() {
  const { t, lang } = useLang();
  const cvHref =
    lang === "de"
      ? "/Lebenslauf_Mihirkumar_Bavisi_Core.pdf"
      : "/CV_Mihirkumar_Bavisi_Core.pdf";

  return (
    <header className="hero" id="top">
      <div className="aurora" aria-hidden="true">
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
      </div>
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow anim-up anim-d1">{t.hero.eyebrow}</span>
          <h1 className="anim-up anim-d2">
            {t.hero.line1} {t.hero.line2}
            <br />
            {t.hero.line3a}
            <span className="grad">{t.hero.line3b}</span> {t.hero.line4}
          </h1>
          <p className="hero-body anim-up anim-d3">{t.hero.body}</p>
          <div className="hero-cta anim-up anim-d4">
            <Magnetic>
              <a className="btn btn-primary" href="#work">
                {t.hero.ctaWork} →
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href={cvHref} target="_blank" rel="noopener noreferrer">
                ↓ {t.hero.ctaCv}
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href="#contact">
                {t.hero.ctaContact}
              </a>
            </Magnetic>
          </div>
          <div className="hero-stats anim-up anim-d5">
            <div>
              <div className="n">
                <Counter value={5} suffix="+" />
              </div>
              <div className="l">{t.hero.stat1l}</div>
            </div>
            <div>
              <div className="n">{t.hero.stat2}</div>
              <div className="l">{t.hero.stat2l}</div>
            </div>
            <div>
              <div className="n">{t.hero.stat3}</div>
              <div className="l">{t.hero.stat3l}</div>
            </div>
          </div>
        </div>

        <Parallax speed={0.12} className="phone-wrap">
          <div className="phone" aria-hidden="true">
            <div className="screen">
              <div className="statusbar">
                <span>9:41</span>
                <span>● ● ●</span>
              </div>
              <div className="avatar">MB</div>
              <div className="pname">Mihir Bavisi</div>
              <div className="prole">{t.hero.cardRole}</div>
              <div className="chips">
                <div className="chip">
                  <div className="cn">
                    <Counter value={5} suffix="+" />
                  </div>
                  <div className="cl">{t.hero.cardS1l}</div>
                </div>
                <div className="chip">
                  <div className="cn">
                    <Counter value={6} />
                  </div>
                  <div className="cl">{t.hero.cardS2l}</div>
                </div>
                <div className="chip">
                  <div className="cn">
                    <Counter value={2} />
                  </div>
                  <div className="cl">{t.hero.cardS3l}</div>
                </div>
              </div>
              <div className="codebox">
                <span className="c">// the bridge I live on</span>
                <br />
                const <span className="k">native</span> =
                <br />
                &nbsp;&nbsp;bridge(<span className="k">&apos;kotlin&apos;</span>);
                <br />
                ui.render(<span className="k">&apos;fast&apos;</span>);
              </div>
              <div className="open">{t.hero.cardOpen}</div>
            </div>
          </div>
        </Parallax>
      </div>
    </header>
  );
}