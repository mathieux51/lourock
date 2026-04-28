"use client";

import { Link as LinkIcon } from "lucide-react";
import { useState } from "react";

type AnchorLinkProps = {
  /** id of the section to link to (also becomes the URL hash) */
  targetId: string;
  /** color of the icon (defaults to currentColor) */
  color?: string;
  /** size in px */
  size?: number;
  className?: string;
  /** aria label, defaults to "Copy link to section" */
  ariaLabel?: string;
};

/**
 * A small clickable anchor icon that:
 *  - updates the URL hash to `#targetId`
 *  - scrolls smoothly to the target
 *  - copies the full URL with hash to the clipboard
 * Designed to be placed inline next to a section heading. The icon is
 * visible on hover/focus of the parent (use `group` on the heading and
 * className includes `group-hover:opacity-100`).
 */
export function AnchorLink({
  targetId,
  color,
  size = 22,
  className = "",
  ariaLabel = "Copy link to section",
}: AnchorLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window === "undefined") return;

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const newUrl = `${window.location.origin}${window.location.pathname}#${targetId}`;
    history.replaceState(null, "", `#${targetId}`);

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(newUrl)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        })
        .catch(() => {
          // Silent fail: user still got scrolled and URL updated.
        });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      title={copied ? "Link copied!" : "Copy link to this section"}
      className={`anchor-link inline-flex items-center justify-center align-middle opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity ml-2 ${className}`}
      style={{ color: color ?? "currentColor" }}
    >
      <LinkIcon size={size} />
      {copied && (
        <span
          className="ml-1 readable-text text-sm"
          style={{ color: "currentColor" }}
        >
          ✓
        </span>
      )}
    </a>
  );
}
