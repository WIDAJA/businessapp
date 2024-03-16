import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import preact from "@astrojs/preact";
import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), db(), preact({
    compat: true
  })],
  site: 'http://mybusinesapp.com/',
  server: {
    port: 3001
  },
  adapter: netlify()
});