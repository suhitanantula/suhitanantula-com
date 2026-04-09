import { describe, it, expect } from "vitest";
import { getPublishedChapters, getAllChapters } from "@/lib/chapters";

// Lap 1 publishDate: 2026-04-19T23:30:00Z
// ACST = UTC+9:30 → this is Monday April 20 9:00 AM Adelaide
const LAP1_UTC = new Date("2026-04-19T23:30:00Z");
const LAP2_UTC = new Date("2026-04-26T23:30:00Z");

describe("publishDate gating logic", () => {
  it("returns no chapters when now is before Lap 1", () => {
    const before = new Date(LAP1_UTC.getTime() - 1); // 1ms before Lap 1
    const published = getPublishedChapters(before);
    expect(published).toHaveLength(0);
  });

  it("returns exactly Lap 1 when now equals Lap 1 publishDate", () => {
    const atLap1 = new Date(LAP1_UTC.getTime());
    const published = getPublishedChapters(atLap1);
    expect(published).toHaveLength(1);
    expect(published[0].lapNumber).toBe(1);
  });

  it("returns Lap 1 and Lap 2 once Lap 2 has published", () => {
    const afterLap2 = new Date(LAP2_UTC.getTime() + 1000);
    const published = getPublishedChapters(afterLap2);
    expect(published.length).toBeGreaterThanOrEqual(2);
    expect(published[0].lapNumber).toBe(1);
    expect(published[1].lapNumber).toBe(2);
  });

  it("never returns more chapters than total (21)", () => {
    const farFuture = new Date("2030-01-01T00:00:00Z");
    const published = getPublishedChapters(farFuture);
    expect(published.length).toBeLessThanOrEqual(21);
  });

  it("all 21 chapters are in the data file", () => {
    const all = getAllChapters();
    expect(all).toHaveLength(21);
  });

  it("chapters are in ascending lapNumber order", () => {
    const all = getAllChapters();
    for (let i = 1; i < all.length; i++) {
      expect(all[i].lapNumber).toBeGreaterThan(all[i - 1].lapNumber);
    }
  });
});

describe("ACST timezone math (publishDate correctness)", () => {
  it("Lap 1 publishDate is 2026-04-19T23:30:00Z (= April 20 9am ACST)", () => {
    const all = getAllChapters();
    expect(all[0].publishDate).toBe("2026-04-19T23:30:00Z");
  });

  it("Lap 1 publishDate resolves to Monday April 20 9:00 AM in Adelaide", () => {
    const lap1Date = new Date("2026-04-19T23:30:00Z");

    const adelaideParts = new Intl.DateTimeFormat("en-AU", {
      timeZone: "Australia/Adelaide",
      weekday: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(lap1Date);

    const weekday = adelaideParts.find((p) => p.type === "weekday")!.value;
    const hour = adelaideParts.find((p) => p.type === "hour")!.value;
    const minute = adelaideParts.find((p) => p.type === "minute")!.value;

    expect(weekday).toBe("Monday");
    expect(parseInt(hour, 10)).toBe(9);
    expect(minute).toBe("00");
  });

  it("each subsequent lap is exactly 7 days after the previous", () => {
    const all = getAllChapters();
    for (let i = 1; i < all.length; i++) {
      const prev = new Date(all[i - 1].publishDate).getTime();
      const curr = new Date(all[i].publishDate).getTime();
      const diffMs = curr - prev;
      const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
      expect(diffMs).toBe(sevenDaysMs);
    }
  });

  it("all laps drop on Monday in Adelaide timezone", () => {
    const all = getAllChapters();
    for (const chapter of all) {
      const weekday = new Intl.DateTimeFormat("en-AU", {
        timeZone: "Australia/Adelaide",
        weekday: "long",
      }).format(new Date(chapter.publishDate));
      expect(weekday).toBe("Monday");
    }
  });
});
