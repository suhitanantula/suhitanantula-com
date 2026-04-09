"use client";

import { useEffect, useState } from "react";

function getNextLapTimeUTC(): Date {
  const now = new Date();

  // Walk forward up to 8 days to find next Monday 9:00 AM Adelaide
  for (let daysAhead = 0; daysAhead <= 8; daysAhead++) {
    const candidate = new Date(now.getTime() + daysAhead * 86400 * 1000);

    // What weekday is this moment in Adelaide?
    const weekday = new Intl.DateTimeFormat("en", {
      timeZone: "Australia/Adelaide",
      weekday: "short",
    }).format(candidate);

    if (weekday !== "Mon") continue;

    // Get the Adelaide date string for this candidate
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Australia/Adelaide",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(candidate);

    const y = parts.find((p) => p.type === "year")!.value;
    const mo = parts.find((p) => p.type === "month")!.value;
    const d = parts.find((p) => p.type === "day")!.value;

    // Construct "2026-04-20T09:00:00" in Adelaide local time
    // Start with midnight UTC on this Adelaide calendar day, offset by Adelaide UTC offset
    // Use the trick: create a UTC date that represents midnight Adelaide, then add 9h
    // ACST = UTC+9:30 → midnight Adelaide = UTC -9:30 (i.e., UTC midnight - 570 min = prev day 14:30 UTC)
    // But we don't know if ACST or ACDT — detect via Intl

    // Strategy: take noon UTC on that day, see what Adelaide offset is, then compute 9am Adelaide
    const noonUTC = new Date(`${y}-${mo}-${d}T00:00:00Z`);

    // Get Adelaide hour/minute when it's 00:00 UTC on this date
    const offsetParts = new Intl.DateTimeFormat("en", {
      timeZone: "Australia/Adelaide",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(noonUTC);

    const utcMidnightAsAdelaideH = parseInt(
      offsetParts.find((p) => p.type === "hour")!.value
    );
    const utcMidnightAsAdelaideM = parseInt(
      offsetParts.find((p) => p.type === "minute")!.value
    );

    // UTC offset in minutes (positive = east of UTC)
    const offsetMinutes = utcMidnightAsAdelaideH * 60 + utcMidnightAsAdelaideM;

    // 9:00 AM Adelaide = UTC midnight on that day - offset + 9*60 min
    const nineAMAdelaideUTC = new Date(
      noonUTC.getTime() - offsetMinutes * 60_000 + 9 * 3600_000
    );

    // Verify it's actually 9:00 Adelaide (DST edge case guard)
    const verifyH = parseInt(
      new Intl.DateTimeFormat("en", {
        timeZone: "Australia/Adelaide",
        hour: "2-digit",
        hour12: false,
      }).format(nineAMAdelaideUTC)
    );

    let finalTarget = nineAMAdelaideUTC;
    if (verifyH !== 9) {
      // Adjust by the difference
      finalTarget = new Date(
        nineAMAdelaideUTC.getTime() + (9 - verifyH) * 3600_000
      );
    }

    if (finalTarget > now) {
      return finalTarget;
    }
  }

  // Fallback: 7 days from now
  return new Date(now.getTime() + 7 * 86400 * 1000);
}

function formatCountdown(ms: number): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const totalSeconds = Math.floor(ms / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function LapCountdown({
  currentLap,
  totalLaps = 21,
}: {
  currentLap: number;
  totalLaps?: number;
}) {
  const [countdown, setCountdown] = useState<ReturnType<
    typeof formatCountdown
  > | null>(null);

  useEffect(() => {
    const target = getNextLapTimeUTC();

    const tick = () => {
      const ms = target.getTime() - Date.now();
      setCountdown(formatCountdown(ms));
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const nextLap = currentLap + 1;

  return (
    <div
      style={{
        background: "var(--legal-gray)",
        color: "#fff",
        padding: "1.5rem 2rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Progress bar */}
      <div style={{ flex: "1 1 260px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Race Progress
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.9)",
              fontWeight: 500,
            }}
          >
            Lap {currentLap} / {totalLaps}
          </span>
        </div>
        <div
          style={{
            height: "4px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${(currentLap / totalLaps) * 100}%`,
              background: "var(--helix-blue)",
              transition: "width 0.5s ease",
            }}
          />
        </div>
      </div>

      {/* Countdown */}
      {nextLap <= totalLaps && (
        <div style={{ flex: "0 0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "0.4rem",
            }}
          >
            Lap {nextLap} in
          </p>
          {countdown ? (
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "baseline",
              }}
            >
              {[
                { v: countdown.days, label: "d" },
                { v: countdown.hours, label: "h" },
                { v: countdown.minutes, label: "m" },
                { v: countdown.seconds, label: "s" },
              ].map(({ v, label }) => (
                <span
                  key={label}
                  style={{
                    fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  {pad(v)}
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.4)",
                      marginLeft: "1px",
                    }}
                  >
                    {label}
                  </span>
                </span>
              ))}
            </div>
          ) : (
            <div
              style={{
                fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              --:--:--
            </div>
          )}
        </div>
      )}
    </div>
  );
}
