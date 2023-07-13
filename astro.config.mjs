import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import nodejs from '@astrojs/node';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: netlify(),
  output: "server"
});