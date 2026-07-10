---
description: "Task list for davd.fr personal website"
---

# Tasks: davd.fr — Personal Website, Portfolio & Wiki

**Input**: Design documents from `/specs/001-personal-site/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: No automated test framework (per plan — static content site). The quality
gate is `astro build` (schema validation) + Lighthouse. No test tasks.

**Organization**: Grouped by user story (US1–US3) so each is independently deliverable.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)

## Phase 1: Setup (Shared Infrastructure)

- [ ] T001 Initialize Astro + npm project at repo root (`package.json`, `astro.config.mjs`, `tsconfig.json`) with `astro` and `@astrojs/sitemap`.
- [ ] T002 [P] Add `public/` assets: `favicon.svg`, `robots.txt`, `CNAME` (davd.fr).
- [ ] T003 [P] Add `.gitignore` (node_modules, dist, .astro) and lock the Node version expectation.
- [ ] T004 Create `src/styles/global.css` with design tokens (color, spacing, type) and light/dark via `prefers-color-scheme`.

## Phase 2: Foundational (Blocking Prerequisites)

**⚠️ CRITICAL**: Blocks all user stories.

- [ ] T005 Define content collections + zod schemas in `src/content/config.ts` (projects, wiki) per contracts/content-schema.md.
- [ ] T006 Create `src/config/site.ts` — typed site profile (name, headline, bio, socials, nav, siteUrl).
- [ ] T007 Build `src/components/BaseHead.astro` (title/description/canonical/OG) and `src/layouts/BaseLayout.astro` (HTML shell, skip link, header, footer, theme).
- [ ] T008 [P] Build `src/components/Header.astro` (nav from site.ts) and `src/components/Footer.astro` (socials).
- [ ] T009 [P] Build `src/layouts/ProseLayout.astro` (article layout for detail pages).
- [ ] T010 Add `src/pages/404.astro`.

**Checkpoint**: Shell renders; theme, nav, footer, and metadata work on every page.

## Phase 3: User Story 1 — Learn who David is (P1) 🎯 MVP

**Goal**: Home page that introduces David and links to Projects, Wiki, contact.

- [ ] T011 [US1] Build `src/pages/index.astro`: name, headline, bio paragraphs, primary CTAs to /projects and /wiki, featured projects preview, contact/socials.
- [ ] T012 [US1] Style the home/hero and ensure mobile-first responsiveness + no-JS legibility.

**Checkpoint**: Deployable MVP — the site answers "who is David?" on its own.

## Phase 4: User Story 2 — Browse David's projects (P2)

**Goal**: Projects listing + per-project detail pages.

- [ ] T013 [P] [US2] Build `src/components/ProjectCard.astro` (title, summary, tags, links).
- [ ] T014 [US2] Build `src/pages/projects/index.astro`: list all non-draft projects sorted featured→date→title; empty state.
- [ ] T015 [US2] Build `src/pages/projects/[...slug].astro`: render project body via ProseLayout with repo/live links.
- [ ] T016 [P] [US2] Seed `src/content/projects/*.md` (davd.fr itself + representative entries) per schema.

**Checkpoint**: Portfolio browseable end-to-end.

## Phase 5: User Story 3 — Personal wiki (P3)

**Goal**: Wiki index grouped by category + per-entry pages.

- [ ] T017 [P] [US3] Build `src/components/WikiCard.astro` (title, summary, updated date).
- [ ] T018 [US3] Build `src/pages/wiki/index.astro`: group non-draft entries by category; empty state.
- [ ] T019 [US3] Build `src/pages/wiki/[...slug].astro`: render entry body via ProseLayout with metadata (category, dates, tags).
- [ ] T020 [P] [US3] Seed `src/content/wiki/*.md` representative notes, including cross-links.

**Checkpoint**: Wiki browseable and cross-linked.

## Phase 6: Polish & Deployment (Cross-cutting)

- [ ] T021 Add `.github/workflows/deploy.yml` — build + deploy to GitHub Pages on push to default branch.
- [ ] T022 [P] Write `README.md` (what it is, how to run, how to add content, how deploy works).
- [ ] T023 Run `npm run build`; fix any schema/type errors; verify `dist/` contains all expected pages, sitemap, CNAME, 404.
- [ ] T024 Verify responsiveness, dark mode, and no-JS rendering against success criteria; then commit and push.

## Dependencies

- Phase 1 → Phase 2 → (Phase 3, 4, 5 can proceed once Phase 2 done) → Phase 6.
- Within stories, `[P]` tasks touch different files and can be done together.

## Traceability

| Requirement | Tasks |
|-------------|-------|
| FR-001, US1 | T006, T011, T012 |
| FR-002/003, US2 | T005, T013–T016 |
| FR-004/005, US3 | T005, T017–T020 |
| FR-006/007 (content contract) | T005, T016, T020 |
| FR-008 (nav/footer) | T007, T008 |
| FR-009/010/012 (responsive/dark/no-JS) | T004, T012, T024 |
| FR-011 (404) | T010 |
| FR-013 (deploy) | T002, T021 |
| FR-014 (SEO/sitemap) | T001, T007 |
| FR-015 (empty state) | T014, T018 |
