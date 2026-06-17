# Mihir Bavisi — Portfolio

A bilingual (EN/DE) Next.js + TypeScript portfolio with light/dark mode, in-page
PDF viewing for the CV and references, and a real serverless contact form. The
site is itself a clean React code sample.

## Run locally

This project uses **pnpm**.

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

```bash
pnpm build && pnpm start   # production build
```

> First time only: if an `npm` lockfile is present, remove it so pnpm owns the
> lockfile — committing two lockfiles makes Vercel guess the wrong package manager.
>
> ```bash
> rm -f package-lock.json
> pnpm install            # generates pnpm-lock.yaml
> ```
>
> Commit `pnpm-lock.yaml`. Vercel auto-detects pnpm from it.

## What's inside

app/

layout.tsx fonts, metadata, theme bootstrap, <LangProvider>

page.tsx composes the sections

globals.css design tokens (light + dark) + all styles

api/contact/route.ts serverless contact handler (Resend)

components/

Nav · Hero · About · Skills · Experience · Work · Contact · Footer

Reveal · ThemeToggle · PdfButton

lib/

i18n.tsx EN/DE dictionary + language context

public/

Mihir_Bavisi_CV_EN.pdf

Mihir_Bavisi_Lebenslauf_DE.pdf

Mihir_Bavisi_References.pdf

The CV buttons serve the English or German PDF based on the active language
toggle, and open it in an in-page viewer (with Download + Open-in-new-tab).
Theme follows the visitor's OS setting on first visit and remembers their choice.

---

## 1. Make the contact form work (Resend)

The form posts to `/api/contact`, which emails you via [Resend](https://resend.com).
The free tier is plenty for a portfolio.

1. Create a free account at https://resend.com and verify your own email.
2. Go to **API Keys → Create API Key**, copy the key (starts with `re_`).
3. Locally, copy `.env.example` to `.env` and paste your key:
   RESEND_API_KEY=re_your_key_here

CONTACT_TO_EMAIL=mihir.m.bavisi@gmail.com 4. Restart `pnpm dev` — submit the form and check your inbox.

The form sends _from_ Resend's shared address (`onboarding@resend.dev`) and sets
**reply-to** to the visitor's email. Once you own a domain, verify it in Resend
and change `FROM` in `app/api/contact/route.ts`. A hidden honeypot blocks most spam.

---

## 2. Deploy to Vercel

1. Push this folder to a GitHub repo (e.g. `mihir-portfolio`).
2. Go to https://vercel.com, sign in with GitHub, **Add New → Project**, import the repo.
   Vercel detects pnpm from `pnpm-lock.yaml` automatically.
3. Before the first deploy, open **Environment Variables** and add:
   - `RESEND_API_KEY` = your Resend key
   - `CONTACT_TO_EMAIL` = mihir.m.bavisi@gmail.com
4. Click **Deploy**. Live URL in ~1 minute. Every future `git push` redeploys.

---

## 3. Custom domain (optional, later)

In Vercel: **Project → Settings → Domains → Add**. Point a domain you own
(e.g. `mihirbavisi.dev`) and Vercel handles HTTPS automatically.

---

## Before you call it done

- **Atlantis Circle link:** confirm the Play Store listing still resolves. If not,
  remove that card object from `work.cards` (both `en` and `de`) in `lib/i18n.tsx`.
- **Flagship repo link:** `components/Work.tsx` has `FLAGSHIP_REPO` set to your
  GitHub profile as a placeholder. Swap in the real repo URL once it's public.
- **OG image:** add `public/og.png` and reference it in `app/layout.tsx`
  `openGraph.images` for sharp LinkedIn previews.
