import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const site = (import.meta.env.SITE || 'https://hexaghost-09.pntr.dev').replace(/\/$/, '');
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin/',
    `Sitemap: ${site}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
