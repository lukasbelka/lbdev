import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
    theme: 'dark-plus',
    // Enable word wrap to prevent horizontal scrolling
    wrap: true,
  }},
  site: 'https://example.com',
  integrations: [mdx(),
    sitemap(),
    tailwind({
      // Disable injecting a basic `base.css` import on every page.
      config: { applyBaseStyles: false },
    })],
},
  );