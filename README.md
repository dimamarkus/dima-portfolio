# dima-portfolio

Standalone portfolio rebuild in progress.

## Current Status

This repository currently covers the first three implementation slices from the
standalone extraction roadmap:

- Phase 1: standalone Next.js App Router scaffold
- Phase 2: typed local content system foundation with Velite
- Phase 3: migrated imported portfolio content into unified collections

The repository now has a real standalone runtime, a strict local content
pipeline, and migrated `work` / `playground` collections that the next route
rebuild can target directly.

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

1. Build a local site shell and UI primitives.
2. Rebuild route surfaces on top of the new content helpers.
3. Add MDX rendering components and metadata-rich detail pages.
