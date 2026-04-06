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

export const getAllWorkEntries = (): WorkEntry[] => {
  return sortByDateDescending(work);
};

export const getFeaturedWorkEntries = (): WorkEntry[] => {
  return getAllWorkEntries().filter((entry) => entry.featured);
};

export const getAllPlaygroundEntries = (): PlaygroundEntry[] => {
  return sortByDateDescending(playground);
};

export const getContentSummary = () => {
  return {
    blogPosts: blog.length,
    workItems: work.length,
    playgroundItems: playground.length,
  };
};
