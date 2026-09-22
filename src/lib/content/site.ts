/**
 * Every page is a real route. The hash is deliberately left free so it can
 * carry in-page anchors again: /admissions#tuition goes to the tuition table,
 * not the top of the page.
 */
export type NavSection =
  | "home"
  | "about"
  | "approach"
  | "programs"
  | "daily-life"
  | "admissions"
  | "faq"
  | "contact";

export type NavItem = {
  label: string;
  section: NavSection;
  href: string;
};

/**
 * Nav labels name the page they open. "FAQ" replaced "Parent Resources"
 * because the page it leads to is titled Frequently Asked Questions and
 * contains nothing else; the old label promised a library that isn't there.
 */
export const navItems: NavItem[] = [
  { label: "About", section: "about", href: "/about" },
  { label: "Our Approach", section: "approach", href: "/our-approach" },
  { label: "Programs", section: "programs", href: "/programs" },
  { label: "Daily Life", section: "daily-life", href: "/daily-life" },
  { label: "Admissions", section: "admissions", href: "/admissions" },
  { label: "FAQ", section: "faq", href: "/faq" },
  { label: "Contact", section: "contact", href: "/contact" },
];

/**
 * The canonical origin, used for metadata, the sitemap, and share cards.
 *
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project when the school moves to its
 * own domain. Getting this wrong does not break the site, it just points
 * every canonical link and share card at the old address, which is the kind
 * of thing nobody notices for a month.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ptl-green.vercel.app";

export const contactInfo = {
  name: "PTL Treehouse Early Learning Center",
  address: "16703 22nd Ave SE, Bothell, WA 98012",
  phone: "425-753-1550",
  email: "info@ptltreehouse.com",
  instagram: "@ptltreehouse",
  instagramUrl: "https://www.instagram.com/ptltreehouse",
};

/** The reference table at the front of the 2026 content doc. */
export const keyFacts = [
  { label: "Ages served", value: "2.5 to 5 years" },
  { label: "Hours", value: "Monday to Friday, 8:30 AM – 3:30 PM" },
  { label: "Teacher-to-student ratio", value: "1:7" },
  { label: "Years in operation", value: "13+ years" },
  { label: "Parent app", value: "Brightwheel" },
  {
    label: "School calendar",
    value: "Follows the Everett School District calendar. Closed in August.",
  },
];

export const tagline = "Play. Pray. Prepare.";
