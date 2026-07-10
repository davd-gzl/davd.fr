---
title: "Typed content with Astro collections"
summary: "How to validate Markdown frontmatter at build time so bad content fails the build, not the page."
category: "Development"
tags: ["astro", "typescript", "zod", "content"]
created: 2026-06-28
---

Astro's Content Collections let you treat a folder of Markdown as typed data. The win:
a schema validates every file at build time, so a missing or malformed field breaks the
build instead of silently shipping a broken page.

## Defining a collection

```ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const wiki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/wiki' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    created: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { wiki };
```

## Reading it in a page

```ts
import { getCollection, render } from 'astro:content';

const notes = await getCollection('wiki', ({ data }) => !data.draft);
// ...and to render a single entry's Markdown body:
const { Content } = await render(notes[0]);
```

## Why I like it

- **Fail fast**: a typo in a date or a missing `title` stops the build.
- **Autocomplete**: `entry.data` is fully typed in the editor.
- **Drafts**: a `draft` flag keeps work-in-progress out of production.

This is the backbone of [how this site is built](/wiki/how-this-site-is-built).
