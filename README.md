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
blog, and playground content.

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

1. Add explicit `not-found`, `sitemap`, `robots`, and richer metadata assets.
2. Decide whether the contact page should stay link-based or move to a true server action flow.
3. Tighten remaining content cleanup, especially local image coverage and old remote references.
