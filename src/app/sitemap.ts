import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const publicPaths = [
  "/",
  "/about",
  "/journey",
  "/methodology",
  "/products",
  "/case-studies",
  "/books",
  "/co-intelligent-org",
  "/contact",
  "/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
