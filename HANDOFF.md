# CareLog Landing Page - Handoff Document

## Project Overview
CareLog is a WhatsApp-based health companion that helps users track symptoms and generate doctor-ready summaries. This landing page serves as the entry point for users to start using CareLog via WhatsApp.

**Live URL:** https://start.vivebien.io

## Tech Stack
- **Framework:** Next.js 14.2 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Easypanel (Docker)
- **Hosting:** Self-hosted on 85.209.95.19

## Key Features
- ✅ Bilingual support (English/Spanish) with language toggle
- ✅ WhatsApp CTA buttons that open WhatsApp with pre-filled message
- ✅ Scroll-driven animations in GreenStory section
- ✅ Button hover/tap animations (scale effects)
- ✅ Mobile-first responsive design (max-width: 420px)

---

## Project Structure

```
Intro_Landing_Page/
├── app/
│   ├── globals.css      # Global styles, animations
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main page component
│   └── providers.tsx    # Context providers wrapper
├── components/
│   ├── Header.tsx       # Sticky header with logo, lang toggle, CTA
│   ├── Hero.tsx         # Main hero section with privacy banner
│   ├── GreenStory.tsx   # Scroll-animated section (3 steps)
│   ├── BenefitsCards.tsx # Benefits cards section
│   ├── HowItWorks.tsx   # How it works steps
│   ├── DoctorSummary.tsx # Doctor summary preview
│   └── Trust.tsx        # Ready to start + Trust & Safety
├── lib/
│   ├── i18n.ts          # Translation dictionary (EN/ES)
│   └── LanguageContext.tsx # Language state management
├── public/
│   ├── carelog-logo.svg # Brand logo
│   ├── favicon.svg      # Green lock favicon
│   ├── WhatsApp.png     # WhatsApp icon
│   ├── Doctor.png       # Doctor image
│   ├── final-phone.png  # Phone mockup
│   └── woman-phone.png  # Woman with phone image
├── Dockerfile           # Multi-stage Docker build
├── next.config.mjs      # Next.js config (standalone output)
└── package.json         # Dependencies
```

---

## Language System

The app uses React Context for language management:

```tsx
// Usage in any component:
import { useLanguage } from '@/lib/LanguageContext';

const { lang, setLang, t } = useLanguage();
// lang: 'en' | 'es'
// setLang: function to change language
// t: translation object (t.header.cta, t.hero.title, etc.)
```

**To add/edit translations:** Edit `/lib/i18n.ts`

---

## WhatsApp Integration

All CTA buttons link to WhatsApp with language-aware pre-filled messages:

```tsx
href={`https://wa.me/18627775277?text=${lang === 'en' ? 'Hello' : 'Hola'}`}
```

**WhatsApp Number:** +1 862 777 5277

**CTA Locations:**
1. Header - "Start a CareLog" button
2. GreenStory - "START ON WhatsApp" button (cream colored)
3. Trust section - "START ON WhatsApp" button (brown colored)

---

## Design Tokens

```css
/* Colors */
--cream: #fbf6ee        /* Background */
--brandGreen: #2e915e   /* Primary green */
--ink: #2d2926          /* Text color */

/* Fonts */
--font-lora: Lora       /* Serif - headings */
--font-outfit: Outfit   /* Sans - body text */
```

---

## Deployment

### Easypanel Setup
- **Project:** projecto-1
- **Service:** carelog-landing
- **Port:** 3000
- **Domain:** start.vivebien.io

### Auto-Deploy Webhook
GitHub webhook triggers auto-deploy on push:
```
http://85.209.95.19:3000/api/deploy/5be038332536fbe5d23a3b20543a2775915b3aea8e7018de
```

### Manual Deploy
1. Push changes to GitHub: `git push origin main`
2. Easypanel auto-deploys via webhook
3. Or manually click "Deploy" in Easypanel dashboard

### GitHub Repository
https://github.com/jmariano19/carelog-landing

---

## DNS Configuration

**Domain:** vivebien.io (managed separately)

**CNAME Record:**
```
start → projecto-1-carelog-landing.yydhsb.easypanel.host
```

---

## Common Tasks

### Change CTA Text
Edit `/lib/i18n.ts`:
```ts
header: {
  cta: "Start a CareLog"  // English
},
// ...
header: {
  cta: "Iniciar un CareLog"  // Spanish
}
```

### Change WhatsApp Number
Search and replace `18627775277` in:
- `components/Header.tsx`
- `components/GreenStory.tsx`
- `components/Trust.tsx`

### Add New Section
1. Create component in `/components/NewSection.tsx`
2. Import and add to `/app/page.tsx`
3. Add translations to `/lib/i18n.ts` if needed

### Update Styles
- Global styles: `/app/globals.css`
- Component styles: Tailwind classes inline
- Animations: CSS keyframes in globals.css

---

## Build & Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Important Notes

1. **Case Sensitivity:** Linux (Docker) is case-sensitive. Image filenames must match exactly (e.g., `WhatsApp.png` not `whatsapp.png`)

2. **Standalone Output:** `next.config.mjs` has `output: 'standalone'` for Docker deployment

3. **Mobile-First:** Design is optimized for 420px width. Test on mobile devices.

4. **Framer Motion:** GreenStory uses scroll-driven animations. Be careful when modifying scroll offsets.

---

## Contacts

- **GitHub:** jmariano19
- **Easypanel:** projecto-1 dashboard
- **Domain:** vivebien.io DNS settings

---

---

## Auto-Deploy Pipeline (GitHub → Easypanel)

### How It Works
1. Code is pushed to `main` branch on GitHub
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) runs automatically
3. The workflow calls the Easypanel deploy webhook (stored as a GitHub secret)
4. Easypanel pulls the latest code and rebuilds the Docker container

### GitHub Actions Setup
- **Workflow file:** `.github/workflows/deploy.yml`
- **Trigger:** Push to `main` branch
- **GitHub Secret:** `EASYPANEL_DEPLOY_WEBHOOK` — contains the Easypanel deploy URL
- **Repository:** https://github.com/jmariano19/carelog-landing

### Deploy Process (for Claude)
To deploy changes, simply commit and push to `main`:
```bash
git add <files>
git commit -m "Description of changes"
git push origin main
```
The deploy happens automatically — no manual steps needed.

### GitHub CLI Access
- `gh` CLI is installed via Homebrew at `/opt/homebrew/bin/gh`
- Authenticated as **jmariano19** via `gh auth login`
- If `gh` is not in PATH, use full path: `/opt/homebrew/bin/gh`

### GitHub Push Access (for Claude)
At the start of each session, configure git to push directly:

```bash
TOKEN=$(cat .github-token)
git remote set-url origin https://jmariano19:${TOKEN}@github.com/jmariano19/carelog-landing.git
```

The token is stored in `.github-token` (gitignored, never committed). After configuring, Claude can push and deploy directly.

---

*Last updated: February 7, 2026*
