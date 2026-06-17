"use client";

import { useLang } from "@/lib/i18n";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const { t, lang, setLang } = useLang();
  return (
    <nav>
      <div className="wrap nav-in">
        <a className="brand" href="#top">
          <span className="dot" /> Mihir Bavisi
        </a>
        <div className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#work">{t.nav.work}</a>
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <div className="lang" role="group" aria-label="Language">
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              className={lang === "de" ? "active" : ""}
              onClick={() => setLang("de")}
              aria-pressed={lang === "de"}
            >
              DE
            </button>
          </div>
          <a className="nav-cta" href="#contact">
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
