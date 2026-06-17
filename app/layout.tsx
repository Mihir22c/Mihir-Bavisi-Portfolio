import type { Metadata } from "next";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mihir Bavisi React Native Engineer",
  description:
    "Mihirkumar Bavisi React Native engineer with 5+ years building production iOS & Android apps and the native modules underneath them. Based in Nuremberg, open to EU / remote roles from Q3 2026.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Mihir Bavisi React Native Engineer",
    description:
      "5+ years of production iOS & Android, from React Native down to native Kotlin/Java modules. Nuremberg · open from Q3 2026.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;450;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mihirkumar Bavisi",
              alternateName: ["Mihir Bavisi", "Mihirkumar Manubhai Bavisi"],
              url: "https://mihirbavisi.com",
              jobTitle: "React Native Engineer",
              worksFor: { "@type": "Organization", name: "Diehl Metering" },
              address: { "@type": "PostalAddress", addressLocality: "Nuremberg", addressCountry: "DE" },
              sameAs: [
                "https://github.com/Mihir22c",
                "https://www.linkedin.com/in/mihirbavisi/",
              ],
            }),
          }}
        />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
