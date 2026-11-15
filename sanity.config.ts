import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

const projectId = process.env.SANITY_PROJECT_ID || 'replace-with-project-id';
const dataset = process.env.SANITY_DATASET || 'production';

export default defineConfig({
  name: 'hexaghost-blog',
  title: 'HexaGhost Blog',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: 'post',
        title: 'Blog post',
        type: 'document',
        fields: [
          { name: 'title', title: 'Title', type: 'string', validation: (Rule:any) => Rule.required() },
          { name: 'slug', title: 'URL slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule:any) => Rule.required() },
          { name: 'description', title: 'Description', type: 'text', rows: 3 },
          { name: 'author', title: 'Author', type: 'string', initialValue: 'HexaGhost' },
          { name: 'publishedAt', title: 'Publication date', type: 'datetime', initialValue: () => new Date().toISOString() },
          { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
          { name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alternative text', type: 'string' }] },
          { name: 'body', title: 'Post content', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alternative text', type: 'string' }] }] },
        ],
        preview: { select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' } },
      },
    ],
  },
});
