import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { EntryCard } from "@/components/site/entry-card";
import { Section } from "@/components/site/section";
import { getAllWorkEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects and case studies from the standalone portfolio rebuild.",
};

export default function WorkPage() {
  const entries = getAllWorkEntries();

  return (
    <Container>
      <Section
        description="Projects and case studies now live in one collection so the site can present them through a single consistent route model."
        eyebrow="Work"
        title="Selected projects and case studies"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {entries.map((entry) => (
            <EntryCard
              key={entry.slug}
              description={entry.summary}
              eyebrow={entry.kind === "case-study" ? "Case study" : "Project"}
              href={entry.href}
              meta={
                entry.client && entry.year
                  ? `${entry.client} / ${entry.year}`
                  : (entry.year ?? new Date(entry.date).getFullYear().toString())
              }
              tags={entry.technologies}
              title={entry.title}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
