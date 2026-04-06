# Content Workflow

This repo is moving toward a single local-first content system built on Velite.

## Collections

- `content/site/config.yml`
- `content/blog/*.mdx`
- `content/work/*.mdx`
- `content/playground/*.mdx`

## Slug Strategy

Slugs come from filenames, not frontmatter.

Examples:

- `content/blog/building-a-modern-portfolio.mdx` -> `/blog/building-a-modern-portfolio`
- `content/work/portfolio-site.mdx` -> `/work/portfolio-site`

Why this decision:

- fewer fields to maintain during migration
- cleaner authoring experience
- lower risk of filename and frontmatter drift

## Current Transitional State

The repo still contains legacy imported content that has not been normalized yet:

- `content/projects/*`
- `content/case-studies/*`
- `content/dj-sets/*`

Those folders are intentionally not wired into the runtime. They are source
material for Phase 3 migration, not part of the final architecture.

## Authoring Rules

- treat missing required frontmatter as a real error
- do not add fallback content to hide missing fields
- keep long-form narrative in MDX body content
- keep singleton site metadata in `content/site/config.yml`

## Validation Commands

```bash
pnpm build:content
pnpm lint
pnpm typecheck
```
