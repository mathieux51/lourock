"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Link as LinkIcon, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

const AUDIO_TRACKS = [
  { file: "ballade-lyrique", key: "media.tracks.ballade-lyrique" },
  { file: "criquet-cowboy", key: "media.tracks.criquet-cowboy" },
  { file: "la-jument-maquam", key: "media.tracks.la-jument-maquam" },
];

const VIDEOS = [{ file: "sable-rouge", key: "media.tracks.sable-rouge" }];

type ShareButtonProps = {
  trackId: string;
  bgColor: string;
  shareLabel: string;
  copiedLabel: string;
};

function ShareButton({
  trackId,
  bgColor,
  shareLabel,
  copiedLabel,
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
          // Silent fallback: URL hash is still updated.
        });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 comic-text text-base px-4 py-2 cursor-pointer"
      style={{
        backgroundColor: "white",
        color: bgColor,
        border: "2px solid black",
        boxShadow: "3px 3px 0px #000",
      }}
      aria-label={copied ? copiedLabel : shareLabel}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          {copiedLabel}
        </>
      ) : (
        <>
          <LinkIcon className="w-4 h-4" />
          {shareLabel}
        </>
      )}
    </button>
  );
}

export default function MediaPage() {
  const { t, locale } = useTranslation();
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // On load (and on hashchange), scroll to and auto-play the targeted track.
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;

      const target = document.getElementById(hash);
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Auto-play the matching media element if available.
      const audio = audioRefs.current[hash];
      const video = videoRefs.current[hash];
      const media = audio ?? video;
      if (media) {
        // Best-effort: browsers may block autoplay without user gesture.
        media.play().catch(() => {
          /* ignore autoplay block; user can press play */
        });
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <Link
          href={`/${locale}`}
          className="inline-block comic-text text-lg mb-6 px-4 py-2"
          style={{
            backgroundColor: "white",
            color: "#3F2E10",
            border: "2px solid black",
            boxShadow: "3px 3px 0px #000",
            textDecoration: "none",
          }}
        >
          {t("media.back")}
        </Link>

        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="comic-panel comic-border-thick mb-6 p-6 text-center"
          style={{ backgroundColor: "#CA7625" }}
        >
          <h1
            className="comic-text text-5xl md:text-7xl mb-2"
            style={{
              color: "white",
              textShadow: "3px 3px 0px #795B1A, 6px 6px 0px #0D0E08",
            }}
          >
            {t("media.heading")}
          </h1>
          <p className="readable-text text-lg md:text-xl" style={{ color: "white" }}>
            {t("media.subheading")}
          </p>
        </motion.header>

        {/* Audio section */}
        <section id="audio" className="mb-6 scroll-mt-24">
          <h2
            className="comic-text text-3xl md:text-4xl mb-4"
            style={{
              color: "#3F2E10",
              textShadow: "2px 2px 0px #CA7625",
            }}
          >
            {t("media.audio")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AUDIO_TRACKS.map((track) => (
              <motion.div
                key={track.file}
                id={track.file}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="comic-panel p-4 scroll-mt-24"
                style={{ backgroundColor: "#385C5F" }}
              >
                <p
                  className="comic-text text-2xl mb-3 text-center"
                  style={{
                    color: "white",
                    textShadow: "2px 2px 0px #0D0E08",
                  }}
                >
                  {t(track.key)}
                </p>
                <audio
                  ref={(el) => {
                    audioRefs.current[track.file] = el;
                  }}
                  controls
                  preload="none"
                  className="w-full mb-3"
                  src={`/media/${track.file}.mp3`}
                />
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`/media/${track.file}.mp3`}
                    download
                    className="inline-flex items-center gap-2 comic-text text-base px-4 py-2"
                    style={{
                      backgroundColor: "white",
                      color: "#385C5F",
                      border: "2px solid black",
                      boxShadow: "3px 3px 0px #000",
                      textDecoration: "none",
                    }}
                  >
                    <Download className="w-4 h-4" />
                    {t("media.download")}
                  </a>
                  <ShareButton
                    trackId={track.file}
                    bgColor="#385C5F"
                    shareLabel={t("media.share")}
                    copiedLabel={t("media.linkCopied")}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Video section */}
        <section id="video" className="mb-10 scroll-mt-24">
          <h2
            className="comic-text text-3xl md:text-4xl mb-4"
            style={{
              color: "#3F2E10",
              textShadow: "2px 2px 0px #795B1A",
            }}
          >
            {t("media.video")}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {VIDEOS.map((v) => (
              <motion.div
                key={v.file}
                id={v.file}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="comic-panel p-4 scroll-mt-24"
                style={{ backgroundColor: "#3F2E10" }}
              >
                <p
                  className="comic-text text-2xl mb-3 text-center"
                  style={{
                    color: "white",
                    textShadow: "2px 2px 0px #0D0E08",
                  }}
                >
                  {t(v.key)}
                </p>
                <video
                  ref={(el) => {
                    videoRefs.current[v.file] = el;
                  }}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full max-h-[600px] mx-auto mb-3"
                  src={`/media/${v.file}.mp4`}
                />
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`/media/${v.file}.mp4`}
                    download
                    className="inline-flex items-center gap-2 comic-text text-base px-4 py-2"
                    style={{
                      backgroundColor: "white",
                      color: "#3F2E10",
                      border: "2px solid black",
                      boxShadow: "3px 3px 0px #000",
                      textDecoration: "none",
                    }}
                  >
                    <Download className="w-4 h-4" />
                    {t("media.download")}
                  </a>
                  <ShareButton
                    trackId={v.file}
                    bgColor="#3F2E10"
                    shareLabel={t("media.share")}
                    copiedLabel={t("media.linkCopied")}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
