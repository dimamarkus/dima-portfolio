import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { EntryCard } from "@/components/site/entry-card";
import { Section } from "@/components/site/section";
import { getAllPlaygroundEntries } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/build-metadata";
import { formatDate } from "@/lib/utils/format-date";

export const metadata: Metadata = buildPageMetadata({
  title: "Playground",
  description: "Music sessions and side-project notes from the standalone portfolio.",
  path: "/playground",
});

export default function PlaygroundPage() {
  const entries = getAllPlaygroundEntries();

  return (
    <Container>
      <Section
        description="A home for experiments, mixes, and side work that does not fit neatly into the main portfolio."
        eyebrow="Playground"
        title="Creative sessions and experiments"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {entries.map((entry) => (
            <EntryCard
              key={entry.slug}
              description={entry.description}
              eyebrow={entry.category ?? "Playground"}
              href={entry.href}
              meta={formatDate(entry.date)}
              tags={entry.tags}
              title={entry.title}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
