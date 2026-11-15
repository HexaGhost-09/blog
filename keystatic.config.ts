import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'HexaGhost-09/blog',
  },
  collections: {
    blog: collection({
      label: 'Blog posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        author: fields.text({ label: 'Author', defaultValue: 'HexaGhost' }),
        pubDate: fields.date({ label: 'Publication date' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value || 'Tag',
        }),
        draft: fields.checkbox({ label: 'Save as draft' }),
        image: fields.object({
          src: fields.image({
            label: 'Cover image',
            directory: 'public/images',
            publicPath: '/images/',
          }),
          alt: fields.text({ label: 'Image description' }),
        }, {
          label: 'Cover image',
          description: 'Optional image shown at the top of the post.',
        }),
        content: fields.markdoc({
          label: 'Post content',
          extension: 'md',
        }),
      },
    }),
  },
});
