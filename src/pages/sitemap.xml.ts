import type { APIRoute } from 'astro';
import { sanity, postQuery } from '../lib/sanity';

export const prerender = true;

export const GET: APIRoute = async () => {
  const site = (import.meta.env.SITE || 'https://hexaghost-09.pntr.dev').replace(/\/$/, '');
  const posts = await sanity.fetch(postQuery);
  const urls = [
    `${site}/`,
    `${site}/portfolio/`,
    `${site}/blog/`,
    `${site}/blog/topics/`,
    ...posts.map((post: { slug: string }) => `${site}/blog/${encodeURIComponent(post.slug)}/`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
