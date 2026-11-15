import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';

const isGitHubPagesBuild = process.env.PAGES_BUILD === 'true';

export default defineConfig({
  site: isGitHubPagesBuild
    ? 'https://hexaghost-09.pntr.dev'
    : 'https://blog666666666667777777777.vercel.app',

  output: isGitHubPagesBuild ? 'static' : 'server',

  adapter: isGitHubPagesBuild ? undefined : vercel(),

  integrations: [
    react(),
    markdoc(),

    sanity({
      projectId: 'k4jysu6x',
      dataset: 'production',
      apiVersion: '2026-03-01',
      useCdn: isGitHubPagesBuild,
      studioBasePath: '/admin',
    }),
  ],
});
