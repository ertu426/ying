import {
  defineConfig,
  presetIcons,
  presetWind3,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 
      'i-logo': 'i-logos-astro w-6em h-6em transform transition-800',
      'page-container': 'bg-gray-100 flex dark:!bg-gray-800/80 dark:text-gray-200 bg-white',
      'page-main': 'w-full max-w-full bg-white shadow-lg mx-auto my-0 overflow-hidden p-8 min-h-fit dark:bg-zinc-900 sm:max-w-full sm:my-0 sm:p-8 md:max-w-2xl md:my-12 md:p-8 md:rounded-lg lg:max-w-3xl lg:my-16 lg:p-12 lg:rounded-lg',
      'line': 'border-solid border-gray-100 dark:!border-gray-300/50',
      'navh': 'w-full flex my-4 justify-between flex-items-center',
      'main-menu': 'flex gap-3 items-center',
      'other-icons': 'flex items-center gap-4',
      'section-header': 'mb-5 !text-sm text-gray-400 !font-bold dark:text-gray-300',
      'article-card': 'flex gap-2.5 items-start',
      'article-img-box': 'overflow-hidden size-11 rounded-sm',
      'article-img': 'w-full h-full object-cover',
      'article-box': 'flex grow flex-col justify-between mb-5',
      'article-time': 'text-xs text-zinc-400 mb-0.5',
      'footer': 'text-right text-gray-500 text-xs mt-5 pt-5 dark:!border-gray-300/50 border-solid border-t border-gray-100',
      'footercolor': 'text-black dark:text-white'
    },
  ],
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetWind3(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})