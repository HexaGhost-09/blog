import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: 'k4jysu6x',
  dataset: 'production',
  apiVersion: '2026-03-01',
  useCdn: true,
});

export const postQuery = `*[_type == "post" && defined(slug.current) && !draft] | order(publishedAt desc) {
  _id, title, "slug": slug.current, description, author, publishedAt, tags,
  "coverUrl": coverImage.asset->url, "coverAlt": coverImage.alt, bodyMarkdown
}`;
