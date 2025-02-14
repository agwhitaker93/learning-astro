// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

import webVitals from '@astrojs/web-vitals';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  //output: 'server',
  integrations: [react(), webVitals(), db()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare(),

vite: {
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
  },
});