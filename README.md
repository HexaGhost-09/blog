# HexaGhost Blog

An Astro blog. Posts are Markdown files in `src/content/blog/`.

## Run locally

```bash
npm install
npm run dev
npm run build
```

## Add a post

Create a Markdown file in `src/content/blog/` with `title`, `description`, `pubDate`, `tags`, and optional `draft` frontmatter.

## Deployment

This site is configured for GitHub Pages at https://hexaghost-09.github.io/blog/ and deploys automatically from the `main` branch using GitHub Actions.


### Add a header / cover image

Add an optional `image` object to a post's Markdown frontmatter:

```yaml
image:
  src: /images/my-cover.svg
  alt: A short description of the image
```

Place local images in `public/images/`. Root-relative paths such as `/images/my-cover.svg` work on both Vercel and the GitHub Pages project URL. Absolute HTTPS image URLs are also supported. Posts without an `image` field simply omit the cover.

The cover appears on the individual post page and as a thumbnail on the home page and blog archive.
