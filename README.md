# HexaGhost Blog

Astro blog deployed on Vercel and GitHub Pages. Sanity is the planned content backend and editor.

## Run locally

```bash
npm install
npm run dev
npm run build
```

## Sanity CMS setup

The Keystatic integration has been removed. The Sanity integration is prepared, with the embedded Studio route at `/admin`.

1. Create a free Sanity project at https://www.sanity.io/manage.
2. Create a dataset named `production` (public dataset is suitable for public blog content).
3. Copy the Project ID from the project overview.
4. Add `SANITY_PROJECT_ID` and `SANITY_DATASET=production` to Vercel → Project → Settings → Environment Variables.
5. Add the same values to a local `.env` file for local development.
6. Redeploy Vercel. The editor will be available at `https://YOUR-DOMAIN/admin`.

Sanity Studio uses your Sanity account login. No GitHub App, GitHub OAuth client secret, or Keystatic secret is required.

The existing Markdown posts remain in `src/content/blog/` for now. They are intentionally preserved; the next migration step is to import them into the Sanity dataset and switch the Astro pages to read from Sanity.

## Deployment

- Vercel: server output with the Vercel adapter; Sanity Studio is mounted at `/admin` once `SANITY_PROJECT_ID` is configured.
- GitHub Pages: static build remains available.
