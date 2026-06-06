Job Board — Features

- List jobs: The home page fetches from `/api/jobs` and lists postings.
- Post jobs: Simple form allows posting a job (title, company, location, description).
- In-memory API: The API stores jobs in module-scoped memory for demo purposes.
- CI/CD: GitHub Actions workflow builds and deploys to Vercel using secrets.

UX notes

- Simple, mobile-friendly layout
- Fast listing and post flow

Limitations

- No persistent DB (demo only). For production, connect a database or use Vercel Postgres.
- No authentication; anyone with the form can post.
