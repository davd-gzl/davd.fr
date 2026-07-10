---
title: "Deploying a static site to GitHub Pages"
summary: "A minimal GitHub Actions workflow to build a static site and serve it from a custom domain."
category: "DevOps"
tags: ["github-pages", "ci", "github-actions", "dns"]
created: 2026-06-20
updated: 2026-07-10
---

GitHub Pages is a free, CDN-backed host for static sites, and it supports custom
domains with HTTPS. Here's the setup I use.

## 1. Build & deploy with Actions

The workflow builds the site and publishes the output as a Pages artifact:

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

Then set **Settings → Pages → Source = GitHub Actions**.

## 2. Custom domain

Add a `CNAME` file to your published output (in Astro, put it in `public/`) containing
just your domain:

```
example.com
```

## 3. DNS

For an apex domain, point it at GitHub's Pages IPs with `A`/`AAAA` records; for a
`www` subdomain, use a `CNAME` to `<user>.github.io`. Once the certificate is issued,
enable **Enforce HTTPS**.

## Gotchas

- With a custom domain the site is served at the **root**, so don't set a `base` path.
- The `CNAME` file must survive the build — keeping it in `public/` handles that.

This is exactly how [this site](/wiki/how-this-site-is-built) is deployed.
