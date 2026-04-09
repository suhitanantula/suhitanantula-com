export type LlvMode = "lines" | "loops" | "vibes";

export interface Chapter {
  lapNumber: number;
  title: string;
  /** UTC ISO 8601 string. Lap unlocks when publishDate <= now (UTC). */
  publishDate: string;
  llvMode: LlvMode;
  content: string;
  slug: string;
  excerpt: string;
}
