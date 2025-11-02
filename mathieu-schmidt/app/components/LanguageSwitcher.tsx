"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.startsWith("/en") ? "en" : "fr";

  const switchLocale = () => {
    const newLocale = currentLocale === "fr" ? "en" : "fr";
    const newPath = `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLocale}
      className="western-badge text-sm px-4 py-2 bg-rodeo-orange hover:bg-rodeo-red text-poster-cream border-2 border-poster-dark transition-all duration-300 shadow-[2px_2px_0_var(--poster-dark)] hover:shadow-[4px_4px_0_var(--poster-dark)] hover:-translate-y-0.5"
      aria-label={`Switch to ${currentLocale === "fr" ? "English" : "French"}`}
    >
      {currentLocale === "fr" ? "EN" : "FR"}
    </button>
  );
}
