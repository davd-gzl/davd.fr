# davd.fr Constitution

This constitution governs **davd.fr** — David's personal website: a portfolio of
projects, a personal wiki, and a short "who I am" introduction. It exists to keep
the project **simple, fast, and easy to maintain** over years, not just at launch.

## Core Principles

### I. Content Over Code
The site is a publishing tool, not an application. Adding a project or a wiki note
MUST require only writing a Markdown file with frontmatter — no template edits, no
component changes, no build-script changes. If publishing content requires touching
code, the architecture has failed this principle.

### II. Static & Zero-Runtime by Default
The site MUST build to plain static HTML/CSS that works with JavaScript disabled.
Client-side JavaScript is opt-in per feature and must degrade gracefully. No SPA
framework, no client-side router, no runtime database. This guarantees speed,
longevity, cheap hosting, and resilience.

### III. Simplicity (YAGNI)
Prefer the smallest thing that works. No feature is added "because we might need it."
Dependencies are a liability: each one MUST earn its place. When two approaches are
viable, choose the one with fewer moving parts. Complexity must be justified in the
plan's Complexity Tracking table.

### IV. Own Your Content & Domain
All content lives as portable Markdown in this repository under version control.
No proprietary CMS, no lock-in. The site is served from the custom domain `davd.fr`
so links remain stable regardless of the hosting provider.

### V. Accessible & Fast
Pages MUST be responsive (mobile-first), keyboard-navigable, use semantic HTML, and
respect `prefers-color-scheme` (light/dark) and `prefers-reduced-motion`. Performance
budget: a content page ships with no render-blocking third-party requests and minimal
CSS. Target Lighthouse Performance and Accessibility scores ≥ 95.

## Technology Constraints

- **Generator**: A static site generator with Markdown content collections (Astro).
- **Styling**: Hand-written CSS with design tokens (custom properties). No heavy CSS
  framework.
- **Content**: Markdown/MDX with typed frontmatter, validated at build time.
- **Hosting**: Static output deployed via CI to a static host, served at `davd.fr`.
- **No** analytics that set cookies or require consent banners without an explicit
  later decision; **no** tracking by default.

## Development Workflow

- Work is specified before it is built: `spec.md` → `plan.md` → `tasks.md`.
- `npm run build` MUST succeed with zero errors before any change is pushed; a broken
  build is never merged.
- Frontmatter schemas are the contract for content; a change that breaks existing
  content's schema MUST migrate that content in the same change.
- Content is reviewable in plain Markdown diffs.

## Governance

This constitution supersedes ad-hoc preferences. Any change that violates a principle
MUST either be revised to comply or be recorded, with justification, in the plan's
Complexity Tracking table. Amendments are made by editing this file with a version
bump and a dated note below.

**Version**: 1.0.0 | **Ratified**: 2026-07-10 | **Last Amended**: 2026-07-10
