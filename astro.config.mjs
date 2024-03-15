import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), db()],
  site: 'http://mybusinesapp.com/',
  server: { port: 3001 }
});