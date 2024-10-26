// @ts-check
import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import { transformerNotationHighlight } from "@shikijs/transformers";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), react(), tailwind()],

  markdown: {
    shikiConfig: {
      themes: {
        light: "dracula",
        dark: "everforest-light",
      },
      transformers: [transformerNotationHighlight()],
    },
  },

  env: {
    schema: {
      DB_URL: envField.string({ context: "server", access: "secret" }),
      REDIS_URL: envField.string({ context: "server", access: "secret" }),
      REDIS_TOKEN: envField.string({ context: "server", access: "secret" }),
    },
  },

  output: "static",
  adapter: vercel(),
});
