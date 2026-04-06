import type { MetadataRoute } from "next";

import {
  getAllBlogPosts,
  getAllPlaygroundEntries,
  getAllWorkEntries,
} from "@/lib/content";
import { getAbsoluteUrl } from "@/lib/utils/get-site-url";

const staticRoutes = ["/", "/about", "/blog", "/contact", "/playground", "/work"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: getAbsoluteUrl(route),
    lastModified: new Date(),
  }));

  const workEntries: MetadataRoute.Sitemap = getAllWorkEntries().map((entry) => ({
    url: getAbsoluteUrl(entry.href),
    lastModified: new Date(entry.date),
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: getAbsoluteUrl(post.href),
    lastModified: new Date(post.date),
  }));

  const playgroundEntries: MetadataRoute.Sitemap = getAllPlaygroundEntries().map(
    (entry) => ({
      url: getAbsoluteUrl(entry.href),
      lastModified: new Date(entry.date),
    }),
  );

  return [...staticEntries, ...workEntries, ...blogEntries, ...playgroundEntries];
}
