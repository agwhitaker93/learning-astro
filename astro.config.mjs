// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import db from "@astrojs/db";
import webVitals from "@astrojs/web-vitals";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/web-vitals": "/web-vitals/fcp",
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
  },

  integrations: [react(), db(), webVitals()],
});
