import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { EntryCard } from "@/components/site/entry-card";
import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import {
  getContentSummary,
  getFeaturedWorkEntries,
  getRecentBlogPosts,
  getRecentPlaygroundEntries,
  getSiteConfig,
} from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/build-metadata";

const site = getSiteConfig();

export const metadata: Metadata = buildPageMetadata({
  title: site.name,
  description: site.summary,
  path: "/",
});

export default function HomePage() {
  const summary = getContentSummary();
  const featuredWork = getFeaturedWorkEntries();
  const recentPosts = getRecentBlogPosts(3);
  const recentPlayground = getRecentPlaygroundEntries(2);

  const stats = [
    {
      label: "Blog posts",
      value: summary.blogPosts,
    },
    {
      label: "Work entries",
      value: summary.workItems,
    },
    {
      label: "Playground entries",
      value: summary.playgroundItems,
    },
  ];

  return (
    <Container className="space-y-16">
      <Hero
        eyebrow={site.hero.eyebrow}
        location={site.location}
        primaryActionHref="/work"
        secondaryActionHref="/blog"
        stats={stats}
        summary={site.summary}
        supportingText={site.hero.supportingText}
        title={site.hero.headline}
      />

      <Section
        action={<Button href="/work" variant="secondary">All work</Button>}
        description="A selection of product, UX, and engineering work across fintech, AI, ecommerce, and data-heavy tools."
        eyebrow="Featured work"
        title="Selected work"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredWork.map((entry) => (
            <EntryCard
              key={entry.slug}
              description={entry.summary}
              eyebrow={entry.kind === "case-study" ? "Case study" : "Project"}
              href={entry.href}
              meta={entry.year ?? new Date(entry.date).getFullYear().toString()}
              tags={entry.technologies}
              title={entry.title}
            />
          ))}
        </div>
      </Section>

      <Section
        action={<Button href="/blog" variant="ghost">Browse posts</Button>}
        description="Thoughts on product design, front-end systems, and building better digital experiences."
        eyebrow="Writing"
        title="Writing on design, code, and product"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <EntryCard
              key={post.slug}
              description={post.description}
              eyebrow="Blog post"
              href={post.href}
              meta={new Date(post.date).getFullYear().toString()}
              tags={post.tags}
              title={post.title}
            />
          ))}
        </div>
      </Section>

      <Section
        action={
          <Button href="/playground" variant="ghost">
            Open playground
          </Button>
        }
        description="Experiments in music, software, and interaction that keep my practice sharp."
        eyebrow="Playground"
        title="Experiments, tools, and sessions"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {recentPlayground.map((entry) => (
            <EntryCard
              key={entry.slug}
              description={entry.description}
              eyebrow={entry.category ?? "Playground"}
              href={entry.href}
              meta={new Date(entry.date).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
              tags={entry.tags}
              title={entry.title}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
