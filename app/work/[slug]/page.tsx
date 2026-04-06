import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { MdxContent } from "@/components/mdx-content";
import { Container } from "@/components/site/container";
import { Prose } from "@/components/site/prose";
import { Tag } from "@/components/ui/tag";
import { getAllWorkEntries, getWorkEntryBySlug } from "@/lib/content";
import { buildArticleMetadata } from "@/lib/seo/build-metadata";
import { formatDate } from "@/lib/utils/format-date";

type WorkDetailPageProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

export async function generateStaticParams() {
  return getAllWorkEntries().map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWorkEntryBySlug(slug);

  if (!entry) {
    return {};
  }

  return buildArticleMetadata({
    title: entry.seoTitle ?? entry.title,
    description: entry.seoDescription ?? entry.summary,
    path: `/work/${entry.slug}`,
    imageUrl: entry.coverImage,
    publishedTime: entry.date,
    tags: entry.tags,
  });
}

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  const { slug } = await params;
  const entry = getWorkEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <Container className="space-y-10">
      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <Tag>{entry.kind === "case-study" ? "Case study" : "Project"}</Tag>
          {entry.year ? <Tag>{entry.year}</Tag> : null}
          <Tag>{formatDate(entry.date)}</Tag>
        </div>
        <div className="space-y-4">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {entry.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            {entry.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {entry.technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
      </header>

      <Prose>
        <MdxContent code={entry.body} />
      </Prose>
    </Container>
  );
}
