"use client";

import { Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";

type ShareButtonProps = {
  /** id of the element to link to (used as the URL hash) */
  trackId: string;
  /** color for the icon/text */
  color: string;
  /** label shown next to the icon (e.g. "Share" / "Partager") */
  shareLabel: string;
  /** label shown after copy succeeds (e.g. "Link copied!") */
  copiedLabel: string;
  className?: string;
};

/**
 * Small "share this track" button. On click:
 *  - updates the URL hash to #trackId via history.replaceState
 *  - copies the full URL with hash to the clipboard
 *  - shows a brief check + "copied" confirmation
 */
export function ShareButton({
  trackId,
  color,
  shareLabel,
  copiedLabel,
  className = "",
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}${window.location.pathname}#${trackId}`;
    history.replaceState(null, "", `#${trackId}`);

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          // Silent fallback: hash is still updated, user can copy from URL bar.
        });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={copied ? copiedLabel : shareLabel}
      className={`inline-flex items-center gap-1 comic-text text-sm px-3 py-1 cursor-pointer ${className}`}
      style={{
        backgroundColor: "white",
        color,
        border: "2px solid black",
        boxShadow: "2px 2px 0px #000",
      }}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          {copiedLabel}
        </>
      ) : (
        <>
          <LinkIcon className="w-3.5 h-3.5" />
          {shareLabel}
        </>
      )}
    </button>
  );
}
