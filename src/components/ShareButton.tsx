"use client";

interface ShareButtonProps {
  lapNumber: number;
  title: string;
}

export default function ShareButton({ lapNumber, title }: ShareButtonProps) {
  function handleShare() {
    const url = `https://suhitanantula.com/co-intelligent-org?lap=${lapNumber}`;
    const text = `Lap ${lapNumber} of The Co-Intelligent Organisation — "${title}" by Suhit Anantula`;

    if (typeof navigator.share === "function") {
      navigator
        .share({ title, text, url })
        .catch(() => {
          // User cancelled or share not supported
          copyToClipboard(url);
        });
    } else {
      copyToClipboard(url);
    }
  }

  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Link copied to clipboard"))
      .catch(() => {
        // Fallback for old browsers
        const el = document.createElement("textarea");
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        alert("Link copied to clipboard");
      });
  }

  return (
    <button
      onClick={handleShare}
      style={{
        background: "none",
        border: "1px solid var(--border)",
        color: "var(--text-muted)",
        padding: "0.4rem 0.9rem",
        fontSize: "0.8rem",
        cursor: "pointer",
        borderRadius: "2px",
        fontFamily: "inherit",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
      }}
    >
      <span>↗</span> Share Lap {lapNumber}
    </button>
  );
}
