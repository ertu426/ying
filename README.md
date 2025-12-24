# Ying - Modern Blog with Astro

A modern, fast, and responsive blog built with Astro framework.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![License](https://img.shields.io/github/license/ertu426/ying-astro-theme.svg?style=flat-square)](https://github.com/ertu426/ying-astro-theme/blob/main/LICENSE)

[英文](README.md) | [简体中文](README_zh.md)


## ✨ Features

- 🚀 **Fast Performance**: Built with Astro's static site generation for optimal speed
- � **Markdown & MDX Support**: Write content in Markdown or MDX format
- 🎨 **UnoCSS Integration**: Utility-first CSS framework for easy styling
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Works seamlessly on all devices
- 📊 **Code Highlighting**: Beautiful syntax highlighting with Prism
- � **RSS Feed**: Automatic RSS feed generation
- 🗺️ **Sitemap**: Generate sitemap for better SEO
- 📑 **Pagination**: Paginated blog post lists
- 🔗 **Smart Links**: Automatic heading anchors
- 📷 **Image Support**: Optimized image handling
- 🎯 **SEO Friendly**: Built-in SEO best practices

## 📁 Project Structure

```text
/
├── public/          # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/      # Project assets
│   ├── components/  # Astro components
│   ├── content/     # Markdown/MDX content (blog posts)
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route pages
│   ├── styles/      # Global styles
│   └── utils/       # Utility functions
├── astro.config.mjs # Astro configuration
├── package.json     # Dependencies
├── README.md        # Project documentation
├── tsconfig.json    # TypeScript configuration
└── uno.config.ts    # UnoCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (recommended)

### Installation

1. Install dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm dev
```

3. Open your browser and navigate to `http://localhost:4321`

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |

## �️ Built With

- [Astro](https://astro.build/) - Static site generator
- [UnoCSS](https://unocss.dev/) - Utility-first CSS framework
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [Prism](https://prismjs.com/) - Code syntax highlighting
- [Remixicon](https://remixicon.com/) - Icon library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## 📝 Writing Blog Posts

Blog posts are located in the `src/content/blog/` directory. You can create new posts using Markdown (`.md`) or MDX (`.mdx`) format.

Example post structure:

```markdown
---
title: "My First Blog Post"
date: "2023-01-01"
description: "A short description of the post"
---

# My First Blog Post

Content goes here...
```

## 🎨 Customization

### Theme

The theme uses UnoCSS for styling. You can customize the theme by modifying the `uno.config.ts` file.

### Configuration

Project configuration can be found in:
- `astro.config.mjs` - Astro framework configuration
- `tsconfig.json` - TypeScript configuration
- `uno.config.ts` - UnoCSS configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## 👨‍💻 Author

Created with ❤️ using Astro

## 📞 Contact

For questions or feedback, please open an issue on GitHub.
