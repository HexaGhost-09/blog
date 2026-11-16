import type { APIRoute } from 'astro';
import { sanity, postQuery } from '../lib/sanity';

export const prerender = true;

export const GET: APIRoute = async () => {
  const site = (import.meta.env.SITE || 'https://hexaghost-09.pntr.dev').replace(/\/$/, '');
  const posts = await sanity.fetch(postQuery);
  const tags = [...new Set(posts.flatMap((post: { tags?: string[] }) => post.tags || []))];
  const topicSlugs = tags.map((tag) =>
    tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  ).filter(Boolean);

  const urls = [
    `${site}/`,
    `${site}/portfolio/`,
    `${site}/blog/`,
    `${site}/blog/topics/`,
    ...topicSlugs.map((slug) => `${site}/blog/topics/${slug}/`),
    ...posts.map((post: { slug: string }) => `${site}/blog/${encodeURIComponent(post.slug)}/`),
  ];

  const uniqueUrls = [...new Set(urls)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
