# HexaGhost Blog

An Astro blog. Posts are Markdown files in `src/content/blog/`.

## Run locally

```bash
npm install
npm run dev
npm run build
```

## Create and edit posts

The live Keystatic editor is available at `/keystatic` on the Vercel deployment.

- Sign in with the GitHub account that has write access to `HexaGhost-09/blog`.
- Create or edit posts in the **Blog posts** collection.
- Add a cover image, description, author, date, tags, and post content.
- Save changes to GitHub. Vercel automatically rebuilds the site from the updated repository.

Existing Markdown posts in `src/content/blog/` are kept in place and remain editable. Uploaded cover images are stored in `public/images/`.

### Finish the one-time GitHub login setup

1. Deploy the code to Vercel.
2. Open `https://YOUR-VERCEL-DOMAIN/keystatic`.
3. Choose **Login with GitHub** and follow Keystatic's setup flow to create a GitHub App.
4. Install that app on the `HexaGhost-09/blog` repository with **Contents: Read and write** permission.
5. Add the generated values to the Vercel project's **Settings → Environment Variables**:
   - `KEYSTATIC_GITHUB_CLIENT_ID`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`
   - `KEYSTATIC_SECRET`
   - `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
6. Redeploy the Vercel project, then open `/keystatic` and sign in.

Generate `KEYSTATIC_SECRET` as a long random secret. Never commit these credentials to GitHub.

GitHub Pages remains a static deployment; the live CMS editor and GitHub OAuth run on Vercel.

## Deployment

The Vercel deployment uses Astro's Vercel adapter for Keystatic's server-side routes. GitHub Pages builds remain static and deploy automatically from `main` using GitHub Actions.

### Add a header / cover image manually

Add an optional `image` object to a post's Markdown frontmatter:

```yaml
image:
  src: /images/my-cover.svg
  alt: A short description of the image
```

Place local images in `public/images/`. Root-relative paths such as `/images/my-cover.svg` work on both Vercel and the GitHub Pages project URL. Absolute HTTPS image URLs are also supported. Posts without an `image` field simply omit the cover.
