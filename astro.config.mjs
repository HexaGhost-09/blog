import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  // GitHub Pages stays a static build. Vercel runs the server routes required
  // by Keystatic's GitHub OAuth and content editor.
  site: 'https://blog666666666667777777777.vercel.app',
  base: '/',
  output: isGitHubPagesBuild ? 'static' : 'server',
  adapter: isGitHubPagesBuild ? undefined : vercel(),
  integrations: [
    react(),
    markdoc(),
    ...(!isGitHubPagesBuild ? [keystatic()] : []),
  ],
});
