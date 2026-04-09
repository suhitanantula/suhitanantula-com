import type { Chapter } from "@/types/chapter";
import rawChapters from "@/data/chapters.json";

const chapters = rawChapters as Chapter[];

/** Returns chapters where publishDate <= now (UTC). */
export function getPublishedChapters(now: Date = new Date()): Chapter[] {
  return chapters.filter(
    (ch) => new Date(ch.publishDate).getTime() <= now.getTime()
  );
}

/** Returns all 21 chapters in order. */
export function getAllChapters(): Chapter[] {
  return [...chapters].sort((a, b) => a.lapNumber - b.lapNumber);
}

/** Format a publishDate as a human-readable string in Adelaide timezone. */
export function formatLapDate(publishDate: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Adelaide",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(publishDate));
}

/** Short date for display on locked cards. */
export function formatShortDate(publishDate: string): string {
  return new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Adelaide",
    day: "numeric",
    month: "short",
  }).format(new Date(publishDate));
}
