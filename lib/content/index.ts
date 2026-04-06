import { blog, playground, site, work } from "#content";

import type {
  BlogPost,
  PlaygroundEntry,
  SiteConfig,
  WorkEntry,
} from "#content";

const sortByDateDescending = <T extends { date: string }>(items: T[]) => {
  return [...items].sort((left, right) => right.date.localeCompare(left.date));
};

export const getSiteConfig = (): SiteConfig => site;

export const getAllBlogPosts = (): BlogPost[] => {
  return sortByDateDescending(blog);
};

export const getRecentBlogPosts = (limit: number): BlogPost[] => {
  return getAllBlogPosts().slice(0, limit);
};

export const getAllWorkEntries = (): WorkEntry[] => {
  return sortByDateDescending(work);
};

export const getWorkEntryBySlug = (slug: string): WorkEntry | undefined => {
  return work.find((entry) => entry.slug === slug);
};

export const getFeaturedWorkEntries = (): WorkEntry[] => {
  return getAllWorkEntries().filter((entry) => entry.featured);
};

export const getAllPlaygroundEntries = (): PlaygroundEntry[] => {
  return sortByDateDescending(playground);
};

export const getPlaygroundEntryBySlug = (
  slug: string,
): PlaygroundEntry | undefined => {
  return playground.find((entry) => entry.slug === slug);
};

export const getRecentPlaygroundEntries = (
  limit: number,
): PlaygroundEntry[] => {
  return getAllPlaygroundEntries().slice(0, limit);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blog.find((post) => post.slug === slug);
};

export const getContentSummary = () => {
  return {
    blogPosts: blog.length,
    workItems: work.length,
    playgroundItems: playground.length,
  };
};
