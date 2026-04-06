# dima-portfolio

Standalone portfolio rebuild in progress.

## Current Status

This repository currently covers the first two implementation slices from the
standalone extraction roadmap:

- Phase 1: standalone Next.js App Router scaffold
- Phase 2: typed local content system foundation with Velite

The copied legacy content is still present for migration work, but the new
runtime is intentionally being built around the final local-first architecture.

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
- `content/work/*` and `content/playground/*` are the final collection targets.
- `content/projects/*`, `content/case-studies/*`, and `content/dj-sets/*` are
  legacy imports waiting for Phase 3 migration.

## Next Milestones

1. Migrate projects and case studies into `content/work`.
2. Move DJ content into `content/playground` or delete it intentionally.
3. Rebuild route surfaces on top of the new content helpers.
