import { contactInfo, keyFacts, siteUrl, tagline } from "@/lib/data";

const [street, city, stateZip] = contactInfo.address.split(", ");
const [region, postalCode] = stateZip.split(" ");

/**
 * Schema.org data for the school itself. Titles and descriptions tell a
 * search engine what a page is about; this tells it what the business is:
 * a preschool, at this address, on this phone number, open these hours. It
 * is what a local result is built from.
 */
const schema = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: contactInfo.name,
  alternateName: "PTL Treehouse",
  slogan: tagline,
  description:
    "A Christian bilingual (Korean-English) preschool for ages 2.5 to 5, built on play-based learning, faith, and community.",
  url: siteUrl,
  logo: `${siteUrl}/ptl-logo.svg`,
  image: `${siteUrl}/og.jpg`,
  telephone: contactInfo.phone,
  email: contactInfo.email,
  sameAs: [contactInfo.instagramUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress: street,
    addressLocality: city,
    addressRegion: region,
    postalCode,
    addressCountry: "US",
  },
  areaServed: ["Bothell, WA", "Mill Creek, WA", "Everett, WA"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "15:30",
    },
  ],
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "Children ages 2.5 to 5",
  },
  knowsLanguage: ["en", "ko"],
  additionalProperty: keyFacts.map(({ label, value }) => ({
    "@type": "PropertyValue",
    name: label,
    value,
  })),
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Every value comes from our own content modules, none from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
