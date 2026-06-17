# Mihir Bavisi — Portfolio

A bilingual (EN/DE) Next.js + TypeScript portfolio. The site is itself a clean
React code sample: typed i18n via Context, a reusable scroll-reveal component,
and a real serverless contact form.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build && npm start   # production build
```

## What's inside

```
app/
  layout.tsx          fonts, metadata, <LangProvider>
  page.tsx            composes the sections
  globals.css         design tokens + all styles
  api/contact/route.ts  serverless contact handler (Resend)
components/
  Nav · Hero · About · Skills · Experience · Work · Contact · Footer · Reveal
lib/
  i18n.tsx            EN/DE dictionary + language context
public/
  Mihir_Bavisi_CV_EN.pdf
  Mihir_Bavisi_Lebenslauf_DE.pdf
  Mihir_Bavisi_References.pdf
```

The Hero CV button and the Contact "Download CV" button automatically serve the
English or German PDF depending on the active language toggle.

---

## 1. Make the contact form work (Resend)

The form posts to `/api/contact`, which emails you via [Resend](https://resend.com).
Free tier is plenty for a portfolio.

1. Create a free account at https://resend.com and verify your own email.
2. Go to **API Keys → Create API Key**, copy the key (starts with `re_`).
3. Locally, copy `.env.example` to `.env` and paste your key:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_TO_EMAIL=mihir.m.bavisi@gmail.com
   ```
4. Restart `npm run dev` — submit the form and check your inbox.

The form sends *from* Resend's shared address (`onboarding@resend.dev`) and sets
**reply-to** to the visitor's email, so replying goes straight to them. When you
later own a domain, verify it in Resend and change `FROM` in
`app/api/contact/route.ts` to e.g. `Portfolio <hello@yourdomain.com>`.

A hidden honeypot field already blocks most spam bots.

---

## 2. Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo (e.g. `mihir-portfolio`).
2. Go to https://vercel.com, sign in with GitHub, **Add New → Project**, import the repo.
3. Before the first deploy, open **Environment Variables** and add:
   - `RESEND_API_KEY` = your Resend key
   - `CONTACT_TO_EMAIL` = mihir.m.bavisi@gmail.com
4. Click **Deploy**. You'll get a live URL like `mihir-portfolio.vercel.app` in ~1 minute.

Every future `git push` redeploys automatically.

---

## 3. Custom domain (optional, later)

In Vercel: **Project → Settings → Domains → Add**. Point a domain you own
(e.g. `mihirbavisi.dev`, ~€10–15/year) and Vercel handles HTTPS automatically.
A custom domain on a CV reads more senior than a `.vercel.app` subdomain — worth
doing once the content is final.

---

## Before you call it done

- **Flagship repo link:** `components/Work.tsx` has `FLAGSHIP_REPO` set to your
  GitHub profile as a placeholder. When your "Native Bridge Toolkit" repo is
  public, swap in its real URL (search for the `TODO` comment).
- **OG image:** add a `public/og.png` and reference it in `app/layout.tsx`
  `openGraph.images` so link previews look sharp on LinkedIn.
- Replace `metadataBase` in `app/layout.tsx` with your real domain once you have one.
