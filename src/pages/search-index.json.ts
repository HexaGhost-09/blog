import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const index = posts.map((post) => ({
    slug: post.id,
    title: post.data.title,
    description: post.data.description ?? '',
    tags: post.data.tags,
    date: post.data.pubDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    content: post.body ?? '',
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
};

export const prerender = true;
