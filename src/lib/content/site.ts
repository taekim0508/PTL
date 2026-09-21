export type NavSection =
  | "home"
  | "about"
  | "approach"
  | "programs"
  | "daily-life"
  | "admissions"
  | "parent-resources"
  | "contact";

export const navItems: { label: string; section: NavSection }[] = [
  { label: "About", section: "about" },
  { label: "Our Approach", section: "approach" },
  { label: "Programs", section: "programs" },
  { label: "Daily Life", section: "daily-life" },
  { label: "Admissions", section: "admissions" },
  { label: "Parent Resources", section: "parent-resources" },
  { label: "Contact", section: "contact" },
];

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
