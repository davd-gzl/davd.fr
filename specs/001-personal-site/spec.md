# Feature Specification: davd.fr — Personal Website, Portfolio & Wiki

**Feature Branch**: `001-personal-site`

**Created**: 2026-07-10

**Status**: Draft

**Input**: User description: "Create my website with all my projects, and my personal
wiki. It needs to sum up who I am, and it will be deployed on that website
(davd.fr). Use speckit, keep it simple and efficient."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Learn who David is (Priority: P1)

A first-time visitor lands on the home page and, within seconds, understands who
David is, what he does, and how to reach him or find his work. From the home page
they can reach his projects, his wiki, and his contact/social links.

**Why this priority**: The single most important job of a personal site is to answer
"who is this person?" It is the minimum viable product — a home page that introduces
David is already a useful, deployable site on its own.

**Independent Test**: Open the deployed home page with no prior context. Confirm it
states David's name, a one-line summary of what he does, a short bio, and links to
projects, wiki, and contact. Fully testable in isolation.

**Acceptance Scenarios**:

1. **Given** a visitor on the home page, **When** the page loads, **Then** they see
   David's name, a headline, a short "who I am" bio, and primary navigation to
   Projects and Wiki.
2. **Given** a visitor on any page, **When** they look at the header/footer, **Then**
   they find contact and social links (e.g. email, GitHub).
3. **Given** a visitor on a phone, **When** they open the home page, **Then** the
   layout is readable and navigable without horizontal scrolling.

---

### User Story 2 - Browse David's projects (Priority: P2)

A visitor (recruiter, collaborator, or peer) wants to see what David has built. They
open the Projects page, scan a list of projects with short descriptions and tags, and
open any project to read a fuller write-up with links to source/live demo.

**Why this priority**: The portfolio is the primary evidence of David's work and the
main reason many visitors arrive. It builds directly on the P1 shell.

**Independent Test**: Navigate to `/projects`, confirm every project defined in
content appears as a card with title, summary, and tags; click one and confirm the
detail page renders its full description and external links.

**Acceptance Scenarios**:

1. **Given** the Projects page, **When** it loads, **Then** each project is listed
   with title, one-line summary, and technology tags, sorted with featured/most
   recent first.
2. **Given** a project card, **When** the visitor clicks it, **Then** a detail page
   opens with the full write-up and links to the repository and/or live site.
3. **Given** a project has no live demo link, **When** the detail page renders,
   **Then** only the available links are shown (no broken/empty links).

---

### User Story 3 - Read and navigate the personal wiki (Priority: P3)

A visitor (or David himself) browses a personal knowledge base: notes, how-tos, and
references organized by topic. They can see an index of wiki entries grouped by
category, open any entry, and read cross-linked notes.

**Why this priority**: The wiki is a living knowledge base that grows over time. It
adds durable value but is not required for the site to be useful on day one.

**Independent Test**: Navigate to `/wiki`, confirm entries are listed and grouped by
category/tag; open an entry and confirm the Markdown renders with headings, code, and
links; confirm internal links between notes resolve.

**Acceptance Scenarios**:

1. **Given** the Wiki index, **When** it loads, **Then** entries are grouped by
   category and each shows title, summary, and last-updated date.
2. **Given** a wiki entry, **When** it opens, **Then** rich Markdown (headings, lists,
   code blocks, links) renders correctly and is readable.
3. **Given** a wiki entry links to another entry, **When** the visitor clicks it,
   **Then** the target entry opens (no broken internal link).

---

### Edge Cases

- **Empty collection**: If there are zero projects or zero wiki entries, the listing
  page shows a friendly empty state instead of a blank or broken page.
- **Missing optional fields**: A project without tags, a repo link, or a cover image
  still renders cleanly.
- **Malformed frontmatter**: Content with invalid/missing required frontmatter fails
  the build with a clear error rather than shipping a broken page.
- **Long content**: Very long project write-ups and wiki notes remain readable (line
  length capped, code blocks scroll horizontally rather than breaking layout).
- **Dark mode**: The site is legible in both light and dark color schemes.
- **404**: An unknown URL returns a helpful not-found page with a link home.
- **No JavaScript**: All content is readable and navigable with JS disabled.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST present a home page that states David's name, a headline,
  a short "who I am" bio, and links to Projects, Wiki, and contact/social profiles.
- **FR-002**: The site MUST provide a Projects listing page that renders every project
  defined in content, each with title, summary, and tags.
- **FR-003**: Each project MUST have its own detail page rendering a full Markdown
  write-up and any provided external links (repository, live demo).
- **FR-004**: The site MUST provide a Wiki index that lists entries grouped by
  category, each with title, summary, and last-updated date.
- **FR-005**: Each wiki entry MUST have its own page rendering rich Markdown.
- **FR-006**: Adding a project or wiki entry MUST require only creating a Markdown
  file with valid frontmatter — no code changes.
- **FR-007**: Content frontmatter MUST be schema-validated at build time; invalid
  content MUST fail the build with a clear message.
- **FR-008**: The site MUST include consistent global navigation (header) and footer
  with contact/social links on every page.
- **FR-009**: The site MUST be responsive and legible on mobile, tablet, and desktop.
- **FR-010**: The site MUST support light and dark color schemes following the
  visitor's system preference.
- **FR-011**: The site MUST render a helpful 404 page for unknown routes.
- **FR-012**: All primary content MUST be readable with JavaScript disabled.
- **FR-013**: The site MUST build to static files and deploy automatically to `davd.fr`
  on push to the default branch.
- **FR-014**: The site MUST expose basic SEO metadata (title, description, Open Graph)
  and a sitemap.
- **FR-015**: Listings MUST show a friendly empty state when a collection has no
  entries.

### Key Entities *(include if feature involves data)*

- **Site profile**: The person the site is about — name, headline, short bio, avatar
  (optional), and a set of contact/social links. Drives the home page and footer.
- **Project**: A piece of work David built. Attributes: title, slug, summary, body
  (Markdown), tags, optional repository URL, optional live URL, optional date/period,
  featured flag, optional cover image, publish/draft flag.
- **Wiki entry**: A knowledge-base note. Attributes: title, slug, summary, body
  (Markdown), category, tags, created date, updated date, publish/draft flag.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can state what David does and find his projects
  within 15 seconds of the home page loading.
- **SC-002**: A new project or wiki entry can be published by adding one Markdown file
  and pushing — no other file needs to change — in under 5 minutes.
- **SC-003**: The production build completes with zero errors and the site deploys to
  `davd.fr` automatically on push.
- **SC-004**: Every content page scores ≥ 95 on Lighthouse Performance and
  Accessibility.
- **SC-005**: All pages are usable on a 360px-wide viewport with no horizontal scroll
  and with JavaScript disabled.
- **SC-006**: 100% of internal links and declared external links resolve (no broken
  links) at build time.

## Assumptions

- The site is content-first and low-traffic-sensitive; a static site served from a CDN
  is sufficient — no server-side runtime or database is required.
- David maintains content himself by editing Markdown in this repository; no CMS UI is
  needed for v1.
- The custom domain `davd.fr` is (or will be) pointed at the chosen static host; DNS
  configuration is performed by David outside this repository.
- Initial project and wiki content is seeded with representative entries and is
  expected to be edited by David; the structure and schema are the deliverable, the
  copy is easily editable.
- English is the primary content language for v1; multi-language is out of scope.
- Search, comments, and RSS are nice-to-haves and out of scope for v1 (RSS/sitemap may
  be added cheaply if trivial).
