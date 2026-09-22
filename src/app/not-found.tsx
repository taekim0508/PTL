import Link from "next/link";
import { navItems } from "@/lib/data";
import { BTN_PRIMARY } from "@/lib/icons";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

/**
 * A 404 inside the site chrome, with somewhere to go. Splitting the site into
 * real routes means a mistyped URL is now possible, where before every path
 * resolved to the one page.
 */
export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8 sm:py-32">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-dark">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-forest sm:text-5xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-charcoal/80">
        The link may be out of date, or the address may have a typo in it.
        Here is everything on the site.
      </p>

      <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
        {navItems.map(({ label, section, href }) => (
          <li key={section}>
            <Link
              href={href}
              className="inline-block rounded-full border border-forest/20 bg-white px-4 py-2 text-sm font-semibold text-forest shadow-sm transition-colors hover:border-forest/50"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/" className={`${BTN_PRIMARY} mt-10`}>
        Back to the home page
      </Link>
    </section>
  );
}
