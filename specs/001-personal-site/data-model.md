# Phase 1 Data Model: davd.fr

Content entities and their fields. These map 1:1 to the zod schemas in
`src/content/config.ts` (collections) and the typed object in `src/config/site.ts`
(profile). Fields marked *required* fail the build if missing/invalid (FR-007).

## Entity: Site Profile (`src/config/site.ts`)

Singleton describing the person the site is about. Drives the home page and footer.

| Field        | Type                       | Required | Notes |
|--------------|----------------------------|----------|-------|
| `name`       | string                     | yes      | Display name (e.g. "David"). |
| `shortName`  | string                     | yes      | Used in nav/brand. |
| `headline`   | string                     | yes      | One-line "what I do". |
| `bio`        | string[]                   | yes      | Short "who I am" paragraphs for the home page. |
| `location`   | string                     | no       | e.g. "France". |
| `email`      | string                     | no       | Contact email. |
| `avatar`     | string (path)              | no       | Optional profile image in `public/`. |
| `socials`    | { label, href, icon }[]    | yes      | GitHub, etc. Rendered in footer/home. |
| `nav`        | { label, href }[]          | yes      | Primary navigation items. |
| `siteUrl`    | string (url)               | yes      | Canonical origin, `https://davd.fr`. |

## Entity: Project (`src/content/projects/*.md`)

A piece of work David built. One Markdown file per project; body is the write-up.

| Field         | Type            | Required | Notes |
|---------------|-----------------|----------|-------|
| `title`       | string          | yes      | Project name. |
| `summary`     | string          | yes      | One-line description for cards & meta. |
| `tags`        | string[]        | no (def `[]`) | Technologies/topics. |
| `repo`        | string (url)    | no       | Source repository link. |
| `url`         | string (url)    | no       | Live site/demo link. |
| `date`        | date            | no       | Date or start date; used for sorting. |
| `featured`    | boolean         | no (def `false`) | Featured projects sort first / shown on home. |
| `cover`       | string (path)   | no       | Optional cover image. |
| `draft`       | boolean         | no (def `false`) | If true, excluded from production build. |
| *body*        | Markdown        | yes      | Full write-up (the file content). |

**Derived**: `slug` = filename (Astro). Sort order: `featured` desc, then `date` desc,
then `title` asc.

## Entity: Wiki Entry (`src/content/wiki/*.md`)

A personal knowledge-base note. One Markdown file per entry.

| Field         | Type            | Required | Notes |
|---------------|-----------------|----------|-------|
| `title`       | string          | yes      | Note title. |
| `summary`     | string          | yes      | One-line description for the index. |
| `category`    | string          | yes      | Grouping bucket on the index (e.g. "DevOps"). |
| `tags`        | string[]        | no (def `[]`) | Free-form tags. |
| `created`     | date            | yes      | First authored date. |
| `updated`     | date            | no       | Last meaningful edit; falls back to `created`. |
| `draft`       | boolean         | no (def `false`) | If true, excluded from production build. |
| *body*        | Markdown        | yes      | The note content. |

**Derived**: `slug` = filename. Index groups by `category`; within a category, sort by
`updated` (or `created`) desc.

## Validation rules (contract)

- `url`/`repo`/`siteUrl` MUST be valid URLs when present.
- Dates MUST be parseable (`YYYY-MM-DD`).
- Required fields missing → build fails with the file path and field name.
- `draft: true` content is filtered out of production listings and not rendered to a
  page in production (still viewable in dev).
- Empty collection → listing renders a friendly empty state (FR-015), never an error.
