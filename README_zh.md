# Ying - 基于 Astro 的现代博客

一个使用 Astro 框架构建的现代化、高性能、响应式博客。

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![License](https://img.shields.io/github/license/ertu426/ying-astro-theme.svg?style=flat-square)](https://github.com/ertu426/ying-astro-theme/blob/main/LICENSE)

[英文](README.md) | [简体中文](README_zh.md)

## ✨ 特性

- 🚀 **高性能**: 使用 Astro 的静态站点生成技术，提供最佳的加载速度
- 📝 **Markdown 和 MDX 支持**: 使用 Markdown 或 MDX 格式编写内容
- 🎨 **UnoCSS 集成**: 基于工具类的 CSS 框架，简化样式开发
- 🌓 **深色模式**: 支持明暗主题切换
- 📱 **响应式设计**: 在所有设备上都能完美展示
- 📊 **代码高亮**: 使用 Prism 实现精美的语法高亮
- 📄 **RSS 订阅**: 自动生成 RSS 订阅源
- 🗺️ **站点地图**: 生成站点地图，提升 SEO 效果
- 📑 **分页功能**: 博客文章列表支持分页
- 🔗 **智能链接**: 自动为标题添加锚点链接
- 📷 **图片支持**: 优化的图片处理方案
- 🎯 **SEO 友好**: 内置 SEO 最佳实践

## 📁 项目结构

```text
/
├── public/          # 静态资源（图片、字体等）
├── src/
│   ├── assets/      # 项目资源
│   ├── components/  # Astro 组件
│   ├── content/     # Markdown/MDX 内容（博客文章）
│   ├── layouts/     # 页面布局
│   ├── pages/       # 路由页面
│   ├── styles/      # 全局样式
│   └── utils/       # 工具函数
├── astro.config.mjs # Astro 配置
├── package.json     # 依赖管理
├── README.md        # 项目文档
├── tsconfig.json    # TypeScript 配置
└── uno.config.ts    # UnoCSS 配置
```

## 🚀 快速开始

### 前置条件

- Node.js (v18 或更高版本)
- pnpm (推荐使用)

### 安装步骤

1. 安装依赖：

```bash
pnpm install
```

2. 启动开发服务器：

```bash
pnpm dev
```

3. 在浏览器中打开 `http://localhost:4321`

## 🧞 命令

所有命令都在项目根目录下运行：

| 命令                     | 操作说明                                         |
| :---------------------- | :----------------------------------------------- |
| `pnpm install`          | 安装依赖                                         |
| `pnpm dev`              | 启动本地开发服务器，地址为 `localhost:4321`      |
| `pnpm build`            | 构建生产版本到 `./dist/` 目录                    |
| `pnpm preview`          | 本地预览生产构建版本                             |
| `pnpm astro ...`        | 运行 Astro CLI 命令，如 `astro add`, `astro check` |
| `pnpm astro -- --help`  | 获取 Astro CLI 的帮助信息                        |

## 🛠️ 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- [UnoCSS](https://unocss.dev/) - 基于工具类的 CSS 框架
- [MDX](https://mdxjs.com/) - 支持 JSX 的 Markdown
- [Prism](https://prismjs.com/) - 代码语法高亮库
- [Remixicon](https://remixicon.com/) - 图标库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript

## 📝 编写博客文章

博客文章位于 `src/content/blog/` 目录中。您可以使用 Markdown (`.md`) 或 MDX (`.mdx`) 格式创建新文章。

文章示例结构：

```markdown
---
title: "我的第一篇博客文章"
date: "2023-01-01"
description: "文章的简短描述"
---

# 我的第一篇博客文章

内容写在这里...
```

## 🎨 自定义

### 主题

主题使用 UnoCSS 进行样式设计。您可以通过修改 `uno.config.ts` 文件来自定义主题。

### 配置

项目配置文件：
- `astro.config.mjs` - Astro 框架配置
- `tsconfig.json` - TypeScript 配置
- `uno.config.ts` - UnoCSS 配置

## 📄 许可证

本项目是开源的，采用 [MIT 许可证](LICENSE)。

## 🤝 贡献

欢迎贡献代码！请随时提交 Pull Request。

## 👨‍💻 作者

使用 Astro 用心创建

## 📞 联系

如有问题或反馈，请在 GitHub 上提交 issue。