import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://www.mybusinessapp.com.com',
  integrations: [tailwind(), db(), preact({
    compat: true
  })],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});