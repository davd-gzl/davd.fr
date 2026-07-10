# Quickstart: davd.fr

## Prerequisites

- Node.js 20+ (repo developed on Node 22)
- npm

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build & preview production output

```bash
npm run build      # outputs static site to ./dist, validates all content
npm run preview    # serve ./dist locally
```

`npm run build` is the quality gate: it type-checks and validates every content file
against its schema. If it fails, the site is not deployable.

## Add a project

Create `src/content/projects/my-project.md`:

```markdown
---
title: "My Project"
summary: "A one-line description."
tags: ["typescript", "astro"]
repo: "https://github.com/davd-gzl/my-project"
url: "https://my-project.example.com"
date: 2026-06-01
featured: true
---

Write the full story here in Markdown — what it does, why you built it, what you
learned.
```

Save, `npm run build`, commit, push. The project page and card appear automatically.

## Add a wiki note

Create `src/content/wiki/my-note.md`:

```markdown
---
title: "How I do X"
summary: "Short summary shown on the wiki index."
category: "DevOps"
tags: ["docker"]
created: 2026-07-01
updated: 2026-07-10
---

Your note in Markdown. Link to another note with a relative link like
[other note](/wiki/other-note).
```

## Edit "who I am"

Edit `src/config/site.ts` — name, headline, bio paragraphs, social links, and nav all
live there. The home page and footer read from it.

## Deploy

Push to the default branch. The GitHub Actions workflow (`.github/workflows/deploy.yml`)
builds the site and deploys it to GitHub Pages, served at `davd.fr`.

**One-time setup (in GitHub repo settings):**
1. Settings → Pages → Build and deployment → Source = **GitHub Actions**.
2. Point DNS for `davd.fr` at GitHub Pages (A/AAAA records for the apex, or a CNAME for
   `www`). `public/CNAME` already declares the custom domain.
3. Enable "Enforce HTTPS" once the certificate is issued.
