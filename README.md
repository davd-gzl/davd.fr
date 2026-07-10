# davd.fr

My personal website — a portfolio of projects, a personal wiki, and a short intro to
who I am. Built to be **simple, fast, and easy to maintain**: static HTML, Markdown
content, zero client-side JavaScript by default.

Live at **[davd.fr](https://davd.fr)**.

## Stack

- **[Astro](https://astro.build)** — static site generator (ships ~0 KB of JS).
- **Content Collections** — projects and wiki notes are Markdown files with typed,
  schema-validated frontmatter. Bad content fails the build, not the page.
- **Hand-written CSS** with design tokens — light/dark theme (auto + manual
  toggle), no framework.
- **RSS feed** at `/rss.xml`, a social **OG image**, sitemap, and SEO metadata.
- **GitHub Actions → GitHub Pages** — build and deploy on every push to `main`.

Built spec-first with **[Spec Kit](https://github.com/github/spec-kit)**; the specs
live in [`specs/001-personal-site/`](specs/001-personal-site/) and the project
principles in [`.specify/memory/constitution.md`](.specify/memory/constitution.md).

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output to ./dist (also validates all content)
npm run preview    # serve the built site
npm run check      # type-check .astro files
```

`npm run build` is the quality gate — it validates every content file against its
schema. If it fails, the site is not deployable.

## Add content

Publishing is "add a Markdown file, push" — no code changes.

### A project → `src/content/projects/<slug>.md`

```markdown
---
title: "My Project"
summary: "One-line description."
tags: ["typescript", "astro"]
repo: "https://github.com/davd-gzl/my-project"
url: "https://my-project.example.com"
date: 2026-06-01
featured: true
---

Full write-up in Markdown.
```

### A wiki note → `src/content/wiki/<slug>.md`

```markdown
---
title: "How I do X"
summary: "Short summary shown on the wiki index."
category: "DevOps"
tags: ["docker"]
created: 2026-07-01
updated: 2026-07-10
---

Your note in Markdown. Link to another note: [other note](/wiki/other-note).
```

Set `draft: true` to keep something out of production while you work on it.

The full field reference is in
[`specs/001-personal-site/contracts/content-schema.md`](specs/001-personal-site/contracts/content-schema.md).

## Edit "who I am"

Your name, headline, bio, social links, and navigation all live in
[`src/config/site.ts`](src/config/site.ts). The home page and footer read from it.

## Project structure

```text
public/            Static assets (favicon, robots.txt, CNAME → davd.fr)
src/
├─ config/site.ts        Site profile (name, bio, socials, nav)
├─ content/              Markdown content
│  ├─ projects/          One .md per project
│  └─ wiki/              One .md per wiki note
├─ content.config.ts     Content schemas (the contract)
├─ components/           BaseHead, Header, Footer, cards
├─ layouts/              BaseLayout, ProseLayout
├─ pages/                Home, projects, wiki, 404
└─ styles/global.css     Design tokens + styles
.github/workflows/       CI: build + deploy to GitHub Pages
specs/                   Spec Kit spec / plan / tasks
```

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages.

**One-time setup:**

1. **Settings → Pages → Source = GitHub Actions**.
2. Point `davd.fr` DNS at GitHub Pages (apex `A`/`AAAA` records, or a `www` `CNAME`).
   The custom domain is declared in [`public/CNAME`](public/CNAME).
3. Enable **Enforce HTTPS** once the certificate is issued.

## License

Content © David. Code is free to reuse.
