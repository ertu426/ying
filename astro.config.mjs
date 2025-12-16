// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    site: 'http://localhost:4321',
    integrations: [
        mdx(), 
        sitemap(),
        UnoCSS({
            injectReset: true
        }),
    ],
});
