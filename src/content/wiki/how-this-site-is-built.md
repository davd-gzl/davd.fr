---
title: "How this site is built"
summary: "The architecture of davd.fr — Astro content collections, zero-JS static output, and add-a-file publishing."
category: "Meta"
tags: ["astro", "static-site", "architecture"]
created: 2026-07-10
updated: 2026-07-10
---

This site is deliberately boring in the best way: a static site generator, Markdown
content, and a CI job that publishes it. Here's the shape of it.

## The stack

- **Astro** — builds Markdown + components into static HTML with no client-side
  framework. Pages ship ~0 KB of JavaScript.
- **Content Collections** — each project and wiki note is a Markdown file with typed
  frontmatter. A schema validates them at build time, so a typo fails the build
  instead of shipping a broken page.
- **Plain CSS** — one stylesheet with design tokens (custom properties) drives the
  light/dark theme.

## Publishing is "add a file"

To add a note like this one, I create a Markdown file under `src/content/wiki/`:

```markdown
---
title: "My note"
summary: "One line shown on the index."
category: "Development"
created: 2026-07-10
---

Body in Markdown.
```

That's it — no template edits. The same is true for projects. This is the single most
important design rule: **content over code**.

## Deployment

A GitHub Actions workflow runs `astro build` and publishes the output to GitHub Pages,
served from `davd.fr`. If you want the details, see
[deploying a static site to GitHub Pages](/wiki/deploy-static-site-github-pages).
