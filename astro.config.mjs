// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Canonical URLs, sitemap and OG all derive from this.
  // TODO: swap for the real domain before launch.
  site: 'https://tobiasrosa.dev',

  // Static output. The contact form is a mailto: handoff, so nothing
  // on this site needs a server — no adapter, no SSR.
  output: 'static',

  integrations: [
    // Kept installed for the future three.js island; nothing on `/`
    // is a React island today, so the React runtime never ships.
    react(),
    sitemap(),
    // Inlines Lucide SVGs at build. Replaces the DS readme's unpkg
    // UMD script, which was a render-blocking third-party request.
    icon({ include: { lucide: ['arrow-up-right'] } }),
  ],

  build: {
    // The stylesheet is the page's only render-blocking request, and at
    // ~7 KB gzipped it is cheaper inline than as a round trip.
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
