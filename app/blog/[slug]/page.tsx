import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { MdxContent } from "@/components/mdx-content";
import { Container } from "@/components/site/container";
import { Prose } from "@/components/site/prose";
import { Tag } from "@/components/ui/tag";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";
import { buildArticleMetadata } from "@/lib/seo/build-metadata";
import { formatDate } from "@/lib/utils/format-date";

type BlogDetailPageProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return buildArticleMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    imageUrl: post.image,
    publishedTime: post.date,
    tags: post.tags,
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Container className="space-y-10">
      <header className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <Tag>Blog post</Tag>
          <Tag>{formatDate(post.date)}</Tag>
          <Tag>{post.author}</Tag>
        </div>
        <div className="space-y-4">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {post.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            {post.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>

      <Prose>
        <MdxContent code={post.body} />
      </Prose>
    </Container>
  );
}
