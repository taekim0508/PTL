import type { Metadata } from "next";

type Args = {
  /** Slotted into the "%s | PTL Treehouse" template from the root layout. */
  title: string;
  description: string;
  /** The route, used for the canonical URL and the share card. */
  path: string;
};

/**
 * Per-page metadata. The root layout's title template does not reach
 * `openGraph.title`, so the full title is spelled out for the share cards.
 */
export function pageMetadata({ title, description, path }: Args): Metadata {
  const fullTitle = `${title} | PTL Treehouse`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "PTL Treehouse",
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "PTL Treehouse" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og.jpg"],
    },
  };
}
