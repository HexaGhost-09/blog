import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'hexaghost-blog',
  title: 'HexaGhost Blog',
  projectId: 'k4jysu6x',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [{
      name: 'post', title: 'Blog post', type: 'document',
      fields: [
        { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
        { name: 'slug', title: 'URL slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule: any) => Rule.required() },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
        { name: 'author', title: 'Author', type: 'string', initialValue: 'HexaGhost' },
        { name: 'publishedAt', title: 'Publication date', type: 'datetime', initialValue: () => new Date().toISOString() },
        { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
        { name: 'draft', title: 'Draft', type: 'boolean', initialValue: false },
        { name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true }, validation: (Rule: any) => Rule.required(), fields: [{ name: 'alt', title: 'Alternative text', type: 'string' }] },
        { name: 'bodyMarkdown', title: 'Post content (Markdown)', type: 'text', rows: 24, validation: (Rule: any) => Rule.required() },
      ],
    }],
  },
});
