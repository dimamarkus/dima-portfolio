import type { Metadata } from "next";

import { getSiteConfig } from "@/lib/content";
import { getAbsoluteUrl } from "@/lib/utils/get-site-url";

const site = getSiteConfig();

type SharedMetadataInput = Readonly<{
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  imageAlt?: string;
}>;

type ArticleMetadataInput = SharedMetadataInput &
  Readonly<{
    publishedTime?: string;
    tags?: string[];
  }>;

const resolveImageUrl = (imageUrl?: string) => {
  if (!imageUrl) {
    return getAbsoluteUrl("/opengraph-image");
  }

  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  return getAbsoluteUrl(imageUrl);
};

const resolveImageAlt = (title: string, imageAlt?: string) => {
  return imageAlt ?? `${title} preview`;
};

export const buildPageMetadata = ({
  title,
  description,
  path,
  imageUrl,
  imageAlt,
}: SharedMetadataInput): Metadata => {
  const absoluteUrl = getAbsoluteUrl(path);
  const absoluteImageUrl = resolveImageUrl(imageUrl);
  const alt = resolveImageAlt(title, imageAlt);

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      type: "website",
      url: absoluteUrl,
      title,
      description,
      siteName: site.name,
      images: [
        {
          url: absoluteImageUrl,
          alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImageUrl],
    },
  };
};

export const buildArticleMetadata = ({
  title,
  description,
  path,
  imageUrl,
  imageAlt,
  publishedTime,
  tags,
}: ArticleMetadataInput): Metadata => {
  const metadata = buildPageMetadata({
    title,
    description,
    path,
    imageUrl,
    imageAlt,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      tags,
    },
  };
};
