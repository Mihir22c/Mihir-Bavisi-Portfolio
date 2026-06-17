"use client";

import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <div className="wrap foot-in">
        <div>
          <div className="frole">{t.footer.role}</div>
          <div className="fbuilt">{t.footer.built}</div>
        </div>
        <div className="foot-social">
          <a href="https://github.com/Mihir22c" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mihirbavisi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:mihir.m.bavisi@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
