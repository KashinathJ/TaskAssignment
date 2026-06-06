Job Board — Minimal Next.js demo (Task folder)

This repository contains a minimal job board. The main application lives in the `Task` subfolder. Use the instructions below to run locally, push updates, and deploy via GitHub Actions to Vercel.

Quick start

```bash
# from repository root
cd Task
npm install
npm run dev
```

Open http://localhost:3000

Push & deploy

- Commit and push changes from the repository root (recommended):

```bash
git add Task
git commit -m "feat(Task): your message"
git push origin main
```

- The CI workflow `.github/workflows/deploy.yml` is configured to build and deploy the `Task` folder to Vercel on pushes to `main`.

- Add GitHub Actions secret `VERCEL_TOKEN` (see `Task/README.md` and `docs/DEPLOY.md` for details).

See `Task/README.md` for full developer and deployment instructions specific to the app.
