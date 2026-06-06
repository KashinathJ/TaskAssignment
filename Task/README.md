# TalentFlow — Job Board (Task folder)

This folder contains the main job-board application used for the assessment. The app lives in the `Task` subfolder of the repository. This README explains how to run locally, update code, push changes to GitHub, and deploy via the included CI/CD pipeline.

Live demo: Add your Vercel URL here after deployment.

Repository: https://github.com/KashinathJ/TaskAssignment

---

## Quick Start (local)

Prerequisites:
- Node.js 18+ (recommended 20 LTS)
- npm

Commands:

```bash
# from repository root
cd Task
npm install
npm run dev
```

Open http://localhost:3000

---

## How to make code changes and push (Task folder)

1. Edit code in the `Task` folder (components, pages, styles).
2. Test locally:

```bash
cd Task
npm install
npm run dev
# make changes, verify in browser
```

3. Commit & push from repository root (recommended):

```bash
# at repository root
git add Task
git commit -m "feat(Task): your change description"
git push origin main
```

The CI workflow at `.github/workflows/deploy.yml` targets the `Task` folder and will run on pushes to `main`.

---

## Deploying to Vercel via GitHub Actions

1. Create a Vercel project (optional: link via Vercel dashboard).
2. Generate a personal token at https://vercel.com/account/tokens and copy the token.
3. In GitHub, go to your repository → Settings → Secrets and variables → Actions and add:
   - `VERCEL_TOKEN` (required)
   - `VERCEL_ORG_ID` (optional if using Vercel project linking)
   - `VERCEL_PROJECT_ID` (optional)
4. Push to `main` to trigger `.github/workflows/deploy.yml` which:
   - cd into `Task`
   - runs `npm ci` and `npm run build`
   - runs `vercel --prod` using the `VERCEL_TOKEN`

Notes:
- If you prefer the Vercel Git integration, you can also import the repo in the Vercel dashboard and skip setting secrets; Vercel will build on every push automatically.

---

## Useful Git commands

```bash
# stage changes
git add Task

# commit
git commit -m "fix(Task): description"

# push
git push origin main
```

---

## Where to add documentation

- Add AI-generated documentation files under `Task/docs/` or `docs/` at repo root. The CI will include them in the repo.

---

If you want, I can push an updated `Task/README.md` and `README.md` to the repository now (I will commit and push the changes). Please confirm and I'll proceed.
