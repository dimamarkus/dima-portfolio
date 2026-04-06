import { getSiteConfig } from "@/lib/content";

export const getSiteUrl = () => {
  return getSiteConfig().siteUrl;
};

export const getAbsoluteUrl = (path: string = "/") => {
  return new URL(path, getSiteUrl()).toString();
};
