import { describe, it, expect } from "vitest";
import { SITE_URL, absoluteUrl, pageMeta } from "@/lib/site";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";

describe("site URLs", () => {
  it("uses the www canonical host", () => {
    expect(SITE_URL).toBe("https://www.suhitanantula.com");
  });

  it("builds absolute https URLs", () => {
    expect(absoluteUrl("/")).toBe(SITE_URL);
    expect(absoluteUrl("/contact")).toBe(`${SITE_URL}/contact`);
  });

  it("sets a unique title, description, and canonical per page", () => {
    const home = pageMeta({
      title: "Suhit Anantula — Co-Intelligent Founder",
      description: "Home description",
      path: "/",
      absoluteTitle: true,
    });
    const about = pageMeta({
      title: "About",
      description: "About description",
      path: "/about",
    });

    expect(home.title).toEqual({
      absolute: "Suhit Anantula — Co-Intelligent Founder",
    });
    expect(about.title).toBe("About");
    expect(home.description).not.toBe(about.description);
    expect(home.alternates?.canonical).toBe(SITE_URL);
    expect(about.alternates?.canonical).toBe(`${SITE_URL}/about`);
  });
});

describe("sitemap and robots", () => {
  it("lists public pages and excludes api", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toContain(SITE_URL);
    expect(urls).toContain(`${SITE_URL}/privacy`);
    expect(urls).toContain(`${SITE_URL}/contact`);
    expect(urls.every((url) => !url.includes("/api/"))).toBe(true);
  });

  it("allows public routes and disallows admin/api/preview", () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules[0] : result.rules;
    expect(rules.allow).toBe("/");
    expect(rules.disallow).toEqual(
      expect.arrayContaining(["/api/", "/admin/", "/preview/"])
    );
    expect(result.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
  });
});
