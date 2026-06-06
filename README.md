Job Board — Minimal Next.js demo

This repository is a minimal job board built for a demo of UX, CI/CD, and Vercel deployment.

Quick setup

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

How to push & deploy

- Create a GitHub repo, add remote and push `main` branch.
- Add GitHub Secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
- The included GitHub Actions workflow will deploy to Vercel on pushes to `main`.

See docs/DEPLOY.md for details.
