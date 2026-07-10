---
title: "davd.fr — this website"
summary: "My personal site: portfolio, wiki, and a short intro — built to be simple, fast, and easy to maintain."
tags: ["astro", "typescript", "static-site", "github-pages"]
repo: "https://github.com/davd-gzl/davd.fr"
url: "https://davd.fr"
date: 2026-07-10
featured: true
---

This is the site you're reading right now. I built it to have one place that is
entirely mine: a home for my projects, a personal wiki, and a short introduction to
who I am.

## Why I built it

I wanted something I fully own and that will still work in ten years — no CMS to keep
running, no database, no lock-in. Just Markdown files in a Git repository that build
into plain, fast HTML.

## How it works

- **Astro** generates static HTML with essentially zero client-side JavaScript.
- **Content Collections** turn Markdown files into typed, validated content. Adding a
  project or a wiki note is literally "drop a Markdown file, push."
- **Hand-written CSS** with design tokens gives a consistent light/dark theme without
  a heavy framework.
- **GitHub Actions** builds and deploys to GitHub Pages on every push, served from the
  `davd.fr` domain.

## Design principles

The whole thing is governed by a short "constitution": content over code, static by
default, and keep it simple. If publishing a new note ever requires editing code, the
design has failed.

If you're curious how a specific part works, I've written it up in the
[wiki](/wiki) — start with
[how this site is built](/wiki/how-this-site-is-built).
