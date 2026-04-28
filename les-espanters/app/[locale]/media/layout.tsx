import type { Metadata } from "next";
import frTranslations from "../../translations/fr.json";
import enTranslations from "../../translations/en.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const translations = locale === "fr" ? frTranslations : enTranslations;

  return {
    title: translations.media.pageTitle,
    description: translations.media.pageDescription,
    alternates: {
      canonical: `https://lesespanters.lourock.com/${locale}/media`,
      languages: {
        fr: "https://lesespanters.lourock.com/fr/media",
        en: "https://lesespanters.lourock.com/en/media",
      },
    },
    openGraph: {
      title: translations.media.pageTitle,
      description: translations.media.pageDescription,
      url: `https://lesespanters.lourock.com/${locale}/media`,
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
  };
}

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
