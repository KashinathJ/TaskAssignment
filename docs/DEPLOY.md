Deploying to Vercel (CI-driven)

1. Create a repository on GitHub and push this code.

2. In your repository settings -> Secrets -> Actions, add:
   - `VERCEL_TOKEN` (a personal token from Vercel)
   - `VERCEL_ORG_ID` (from your Vercel project settings)
   - `VERCEL_PROJECT_ID` (from your Vercel project settings)

3. Link the GitHub repo to Vercel (optional) or allow the workflow to deploy using the token.

4. Push to `main` branch to trigger the GitHub Actions workflow; the action will build and run the Vercel deploy.

Notes on tokens

- Create a personal token in Vercel at https://vercel.com/account/tokens
- Get `ORG_ID` and `PROJECT_ID` from your Vercel project settings under "General" -> "Project ID" and "Settings".
