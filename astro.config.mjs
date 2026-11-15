import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || 'production';

export default defineConfig({
  site: 'https://blog666666666667777777777.vercel.app',
  base: '/',
  output: process.env.GITHUB_ACTIONS === 'true' ? 'static' : 'server',
  adapter: process.env.GITHUB_ACTIONS === 'true' ? undefined : vercel(),
  integrations: [
    react(),
    markdoc(),
    ...(projectId ? [sanity({
      projectId,
      dataset,
      apiVersion: '2026-03-01',
      useCdn: true,
      studioBasePath: '/admin',
    })] : []),
  ],
});
