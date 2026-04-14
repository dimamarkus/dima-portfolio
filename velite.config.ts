import { defineCollection, defineConfig, s } from "velite";

const getLeafSlug = (path: string) => {
  const segments = path.split("/");
  const lastSegment = segments.at(-1);

  if (!lastSegment) {
    throw new Error(`Unable to derive slug from path "${path}".`);
  }

  return lastSegment;
};

const site = defineCollection({
  name: "SiteConfig",
  pattern: "site/config.yml",
  single: true,
  schema: s.object({
    name: s.string().min(1),
    title: s.string().min(1),
    email: s.string().email(),
    siteUrl: s.string().url(),
    location: s.string().min(1),
    summary: s.string().min(1),
    resumePath: s.string().min(1),
    hero: s.object({
      eyebrow: s.string().min(1),
      headline: s.string().min(1),
      supportingText: s.string().min(1),
    }),
    navigation: s.array(
      s.object({
        label: s.string().min(1),
        href: s.string().min(1),
      }),
    ),
    socialLinks: s.array(
      s.object({
        label: s.string().min(1),
        href: s.string().url(),
      }),
    ),
  }),
});

const blog = defineCollection({
  name: "BlogPost",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      path: s.path(),
      title: s.string().min(1),
      description: s.string().min(1),
      date: s.isodate(),
      author: s.string().min(1),
      image: s.string().optional(),
      tags: s.array(s.string()).default([]),
      excerpt: s.excerpt({ length: 180 }),
      metadata: s.metadata(),
      body: s.mdx(),
    })
    .transform((data) => {
      const slug = getLeafSlug(data.path);

      return {
        ...data,
        slug,
        href: `/blog/${slug}` as const,
      };
    }),
});

const work = defineCollection({
  name: "WorkEntry",
  pattern: "work/**/*.mdx",
  schema: s
    .object({
      path: s.path(),
      title: s.string().min(1),
      summary: s.string().min(1),
      date: s.isodate(),
      kind: s.enum(["project", "case-study"]),
      featured: s.boolean().default(false),
      tags: s.array(s.string()).default([]),
      technologies: s.array(s.string()).default([]),
      role: s.string().optional(),
      client: s.string().optional(),
      year: s.string().optional(),
      website: s.string().url().optional(),
      github: s.string().url().optional(),
      coverImage: s.string().optional(),
      seoTitle: s.string().optional(),
      seoDescription: s.string().optional(),
      excerpt: s.excerpt({ length: 180 }),
      metadata: s.metadata(),
      body: s.mdx(),
    })
    .transform((data) => {
      const slug = getLeafSlug(data.path);

      return {
        ...data,
        slug,
        href: `/work/${slug}` as const,
      };
    }),
});

const playground = defineCollection({
  name: "PlaygroundEntry",
  pattern: "playground/**/*.mdx",
  schema: s
    .object({
      path: s.path(),
      title: s.string().min(1),
      description: s.string().min(1),
      date: s.isodate(),
      tags: s.array(s.string()).default([]),
      category: s.string().optional(),
      externalUrl: s.string().url().optional(),
      coverImage: s.string().optional(),
      excerpt: s.excerpt({ length: 180 }),
      metadata: s.metadata(),
      body: s.mdx(),
    })
    .transform((data) => {
      const slug = getLeafSlug(data.path);

      return {
        ...data,
        slug,
        href: `/playground/${slug}` as const,
      };
    }),
});

export default defineConfig({
  root: "content",
  strict: true,
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    clean: true,
  },
  collections: {
    site,
    blog,
    work,
    playground,
  },
});
