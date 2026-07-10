// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served from the custom domain davd.fr (GitHub Pages + CNAME).
// Because it's an apex custom domain, the site lives at the root — no `base` prefix.
export default defineConfig({
  site: 'https://davd.fr',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // Light/dark aware code highlighting; no client JS needed.
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
});
