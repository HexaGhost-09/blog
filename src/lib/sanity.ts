import { createClient } from '@sanity/client';

const isStaticPagesBuild = process.env.PAGES_BUILD === 'true';

export const sanity = createClient({
  projectId: 'k4jysu6x',
  dataset: 'production',
  apiVersion: '2026-03-01',
  // Static builds must read the published dataset directly so newly published
  // Sanity posts are included in the generated pages and aren't delayed by CDN cache.
  useCdn: !isStaticPagesBuild,
});

export const postQuery = `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id, title, "slug": slug.current, description, author, publishedAt, tags,
  "coverUrl": coverImage.asset->url, "coverAlt": coverImage.alt, bodyMarkdown
}`;
