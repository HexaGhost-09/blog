import { createClient } from '@sanity/client';
import matter from 'gray-matter';
import { readFile, readdir } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';

const token = process.env.SANITY_API_TOKEN;
if (!token) throw new Error('Missing SANITY_API_TOKEN environment variable.');

const client = createClient({
  projectId: 'k4jysu6x',
  dataset: 'production',
  apiVersion: '2026-03-01',
  token,
  useCdn: false,
});

const directory = 'src/content/blog';
const files = (await readdir(directory)).filter((file) => file.endsWith('.md'));
for (const file of files) {
  const sourcePath = path.join(directory, file);
  const raw = await readFile(sourcePath, 'utf8');
  const { data, content } = matter(raw);
  const slug = file.replace(/\.md$/, '');
  let coverImage;
  if (data.image?.src && !/^https?:\/\//.test(data.image.src)) {
    const imagePath = path.join('public', data.image.src.replace(/^\/+/, ''));
    const imageAsset = await client.assets.upload('image', createReadStream(imagePath), { filename: path.basename(imagePath) });
    coverImage = { _type: 'image', asset: { _type: 'reference', _ref: imageAsset._id }, alt: data.image.alt || '' };
  }
  const document = {
    _id: `post.${slug}`,
    _type: 'post',
    title: data.title,
    slug: { _type: 'slug', current: slug },
    description: data.description || '',
    author: data.author || 'HexaGhost',
    publishedAt: new Date(data.pubDate).toISOString(),
    tags: data.tags || [],
    draft: Boolean(data.draft),
    ...(coverImage ? { coverImage } : {}),
    bodyMarkdown: content.trim(),
  };
  await client.createOrReplace(document);
  console.log(`Imported: ${data.title}`);
}
console.log(`Done. Imported ${files.length} posts.`);
