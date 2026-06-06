# TalentFlow — Modern Job Board MVP

A production-ready job board built with Next.js 14, TypeScript, Tailwind CSS, and Shadcn/ui. Browse curated tech jobs, apply instantly, or post new listings — all with a clean, scannable interface optimized for mobile and desktop.

**Live Demo:** _Add your Vercel deployment URL here_

**Repository:** _Add your GitHub repository URL here_

---

## Features Checklist

### UX & Design
- [x] Clean, modern dashboard UI with clear typographical hierarchy
- [x] Hero section with gradient background and illustration placeholder
- [x] Intuitive search bar (filter by title, location, job type)
- [x] Featured Jobs grid with visual distinction
- [x] Distinct structural containers with `border-slate-200` borders
- [x] Loading skeletons for job cards during data fetch
- [x] Disabled button states during form submission
- [x] Success/error toast notifications
- [x] Fully responsive design (mobile-first → desktop grid)
- [x] Sticky header with navigation and CTA

### Job Seeker Flow
- [x] Browse jobs with scannable tags (Full-time, Remote, salary range)
- [x] Filter jobs by title/company, location/work mode, and type
- [x] Detailed job description page with Markdown rendering
- [x] Quick Apply modal with form validation (Name, Email, Resume Link, Cover Letter)
- [x] Application success state with confirmation UI
- [x] Job not-found handling

### Employer Flow
- [x] Post a Job form with real-time Zod validation
- [x] Fields: Company Name, Logo URL, Job Title, Category, Location, Salary Range, Description
- [x] Job type and work mode selectors
- [x] Success state with link to view published listing
- [x] Posted jobs persist in browser localStorage

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Shadcn/ui (Radix UI) |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Markdown | react-markdown |
| Data | Mock data + localStorage persistence |
| CI/CD | GitHub Actions |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20 LTS)
- npm or yarn

### Environment Variables

This MVP uses mock data and localStorage — no backend credentials are required for local development. For production deployment, no environment variables are strictly needed.

Optional (for future Supabase integration):

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd job-board

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Architecture Overview

```
├── app/
│   ├── globals.css          # Global styles + CSS variables
│   ├── layout.tsx           # Root layout with header & toaster
│   ├── page.tsx             # Landing page (hero + search + jobs)
│   └── jobs/
│       ├── [id]/page.tsx    # Job detail + apply modal
│       └── post/page.tsx    # Employer post job form
├── components/
│   ├── ui/                  # Shadcn-style primitives
│   ├── apply-modal.tsx      # Quick apply dialog
│   ├── header.tsx           # Site navigation
│   ├── hero.tsx             # Landing hero section
│   ├── job-card.tsx         # Job listing card
│   ├── job-card-skeleton.tsx
│   └── search-bar.tsx       # Filter controls
├── hooks/
│   └── use-toast.ts         # Toast notification hook
├── lib/
│   ├── data.ts              # Mock job data (7 listings)
│   ├── job-store.ts         # localStorage persistence layer
│   └── utils.ts             # Utility helpers
├── types.ts                 # TypeScript interfaces
└── .github/workflows/
    └── deploy.yml           # CI/CD pipeline
```

### Design Choices

1. **Client-side persistence** — Posted jobs are stored in `localStorage` for instant MVP functionality without a database. Mock data seeds the initial state.
2. **Component composition** — Shadcn/ui primitives provide accessible, consistent UI building blocks.
3. **Form validation** — Zod schemas enforce data integrity on both apply and post flows.
4. **Loading states** — Simulated delays with skeleton loaders create polished perceived performance.

---

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on:

- **Push to `main`** — Lint, build, and deploy to Vercel
- **Pull requests to `main`** — Lint and build only (no deploy)

### Pipeline Steps

1. Checkout code
2. Setup Node.js 20 with npm caching
3. Install dependencies (`npm ci`)
4. Run ESLint (`npm run lint`)
5. Build application (`npm run build`)
6. Deploy to Vercel (push to main only)

### Required GitHub Secrets

| Secret | Description |
|--------|-------------|
| `VERCEL_TOKEN` | Vercel API token from [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Organization ID from `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Project ID from `.vercel/project.json` |

---

## Vercel Deployment Guide

### Option A: Vercel Dashboard (Recommended for first deploy)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install`
5. Click **Deploy**

### Option B: GitHub Actions (Automated CI/CD)

1. Create a Vercel project linked to your repo (Option A)
2. Install Vercel CLI locally: `npm i -g vercel`
3. Run `vercel link` to generate `.vercel/project.json`
4. Copy `orgId` and `projectId` from `.vercel/project.json`
5. Create a Vercel token at [vercel.com/account/tokens](https://vercel.com/account/tokens)
6. Add secrets to GitHub: **Settings → Secrets and variables → Actions**
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
7. Push to `main` — the pipeline deploys automatically

### Environment Variables on Vercel

No environment variables are required for the current MVP. If you add Supabase later, configure them under **Project Settings → Environment Variables**.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, search filters, and job listings |
| `/jobs/[id]` | Job detail with Markdown description and Quick Apply |
| `/jobs/post` | Employer form to publish a new job listing |

---

## License

MIT
