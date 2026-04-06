# Content Workflow

This repo is moving toward a single local-first content system built on Velite.

## Collections

- `content/site/config.yml`
- `content/blog/*.mdx`
- `content/work/*.mdx`
- `content/playground/*.mdx`

## Current State

The imported project, case-study, and DJ-set content now lives in the final
runtime collections:

- `content/work/*`
- `content/playground/*`

The old source folders should not be reintroduced.

## Slug Strategy

Slugs come from filenames, not frontmatter.

Examples:

- `content/blog/building-a-modern-portfolio.mdx` -> `/blog/building-a-modern-portfolio`
- `content/work/portfolio-site.mdx` -> `/work/portfolio-site`

Why this decision:

- fewer fields to maintain during migration
- cleaner authoring experience
- lower risk of filename and frontmatter drift

## Authoring Rules

- treat missing required frontmatter as a real error
- do not add fallback content to hide missing fields
- keep long-form narrative in MDX body content
- keep singleton site metadata in `content/site/config.yml`
- prefer filename-driven slugs over frontmatter slugs

## Validation Commands

```bash
pnpm build:content
pnpm lint
pnpm typecheck
```
