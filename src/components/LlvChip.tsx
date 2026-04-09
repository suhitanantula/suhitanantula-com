import type { LlvMode } from "@/types/chapter";

const CONFIG: Record<
  LlvMode,
  { symbol: string; label: string; bg: string; color: string; border: string }
> = {
  lines: {
    symbol: "▲",
    label: "Lines",
    bg: "#eff4ff",
    color: "#2D5BFF",
    border: "#c7d7fe",
  },
  loops: {
    symbol: "↺",
    label: "Loops",
    bg: "#f0fdf4",
    color: "#16a34a",
    border: "#bbf7d0",
  },
  vibes: {
    symbol: "∼",
    label: "Vibes",
    bg: "#fff7ed",
    color: "#ea580c",
    border: "#fed7aa",
  },
};

export default function LlvChip({ mode }: { mode: LlvMode }) {
  const c = CONFIG[mode];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
        background: c.bg,
        color: c.color,
        border: `1px solid ${c.border}`,
        padding: "0.2rem 0.6rem",
        borderRadius: "999px",
        fontSize: "0.7rem",
        fontFamily: "var(--font-mono), IBM Plex Mono, monospace",
        fontWeight: 500,
        letterSpacing: "0.04em",
        whiteSpace: "nowrap",
      }}
    >
      <span>{c.symbol}</span>
      {c.label}
    </span>
  );
}
