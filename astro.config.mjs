// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeFormat from "rehype-format";
import rehypeSanitize from "rehype-sanitize";
import remarkBreaks from "remark-breaks";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [
    mdx(),
    sitemap(),
    UnoCSS({
      injectReset: true,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      rehypeRaw,
      rehypeFormat,
      rehypeSanitize,
      rehypeHighlight,
      rehypeAutolinkHeadings,
    ],
    syntaxHighlight: "prism",
  },
});
