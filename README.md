# davd.fr

My personal site: a map of my work, my experience and my projects.

Astro builds it into static pages, and GitHub Pages deploys `main` on every push.

## Run it locally

Astro 7 needs Node 22.12 or later.

```bash
npm ci
npm run dev
```

## Edit it

- `src/config/site.ts`: the bio, the map's themes, the experience timeline, the
  numbers under Now and the interests.
- `src/content/projects/`: one Markdown file per project. Its `line` field picks
  the theme colour, and `featured: true` puts it on the home page.
- `src/components/MetroMap.astro`: the map itself, one hand-drawn SVG.
