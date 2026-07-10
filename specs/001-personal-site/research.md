# Phase 0 Research: davd.fr

Decisions and rationale for the technical unknowns in the plan. Each item follows
Decision → Rationale → Alternatives considered.

## 1. Static site generator

**Decision**: Astro 5 with Content Collections.

**Rationale**: Astro renders to static HTML with zero client JS by default, which
directly satisfies constitution principles II (static/zero-runtime) and V (fast). Its
Content Collections give typed, schema-validated Markdown frontmatter (principle I:
content over code; FR-007 build-time validation). File-based routing plus `[...slug]`
dynamic routes mean a new project/wiki file becomes a page with no code change (FR-006).

**Alternatives considered**:
- *Plain HTML/CSS*: simplest to serve, but every wiki page is hand-authored HTML —
  fails "content over code" and does not scale as the wiki grows.
- *Eleventy*: excellent and minimal, but weaker typed-frontmatter story out of the box.
- *Next.js/SPA frameworks*: violate principle II (runtime/JS heavy) for a content site.
- *Hugo*: fast, but templating is less approachable for future TS-based components.

## 2. Styling approach

**Decision**: Hand-written CSS in one `global.css` using CSS custom properties (design
tokens), light/dark via `prefers-color-scheme`.

**Rationale**: Principle III (simplicity) and V (fast, minimal CSS). A small token set
(colors, spacing, typography) keeps the design consistent and themeable without a build
step or framework payload. No utility framework to learn or ship.

**Alternatives considered**:
- *Tailwind*: powerful but adds tooling and a mental model; overkill for a small site.
- *CSS-in-JS*: needs runtime/JS — rejected by principle II.

## 3. Content model & source of truth

**Decision**: Two collections (`projects`, `wiki`) as Markdown with zod-validated
frontmatter in `src/content/config.ts`. The "who I am" profile (name, bio, socials,
nav) lives in one typed module `src/config/site.ts`.

**Rationale**: Separates the person's identity (rarely changes, shared by home + footer)
from growing content collections. Zod schemas enforce the contract at build time
(FR-007) and give editor autocompletion. Draft flag lets David stage unpublished notes.

**Alternatives considered**:
- *Everything in Markdown incl. profile*: profile is structured config, not an article;
  a typed module is a better fit and avoids a one-off "singleton collection."
- *External CMS*: violates principle IV (own your content) and adds runtime/lock-in.

## 4. Hosting & deployment

**Decision**: GitHub Pages via GitHub Actions (`actions/deploy-pages`), custom domain
`davd.fr` via `public/CNAME`. `site: 'https://davd.fr'` in `astro.config.mjs`.

**Rationale**: Repo already lives on GitHub; Pages is free, CDN-backed, and supports
custom domains + HTTPS. Actions build gives us the "build must pass" gate (SC-003) and
auto-deploy on push to the default branch (FR-013). No third-party host account needed.

**Alternatives considered**:
- *Netlify/Vercel*: great DX, but adds an external account/integration; Pages is
  sufficient and keeps everything in one place. (Astro output is portable, so switching
  later is trivial — only the deploy workflow changes.)

**Note on base path**: With a custom domain the site is served at the domain root, so
`base` stays `/` (no repo-subpath prefix). This is required for CNAME-based Pages.

## 5. SEO, sitemap, feeds

**Decision**: `@astrojs/sitemap` for `sitemap-index.xml`; per-page `<title>`,
description, canonical, and Open Graph tags via a `BaseHead` component; `robots.txt`
in `public/`.

**Rationale**: FR-014 with near-zero cost. RSS is deferred (out of scope v1) but the
content collection structure makes it a trivial future add.

## 6. Testing / quality gate

**Decision**: `astro check` + `astro build` as the CI gate; manual Lighthouse pass.

**Rationale**: For a static content site, the build already validates every content
file against its schema and fails on broken references — that is the highest-value
automated check (SC-003, SC-006). A unit-test framework would add tooling with little
return (principle III). Accessibility/performance (SC-004) verified via Lighthouse.

## 7. Accessibility & motion

**Decision**: Semantic landmarks (`header`/`main`/`footer`/`nav`), visible focus
styles, skip-to-content link, `prefers-reduced-motion` honored, color contrast ≥ WCAG
AA in both themes.

**Rationale**: Principle V and FR-009/FR-010/FR-012; cheap to do correctly from the
start, expensive to retrofit.
