import type { WorkEntry } from "#content";

export const formatWorkEntryCornerMeta = (entry: WorkEntry) => {
  return entry.year ?? new Date(entry.date).getFullYear().toString();
};

export const formatWorkEntryMeta = (entry: WorkEntry) => {
  return entry.industries[0];
};
