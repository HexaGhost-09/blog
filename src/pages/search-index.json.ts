import type { APIRoute } from 'astro';
import { sanity, postQuery } from '../lib/sanity';

export const GET: APIRoute = async () => {
  const posts = await sanity.fetch(postQuery);
  const index = posts.map((post: any) => ({
    slug: post.slug,
    title: post.title,
    description: post.description ?? '',
    tags: post.tags ?? [],
    date: new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    content: post.bodyMarkdown ?? '',
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' },
  });
};
export const prerender = false;
