# dima-portfolio

Standalone portfolio rebuild in progress.

## Current Status

This repository currently covers the first five implementation slices from the
standalone extraction roadmap:

- Phase 1: standalone Next.js App Router scaffold
- Phase 2: typed local content system foundation with Velite
- Phase 3: migrated imported portfolio content into unified collections
- Phase 4: local site shell and reusable UI primitives
- Phase 5: core content routes and MDX detail pages

The repository now has a real standalone runtime, a strict local content
pipeline, a reusable local UI layer, and static section/detail routes for work,
blog, and playground content. It also now ships a real `not-found` page plus
generated `robots.txt`, `sitemap.xml`, dynamic social-preview images, and
route-level canonical/Open Graph/Twitter metadata. The contact page now uses a
validated server action to open a prefilled direct-email draft.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS 4
- Velite for typed content collections

## Development

```bash
pnpm install
pnpm build:content
pnpm dev
```

## Validation

```bash
pnpm build:content
pnpm lint
pnpm typecheck
pnpm build
```

## Content Notes

- `content/blog/*` is already wired into the new content pipeline.
- `content/work/*` contains the migrated project and case-study content.
- `content/playground/*` contains the migrated music / DJ content.
- Slugs come from filenames, not frontmatter.

## Next Milestones

1. Tighten remaining content cleanup where imported copy still feels thin or overly generic.
2. If needed later, swap the direct-email contact flow for a real delivery backend.
3. Add production-ready polish like favicon/app icons and any final visual QA fixes.
