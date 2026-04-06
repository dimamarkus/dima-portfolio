import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { MdxContent } from "@/components/mdx-content";
import { Container } from "@/components/site/container";
import { Prose } from "@/components/site/prose";
import { Tag } from "@/components/ui/tag";
import {
  getAllPlaygroundEntries,
  getPlaygroundEntryBySlug,
} from "@/lib/content";
import { formatDate } from "@/lib/utils/format-date";

type PlaygroundDetailPageProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

export async function generateStaticParams() {
  return getAllPlaygroundEntries().map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: PlaygroundDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPlaygroundEntryBySlug(slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.description,
  };
}

export default async function PlaygroundDetailPage({
  params,
}: PlaygroundDetailPageProps) {
  const { slug } = await params;
  const entry = getPlaygroundEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <Container className="space-y-10">
      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <Tag>{entry.category ?? "Playground"}</Tag>
          <Tag>{formatDate(entry.date)}</Tag>
        </div>
        <div className="space-y-4">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {entry.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            {entry.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {entry.externalUrl ? (
          <a
            className="inline-flex rounded-full border border-sky-400/40 bg-sky-400/15 px-4 py-2 text-sm font-medium text-sky-100 transition-colors hover:border-sky-300/60 hover:bg-sky-400/20"
            href={entry.externalUrl}
            rel="noreferrer"
            target="_blank"
          >
            Open original link
          </a>
        ) : null}
      </header>

      <Prose>
        <MdxContent code={entry.body} />
      </Prose>
    </Container>
  );
}
