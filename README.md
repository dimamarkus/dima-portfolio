# dima-portfolio

Standalone portfolio rebuild in progress.

## Current Status

This repository currently covers the first implementation slice from the
standalone extraction roadmap:

- Phase 1: standalone Next.js App Router scaffold

The copied legacy content is still present for later migration work, but the new
runtime now has a clean standalone shell to migrate into.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS 4

## Development

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Next Milestones

1. Add the typed local content system.
2. Normalize legacy content into the final collections.
3. Rebuild routes on top of the new data model.
