# Ini Tom — Data Analyst & Data Scientist Portfolio

A production-ready personal portfolio site built with **Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Three.js**. Designed to be premium, fast, accessible, and easy to maintain — and deployable to Vercel in minutes.

---

## 1. What's included

| Requirement | Where it lives |
|---|---|
| Dark/light mode toggle | `components/theme-provider.tsx`, `components/theme-toggle.tsx` |
| Hero with typing effect, animated stats, Three.js particle field | `components/hero.tsx`, `components/particle-field.tsx` |
| About section (bio, values) | `components/about.tsx` |
| Skills dashboard with animated progress bars | `components/skills.tsx` |
| Featured projects with filtering + search + case study details | `components/projects.tsx` |
| Certifications grid (10Alytics, 3MTT, IBM, AWS, DeepLearning.AI) | `components/certifications.tsx` |
| Interactive experience timeline | `components/experience.tsx` |
| Testimonials | `components/testimonials.tsx` |
| Contact form (EmailJS-ready) | `components/contact.tsx` |
| Footer with quick links + legal | `components/footer.tsx` |
| Cursor tracker (desktop only) | `components/cursor-tracker.tsx` |
| Back-to-top button | `components/back-to-top.tsx` |
| Cookie consent banner | `components/cookie-consent.tsx` |
| Privacy policy page | `app/privacy-policy/page.tsx` |
| SEO metadata, Open Graph, JSON-LD structured data | `app/layout.tsx` |
| `sitemap.xml` and `robots.txt` | `app/sitemap.ts`, `app/robots.ts` |
| All content (name, skills, projects, etc.) | `lib/data.ts` — **edit this one file to update the whole site** |

All content is realistic placeholder data for "Ini Tom." Update `lib/data.ts` and the files in `public/` with real details before publishing.

---

## 2. Requirements

- Node.js **18.18 or newer** (Node 20 LTS recommended)
- npm (or pnpm/yarn if you prefer — just adjust commands below)

Check your version:
```bash
node -v
```

---

## 3. Local setup

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment template
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 4. Connecting the contact form (form endpoint)

The contact form works immediately in "demo mode" (it simulates a send) so nothing is broken out of the box. To make it actually deliver messages, plug in any endpoint that accepts a JSON POST — Formspree, Getform, Web3Forms, or your own backend all work with zero code changes.

1. Get your endpoint URL from your provider (e.g. Formspree → `https://formspree.io/f/abcdwxyz`).
2. Copy the env template if you haven't already:
   ```bash
   cp .env.example .env.local
   ```
3. Paste your endpoint into `.env.local`:
   ```
   NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/abcdwxyz
   ```
4. Restart the dev server (`npm run dev`).

That's it — `components/contact.tsx` reads `NEXT_PUBLIC_FORM_ENDPOINT` and posts `{ name, email, message }` as JSON automatically once it's set. On Vercel, add the same variable under **Project Settings → Environment Variables** (env vars in `.env.local` are not read in production).

---

## 5. Replacing placeholder content

| To change... | Edit... |
|---|---|
| Name, tagline, email, social links, resume URL | `lib/data.ts` → `profile` |
| Hero stats | `lib/data.ts` → `stats` |
| Skills & proficiency levels | `lib/data.ts` → `skillGroups` |
| Projects | `lib/data.ts` → `projects` |
| Certifications | `lib/data.ts` → `certifications` |
| Experience timeline | `lib/data.ts` → `experience` |
| Testimonials | `lib/data.ts` → `testimonials` |
| Nav links | `lib/data.ts` → `navLinks` |
| Profile photo, project thumbnails, OG image | `public/images/*.svg` (replace with real JPG/PNG/WebP and update the `image` paths in `lib/data.ts`) |
| Resume file | `public/resume/Ini-Tom-Resume.pdf` (keep the filename, or update `profile.resumeUrl`) |
| Site domain (for SEO/OG/sitemap) | Replace `https://initom.dev` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` |

All images currently ship as lightweight placeholder SVGs so the site runs with zero missing assets. Swap them for real photography/screenshots before launch.

---

## 6. Deploying to Vercel

### Option A — via GitHub (recommended)
1. Push this project to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no build settings needed.
4. Add your environment variables (from `.env.example`) under **Project Settings → Environment Variables**.
5. Click **Deploy**.

### Option B — via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow prompts
vercel --prod # promote to production
```

### Post-deploy checklist
- [ ] Set your real domain in Vercel and update the `siteUrl`/`base` constants noted above.
- [ ] Add environment variables in Vercel's dashboard (they are not read from `.env.local`).
- [ ] Replace placeholder images, resume PDF, and social links.
- [ ] Run a Lighthouse audit in Chrome DevTools to confirm performance/SEO/accessibility scores.

---

## 7. Project structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx            # Assembles all homepage sections
│   ├── globals.css         # Design tokens, base styles, utility classes
│   ├── sitemap.ts          # /sitemap.xml
│   ├── robots.ts           # /robots.txt
│   └── privacy-policy/
│       └── page.tsx
├── components/              # One component per section/feature
├── lib/
│   └── data.ts              # All editable site content lives here
├── public/
│   ├── images/               # Placeholder SVG art (swap for real assets)
│   └── resume/                # Placeholder resume PDF
├── tailwind.config.ts        # Design tokens (colors, fonts, animations)
├── next.config.mjs
└── package.json
```

---

## 8. Design system reference

- **Palette:** ink (`#0A0E14`) / paper (`#F7F5F0`) backgrounds, with signal accents — amber `#FFB454`, violet `#7C8CFF`, teal `#3DDC97`, rose `#FF6B81`.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/data).
- **Motion:** Framer Motion for scroll reveals, a lightweight Three.js particle field in the hero, and `prefers-reduced-motion` is respected throughout.

---

## 9. Performance & accessibility notes

- Images use the `loading="lazy"` attribute; swap the placeholder SVGs for `next/image`-optimized assets if you move to raster photography for even better LCP.
- Focus states are visible everywhere (`.focus-ring` utility) and the skip-to-content link is included for keyboard/screen-reader users.
- Reduced-motion users automatically get animations and the particle field disabled.
- Run `npm run build` locally before deploying to catch any type errors early:
  ```bash
  npm run build
  ```

---

Built for **Ini Tom** — Data Analyst & Data Scientist.
