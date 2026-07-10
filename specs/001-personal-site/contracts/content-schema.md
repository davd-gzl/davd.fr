# Content Schema Contract: davd.fr

This is the enforced contract between David (content author) and the site (renderer).
It is implemented as zod schemas in `src/content/config.ts`. Any content file that
violates it fails `astro build`.

## Project frontmatter

```yaml
---
title: "Project name"          # required, string
summary: "One-line pitch."     # required, string
tags: ["astro", "typescript"]  # optional, string[] (default [])
repo: "https://github.com/..." # optional, valid URL
url: "https://example.com"      # optional, valid URL
date: 2026-06-01                # optional, YYYY-MM-DD (sort key)
featured: true                  # optional, boolean (default false)
cover: "/images/x.png"         # optional, path under public/
draft: false                    # optional, boolean (default false)
---

Markdown body: the full write-up.
```

## Wiki frontmatter

```yaml
---
title: "Note title"            # required, string
summary: "What this note is."  # required, string
category: "DevOps"             # required, string (index grouping)
tags: ["docker", "ci"]         # optional, string[] (default [])
created: 2026-05-01             # required, YYYY-MM-DD
updated: 2026-06-15             # optional, YYYY-MM-DD (falls back to created)
draft: false                    # optional, boolean (default false)
---

Markdown body: the note content.
```

## Guarantees

- **Add-only publishing**: dropping a valid `.md` file into `src/content/projects/` or
  `src/content/wiki/` publishes a new page — no code change (FR-006).
- **Fail fast**: invalid/missing required fields stop the build with a precise error
  (FR-007) instead of shipping a broken page.
- **Drafts are safe**: `draft: true` keeps work-in-progress out of production.
- **Optional links degrade**: absent `repo`/`url`/`cover` simply render nothing —
  never an empty or broken element (edge case: missing optional fields).
