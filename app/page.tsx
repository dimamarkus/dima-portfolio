import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { EntryCard } from "@/components/site/entry-card";
import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import {
  getFeaturedWorkEntries,
  getRecentBlogPosts,
  getRecentPlaygroundEntries,
  getSiteConfig,
} from "@/lib/content";
import {
  formatWorkEntryCornerMeta,
  formatWorkEntryMeta,
} from "@/lib/content/format-work-entry-meta";
import { buildPageMetadata } from "@/lib/seo/build-metadata";

const site = getSiteConfig();

export const metadata: Metadata = buildPageMetadata({
  title: site.name,
  description: site.summary,
  path: "/",
});

export default function HomePage() {
  const featuredWork = getFeaturedWorkEntries();
  const recentPosts = getRecentBlogPosts(3);
  const recentPlayground = getRecentPlaygroundEntries(2);

  const stats = [
    {
      label: "Years shipping product UI",
      value: "12+",
    },
    {
      label: "Users on shipped products",
      value: "350K+",
    },
    {
      label: "Major launches led",
      value: "2",
    },
  ];

  return (
    <Container className="space-y-16">
      <Hero
        eyebrow={site.hero.eyebrow}
        location={site.location}
        primaryActionLabel="View work"
        primaryActionHref="/work"
        secondaryActionLabel="About me"
        secondaryActionHref="/about"
        stats={stats}
        summary={site.summary}
        supportingText={site.hero.supportingText}
        title={site.hero.headline}
      />

      <Section
        action={<Button href="/work" variant="secondary">All work</Button>}
        description="Case studies on front-end architecture, product systems, and design-led execution across AI, fintech, ecommerce, and data-heavy tools."
        eyebrow="Featured work"
        title="Case studies and shipped product work"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredWork.map((entry) => (
            <EntryCard
              key={entry.slug}
              cornerMeta={formatWorkEntryCornerMeta(entry)}
              description={entry.summary}
              eyebrow={entry.kind === "case-study" ? "Case study" : "Project"}
              href={entry.href}
              meta={formatWorkEntryMeta(entry)}
              tags={entry.technologies}
              title={entry.title}
            />
          ))}
        </div>
      </Section>

      <Section
        action={<Button href="/blog" variant="ghost">Browse posts</Button>}
        description="Notes on front-end craft, product decisions, and the systems work behind good interfaces."
        eyebrow="Writing"
        title="Writing that supports the work"
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
        description="Smaller experiments in interaction, music, and software that keep my product instincts sharp."
        eyebrow="Playground"
        title="Experiments and side work"
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
