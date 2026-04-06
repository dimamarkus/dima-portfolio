import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { EntryCard } from "@/components/site/entry-card";
import { Section } from "@/components/site/section";
import { getAllBlogPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils/format-date";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing from the standalone portfolio content collection.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <Container>
      <Section
        description="Notes on product, frontend architecture, design systems, and the overlap between software and creative work."
        eyebrow="Blog"
        title="Writing and technical notes"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <EntryCard
              key={post.slug}
              description={post.description}
              eyebrow="Blog post"
              href={post.href}
              meta={formatDate(post.date)}
              tags={post.tags}
              title={post.title}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
