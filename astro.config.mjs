import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import preact from "@astrojs/preact";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), db(), preact({
    compat: true
  })],
  // site: 'http://mybusinessapp.com.co/',
  // server: {
  //   port: 3001
  // },
  adapter: node({
    mode: "standalone"
  })
});