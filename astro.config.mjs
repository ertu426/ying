// @ts-check
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeFormat from 'rehype-format'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xiati.cc',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap(),
    UnoCSS({
      injectReset: true,
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkGfm,
      remarkBreaks,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeRaw,
      rehypeFormat,
      rehypeSanitize,
      rehypeHighlight,
      rehypeAutolinkHeadings,
    ],
    syntaxHighlight: 'prism',
  },
  experimental: {
    fonts: [{
      name: 'ZouLDFXKAJ',
      cssVariable: '--font-zouldfxkaj',
      provider: 'local',
      variants: [
        {
          weight: 400,
          style: 'normal',
          src: [
            // './src/assets/fonts/ZouLDFXKAJ/ZouLDFXKAJ.eot',
            // './src/assets/fonts/ZouLDFXKAJ/ZouLDFXKAJ.svg',
            './src/assets/fonts/ZouLDFXKAJ/ZouLDFXKAJ.ttf',
            './src/assets/fonts/ZouLDFXKAJ/ZouLDFXKAJ.woff',
            './src/assets/fonts/ZouLDFXKAJ/ZouLDFXKAJ.woff2',
          ],
        },
      ],
    }],
  },
})
