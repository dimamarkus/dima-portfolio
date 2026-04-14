import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { EntryCard } from "@/components/site/entry-card";
import { Section } from "@/components/site/section";
import { getAllWorkEntries } from "@/lib/content";
import {
  formatWorkEntryCornerMeta,
  formatWorkEntryMeta,
} from "@/lib/content/format-work-entry-meta";
import { buildPageMetadata } from "@/lib/seo/build-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Work",
  description: "Case studies and product work spanning front-end systems, product UI, and end-to-end delivery.",
  path: "/work",
});

export default function WorkPage() {
  const entries = getAllWorkEntries();

  return (
    <Container>
      <Section
        description="A focused set of projects and case studies that show how I work across front-end architecture, product design, and shipped delivery."
        eyebrow="Work"
        title="Case studies and shipped product work"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {entries.map((entry) => (
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
    </Container>
  );
}
