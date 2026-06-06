Local usage

- `npm install`
- `npm run dev` — open http://localhost:3000

How to test features

- Visit the home page, view sample jobs.
- Post a job using the form; it will appear at top of list.

Testing in CI

- The GitHub Actions workflow runs `npm ci` and `npm run build`.
- Deployment to Vercel requires secrets as described in docs/DEPLOY.md
