"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "de";

type Dict = typeof en;

const en = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    work: "Work",
    contact: "Contact",
    cta: "Get in touch",
  },
  hero: {
    eyebrow: "React Native Engineer · 5+ years",
    line1: "I build mobile",
    line2: "apps",
    line3a: "and the ",
    line3b: "native bridges",
    line4: "underneath them.",
    body: "Production iOS & Android, from React Native & TypeScript down to native modules in Kotlin/Java. Currently at Diehl Metering, Nuremberg.",
    ctaWork: "View selected work",
    ctaContact: "Get in touch",
    ctaCv: "Download CV",
    stat1: "5+",
    stat1l: "Years shipping",
    stat2: "iOS + Android",
    stat2l: "Production stores",
    stat3: "EU / Remote",
    stat3l: "Open from Q3 2026",
    cardRole: "react-native · android · typescript",
    cardOpen: "Open to opportunities",
    cardS1: "5+",
    cardS1l: "years",
    cardS2: "7",
    cardS2l: "companies",
    cardS3: "2",
    cardS3l: "platforms",
  },
  about: {
    eyebrow: "About",
    title: "A mobile engineer who lives at the JS \u2194 native boundary.",
    p1: "Most React Native developers stop at JavaScript. My work consistently goes one layer deeper into the Kotlin and Java that the JS layer talks to. At Diehl Metering I'm building an Android Auto extension as a native module inside a production React Native app, bridging the JavaScript layer to native vehicle code.",
    p2: "Five-plus years across India, the US, and Germany from a Bosch subsidiary (ETAS) to a US e-commerce app shipped on both stores. I care about apps that are fast, tested, and actually maintainable after I leave.",
    p3: "Based in Nuremberg, finishing an M.Eng. in Software Engineering, available full-time from Q3 2026. EU Blue Card eligible on graduation.",
    f1t: "Native depth",
    f1b: "JS \u2194 Kotlin/Java bridges, custom native modules, Android Auto.",
    f2t: "Shipped, not shelved",
    f2b: "Releases live on the App Store and Google Play across multiple companies.",
    f3t: "International",
    f3b: "Worked across India, the US, and Germany in Scrum/Kanban teams.",
    f4t: "Bilingual",
    f4b: "English C1, German B1+ comfortable in German engineering teams.",
  },
  skills: {
    eyebrow: "Skills",
    title: "What I work with",
    sub: "Depth where it counts, breadth where it helps.",
    groups: [
      { label: "Mobile", items: ["React Native (5+ yrs, production)", "Kotlin Multiplatform", "Compose Multiplatform", "Android Native (Kotlin, Java)", "Native Modules", "iOS Deployment"] },
      { label: "Frontend", items: ["React (advanced)", "Next.js", "Angular", "Vue", "TypeScript", "HTML5 / CSS3"] },
      { label: "Backend & APIs", items: ["Kotlin · Spring Boot", "JWT / Spring Security", "Node.js", "Express.js", "REST", "GraphQL"] },
      { label: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "SQLDelight / Room / SQLite", "Prisma"] },
      { label: "DevOps", items: ["Docker", "GitHub Actions", "Jenkins", "CircleCI", "Git (GitLab/GitHub/Bitbucket)", "Vercel"] },
      { label: "Testing & method", items: ["Jest", "React Testing Library", "JUnit 5 / MockK", "Detox (basics)", "Scrum / Kanban", "Domain-Driven Design"] },
    ],
  },
  exp: {
    eyebrow: "Experience",
    title: "Where I've shipped",
    items: [
      { when: "03/2026 \u2013 Present", role: "Working Student React Native Developer", org: "Diehl Metering GmbH", place: "Nuremberg, DE", points: ["Building an Android Auto extension as a native module in a production React Native app", "Bridging the JavaScript layer to native Kotlin/Java for in-vehicle functionality", "Maintaining code quality through reviews and close work with the mobile team"] },
      { when: "11/2024 \u2013 05/2025", role: "Full-Stack Developer Intern", org: "EUROS Embedded Systems GmbH", place: "Nuremberg, DE", points: ["Built a real-time solar-energy dashboard end-to-end with Next.js, React and REST", "Handled third-party API sync and error handling; built reusable UI components"] },
      { when: "04/2024 \u2013 09/2024", role: "Hybrid App Developer Intern (Angular / Ionic)", org: "ETAS GmbH (Robert Bosch)", place: "Stuttgart, DE", points: ["Developed hybrid apps with Ionic (Capacitor) and Angular for internal Bosch use", "Integrated REST APIs with backward compatibility in a two-week Scrum team", "Rated \u201cwell above expectations\u201d in the official ETAS work reference (Zeugnis)"] },
      { when: "11/2022 \u2013 10/2023", role: "Senior Mobile Applications Developer", org: "Orafox (Remote)", place: "Torrance, USA", points: ["Built Natably, a cross-platform React Native app live on the App Store and Play Store", "Developed the APIs syncing data between web and mobile across the product"] },
      { when: "05/2021 \u2013 12/2022", role: "React Native Developer", org: "Logifox Infotech", place: "Surat, IN", points: ["Shipped the Atlantis Dubai and Atlantis Circle apps (React Native + Redux) for a major resort client", "Built custom UI components, integrated REST and third-party APIs, worked in Agile sprints"] },
      { when: "08/2020 \u2013 03/2021", role: "Android Developer (Intern)", org: "Adsum Originator LLP", place: "Surat, IN", points: ["Native Android with Kotlin and Java; UI layouts and crash-analysis stability work"] },
    ],
  },
  work: {
    eyebrow: "Selected Work",
    title: "Things I've actually shipped",
    sub: "Production work from real teams not tutorial projects.",
    cards: [
      { tag: "Native module · in production", name: "Android Auto extension", org: "Diehl Metering", body: "A native Android Auto module inside a production React Native app, bridging JS to Kotlin/Java so vehicle screens render and respond natively.", stack: ["React Native", "Kotlin", "Native Modules", "Android Auto"], ios: "", android: "" },
      { tag: "Live · iOS + Android", name: "Natably", org: "Orafox", body: "A cross-platform app that helps people discover their natural abilities through interaction. I built the responsive React Native app and the APIs that sync data between web and mobile.", stack: ["React Native", "Redux", "REST", "App Store", "Play Store"], ios: "https://apps.apple.com/us/app/natably/id1451277038", android: "https://play.google.com/store/apps/details?id=com.natably.android" },
      { tag: "Client app · iOS + Android", name: "Atlantis Dubai", org: "Logifox · for Atlantis The Palm", body: "The official companion app for the Atlantis Dubai resort stays, dining, entertainment and wellness in one place. Built with React Native and Redux, with REST integration and a focus on a seamless UX.", stack: ["React Native", "Redux", "REST", "App Store", "Play Store"], ios: "https://apps.apple.com/in/app/atlantis-dubai/id1637787685", android: "https://play.google.com/store/apps/details?id=com.mankara.hudini.atlantis" },
      { tag: "Client app · Android", name: "Atlantis Circle", org: "Logifox · for Atlantis The Palm", body: "A dining-rewards app for Atlantis Dubai with 20+ restaurants discounts, quick bookings and dining ideas. I built custom UI components and integrated third-party APIs.", stack: ["React Native", "Redux", "REST", "Play Store"], ios: "https://apps.apple.com/us/app/the-atlantis-circle/id1664444358", android: "https://play.google.com/store/apps/details?id=com.atlantiscircle" },
      { tag: "Automotive · Bosch group", name: "Internal hybrid mobile app", org: "ETAS (Bosch)", body: "An Angular + Ionic hybrid app for internal Bosch use, with backward-compatible REST integration in a Scrum team.", stack: ["Angular", "Ionic", "Capacitor", "REST"], ios: "", android: "" },
      { tag: "Dashboard · real-time data", name: "Solar-energy dashboard", org: "EUROS Embedded Systems", body: "A real-time energy dashboard built end-to-end in Next.js + React, syncing third-party APIs with robust error handling.", stack: ["Next.js", "React", "REST", "TypeScript"], ios: "", android: "" },
    ],
    flagshipTag: "Flagship · Kotlin Multiplatform",
    flagshipName: "Perks — KMP loyalty wallet",
    flagshipBody: "One Kotlin codebase \u2014 shared logic and Compose UI \u2014 running natively on Android and iOS, no SwiftUI. Offline-first (Ktor \u2192 SQLDelight \u2192 Flow), encrypted card storage, Koin DI, and shared tests running on both platforms in CI.",
    flagshipCta: "View on GitHub",
    ghCta: "See all my code →",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk.",
    sub: "Open to full-time mobile / React Native roles in the EU from Q3 2026. Drop a line I reply to everything.",
    name: "Name",
    namePh: "Your name",
    email: "Email",
    emailPh: "you@company.com",
    message: "Message",
    messagePh: "What are you building?",
    send: "Send message",
    sending: "Sending\u2026",
    sent: "Thanks your message is on its way. I'll get back to you soon.",
    error: "Something went wrong sending that. Email me directly at mihir.m.bavisi@gmail.com.",
    invalid: "Please fill in your name, a valid email, and a message.",
    or: "or reach me directly",
    cv: "Download CV",
    refs: "References & certificates",
  },
  footer: {
    role: "React Native Engineer · Nuremberg, Germany",
    built: "Built with Next.js & TypeScript. This site is itself a code sample.",
  },
};

const de: Dict = {
  nav: {
    about: "\u00dcber mich",
    skills: "Skills",
    experience: "Erfahrung",
    work: "Projekte",
    contact: "Kontakt",
    cta: "Kontakt",
  },
  hero: {
    eyebrow: "React Native Engineer · 5+ Jahre",
    line1: "Ich entwickle",
    line2: "mobile Apps",
    line3a: "und die ",
    line3b: "nativen Br\u00fccken",
    line4: "darunter.",
    body: "Produktive iOS- & Android-Apps von React Native & TypeScript bis zu nativen Modulen in Kotlin/Java. Aktuell bei Diehl Metering, N\u00fcrnberg.",
    ctaWork: "Ausgew\u00e4hlte Projekte",
    ctaContact: "Kontakt aufnehmen",
    ctaCv: "Lebenslauf",
    stat1: "5+",
    stat1l: "Jahre Erfahrung",
    stat2: "iOS + Android",
    stat2l: "Produktiv im Store",
    stat3: "EU / Remote",
    stat3l: "Verf\u00fcgbar ab Q3 2026",
    cardRole: "react-native · android · typescript",
    cardOpen: "Offen f\u00fcr Angebote",
    cardS1: "5+",
    cardS1l: "Jahre",
    cardS2: "7",
    cardS2l: "Firmen",
    cardS3: "2",
    cardS3l: "Plattformen",
  },
  about: {
    eyebrow: "\u00dcber mich",
    title: "Ein Mobile-Engineer an der Grenze zwischen JS und nativem Code.",
    p1: "Die meisten React-Native-Entwickler h\u00f6ren bei JavaScript auf. Meine Arbeit geht konsequent eine Ebene tiefer in den Kotlin- und Java-Code, mit dem die JS-Schicht spricht. Bei Diehl Metering entwickle ich eine Android-Auto-Erweiterung als Native Module in einer produktiven React-Native-App.",
    p2: "\u00dcber f\u00fcnf Jahre in Indien, den USA und Deutschland von einer Bosch-Tochter (ETAS) bis zu einer US-E-Commerce-App in beiden Stores. Mir sind Apps wichtig, die schnell, getestet und nach meinem Weggang wartbar sind.",
    p3: "Wohnhaft in N\u00fcrnberg, kurz vor Abschluss des M.Eng. Software Engineering, verf\u00fcgbar in Vollzeit ab Q3 2026. Blue-Card-berechtigt nach dem Abschluss.",
    f1t: "Native Tiefe",
    f1b: "JS \u2194 Kotlin/Java-Br\u00fccken, eigene Native Modules, Android Auto.",
    f2t: "Ausgeliefert",
    f2b: "Releases live im App Store und bei Google Play \u00fcber mehrere Firmen.",
    f3t: "International",
    f3b: "Erfahrung in Indien, den USA und Deutschland in Scrum/Kanban-Teams.",
    f4t: "Zweisprachig",
    f4b: "Englisch C1, Deutsch B1+ sicher in deutschen Engineering-Teams.",
  },
  skills: {
    eyebrow: "Skills",
    title: "Womit ich arbeite",
    sub: "Tiefe, wo es z\u00e4hlt. Breite, wo es hilft.",
    groups: [
      { label: "Mobile", items: ["React Native (5+ Jahre, produktiv)", "Kotlin Multiplatform", "Compose Multiplatform", "Android Native (Kotlin, Java)", "Native Modules", "iOS Deployment"] },
      { label: "Frontend", items: ["React (Advanced)", "Next.js", "Angular", "Vue", "TypeScript", "HTML5 / CSS3"] },
      { label: "Backend & APIs", items: ["Kotlin · Spring Boot", "JWT / Spring Security", "Node.js", "Express.js", "REST", "GraphQL"] },
      { label: "Daten", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "SQLDelight / Room / SQLite", "Prisma"] },
      { label: "DevOps", items: ["Docker", "GitHub Actions", "Jenkins", "CircleCI", "Git (GitLab/GitHub/Bitbucket)", "Vercel"] },
      { label: "Testing & Methode", items: ["Jest", "React Testing Library", "JUnit 5 / MockK", "Detox (Grundlagen)", "Scrum / Kanban", "Domain-Driven Design"] },
    ],
  },
  exp: {
    eyebrow: "Erfahrung",
    title: "Wo ich geliefert habe",
    items: [
      { when: "03/2026 \u2013 heute", role: "Werkstudent React Native Developer", org: "Diehl Metering GmbH", place: "N\u00fcrnberg, DE", points: ["Entwicklung einer Android-Auto-Erweiterung als Native Module in einer produktiven React-Native-App", "Anbindung des JavaScript-Layers an nativen Kotlin/Java-Code f\u00fcr Fahrzeugfunktionen", "Sicherung der Code-Qualit\u00e4t durch Reviews und enge Abstimmung mit dem Mobile-Team"] },
      { when: "11/2024 \u2013 05/2025", role: "Werkstudent / Praktikum Full-Stack", org: "EUROS Embedded Systems GmbH", place: "N\u00fcrnberg, DE", points: ["Echtzeit-Dashboard f\u00fcr Solarenergie end-to-end mit Next.js, React und REST", "Datensynchronisierung von Drittanbieter-APIs inkl. Fehlerbehandlung und UI-Komponenten"] },
      { when: "04/2024 \u2013 09/2024", role: "Praktikum Hybrid-App (Angular / Ionic)", org: "ETAS GmbH (Robert Bosch)", place: "Stuttgart, DE", points: ["Hybride Apps mit Ionic (Capacitor) und Angular f\u00fcr interne Bosch-Anwendungen", "REST-Integration mit Abw\u00e4rtskompatibilit\u00e4t in einem 2-Wochen-Scrum-Team", "Im offiziellen ETAS-Zeugnis \u201eweit \u00fcber den Erwartungen\u201c bewertet"] },
      { when: "11/2022 \u2013 10/2023", role: "Senior Mobile Applications Developer", org: "Orafox (Remote)", place: "Torrance, USA", points: ["Natably entwickelt eine Cross-Platform-React-Native-App, live im App Store und bei Google Play", "APIs zur Synchronisierung von Daten zwischen Web und Mobile umgesetzt"] },
      { when: "05/2021 \u2013 12/2022", role: "React Native Developer", org: "Logifox Infotech", place: "Surat, IN", points: ["Die Apps Atlantis Dubai und Atlantis Circle (React Native + Redux) f\u00fcr einen gro\u00dfen Resort-Kunden ausgeliefert", "Eigene UI-Komponenten gebaut, REST- und Drittanbieter-APIs integriert, in Agile-Sprints gearbeitet"] },
      { when: "08/2020 \u2013 03/2021", role: "Android Developer (Praktikant)", org: "Adsum Originator LLP", place: "Surat, IN", points: ["Native Android mit Kotlin und Java; UI-Layouts und Crash-Analyse"] },
    ],
  },
  work: {
    eyebrow: "Ausgew\u00e4hlte Projekte",
    title: "Was ich wirklich ausgeliefert habe",
    sub: "Produktive Arbeit aus echten Teams keine Tutorial-Projekte.",
    cards: [
      { tag: "Native Module · produktiv", name: "Android-Auto-Erweiterung", org: "Diehl Metering", body: "Ein natives Android-Auto-Modul in einer produktiven React-Native-App Br\u00fccke von JS zu Kotlin/Java, damit Fahrzeug-Screens nativ funktionieren.", stack: ["React Native", "Kotlin", "Native Modules", "Android Auto"], ios: "", android: "" },
      { tag: "Live · iOS + Android", name: "Natably", org: "Orafox", body: "Eine Cross-Platform-App, die Menschen hilft, ihre nat\u00fcrlichen F\u00e4higkeiten durch Interaktion zu entdecken. Ich habe die responsive React-Native-App und die APIs zur Synchronisierung zwischen Web und Mobile entwickelt.", stack: ["React Native", "Redux", "REST", "App Store", "Play Store"], ios: "https://apps.apple.com/us/app/natably/id1451277038", android: "https://play.google.com/store/apps/details?id=com.natably.android" },
      { tag: "Kundenprojekt · iOS + Android", name: "Atlantis Dubai", org: "Logifox · f\u00fcr Atlantis The Palm", body: "Die offizielle Begleit-App des Atlantis-Dubai-Resorts Aufenthalte, Dining, Entertainment und Wellness an einem Ort. Mit React Native und Redux, REST-Integration und Fokus auf eine reibungslose UX.", stack: ["React Native", "Redux", "REST", "App Store", "Play Store"], ios: "https://apps.apple.com/in/app/atlantis-dubai/id1637787685", android: "https://play.google.com/store/apps/details?id=com.mankara.hudini.atlantis" },
      { tag: "Kundenprojekt · Android", name: "Atlantis Circle", org: "Logifox · f\u00fcr Atlantis The Palm", body: "Eine Dining-Rewards-App f\u00fcr Atlantis Dubai mit 20+ Restaurants Rabatte, schnelle Buchungen und Dining-Ideen. Ich habe eigene UI-Komponenten gebaut und Drittanbieter-APIs integriert.", stack: ["React Native", "Redux", "REST", "Play Store"], ios: "https://apps.apple.com/us/app/the-atlantis-circle/id1664444358", android: "https://play.google.com/store/apps/details?id=com.atlantiscircle" },
      { tag: "Automotive · Bosch-Gruppe", name: "Interne Hybrid-App", org: "ETAS (Bosch)", body: "Eine Angular- + Ionic-Hybrid-App f\u00fcr interne Bosch-Nutzung mit abw\u00e4rtskompatibler REST-Integration im Scrum-Team.", stack: ["Angular", "Ionic", "Capacitor", "REST"], ios: "", android: "" },
      { tag: "Dashboard · Echtzeitdaten", name: "Solarenergie-Dashboard", org: "EUROS Embedded Systems", body: "Ein Echtzeit-Dashboard, end-to-end in Next.js + React entwickelt, mit Drittanbieter-API-Sync und robuster Fehlerbehandlung.", stack: ["Next.js", "React", "REST", "TypeScript"], ios: "", android: "" },
    ],
    flagshipTag: "Flagship · Kotlin Multiplatform",
    flagshipName: "Perks — KMP Loyalty-Wallet",
    flagshipBody: "Eine Kotlin-Codebasis \u2014 gemeinsame Logik und Compose-UI \u2014 nativ auf Android und iOS, ohne SwiftUI. Offline-first (Ktor \u2192 SQLDelight \u2192 Flow), verschl\u00fcsselte Kartenspeicherung, Koin-DI und geteilte Tests, die auf beiden Plattformen in der CI laufen.",
    flagshipCta: "Auf GitHub ansehen",
    ghCta: "Gesamten Code ansehen →",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Sprechen wir.",
    sub: "Offen f\u00fcr Vollzeit-Mobile/React-Native-Stellen in der EU ab Q3 2026. Schreiben Sie mir ich antworte auf alles.",
    name: "Name",
    namePh: "Ihr Name",
    email: "E-Mail",
    emailPh: "sie@firma.de",
    message: "Nachricht",
    messagePh: "Woran arbeiten Sie?",
    send: "Nachricht senden",
    sending: "Wird gesendet\u2026",
    sent: "Danke Ihre Nachricht ist unterwegs. Ich melde mich bald.",
    error: "Beim Senden ist etwas schiefgelaufen. Schreiben Sie mir direkt an mihir.m.bavisi@gmail.com.",
    invalid: "Bitte Name, eine g\u00fcltige E-Mail und eine Nachricht angeben.",
    or: "oder direkt erreichen",
    cv: "Lebenslauf",
    refs: "Zeugnisse & Zertifikate",
  },
  footer: {
    role: "React Native Engineer · N\u00fcrnberg, Deutschland",
    built: "Gebaut mit Next.js & TypeScript. Diese Seite ist selbst eine Code-Probe.",
  },
};

const dict = { en, de };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}