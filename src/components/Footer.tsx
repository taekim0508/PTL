"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { contactInfo, navItems, tagline } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import Logo from "@/components/Logo";
import { InstagramIcon } from "@/components/SocialIcons";

const telHref = `tel:${contactInfo.phone.replace(/-/g, "")}`;

/**
 * The footer is forest rather than another beige. A page that ends on the
 * darkest surface on the site has an unmistakable bottom, and it stops the
 * last content section from bleeding into the site chrome.
 */
export default function Footer() {
  const { openTour, goTo } = useApp();

  return (
    <footer className="on-forest bg-forest-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr]">
          <div>
            <span className="inline-block rounded-soft bg-cream px-4 py-3">
              <Logo className="h-20" />
            </span>
            <p className="mt-3 font-accent text-2xl text-gold-soft">{tagline}</p>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-cream/75">
              A Christian bilingual preschool where children are known by name,
              loved well, and prepared for what comes next.
            </p>
            <button
              type="button"
              onClick={openTour}
              className="mt-6 rounded-full bg-cream px-6 py-3 text-base font-semibold text-forest shadow-sm transition-colors hover:bg-gold-soft"
            >
              Schedule a Tour
            </button>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-gold-soft">
              Explore
            </h2>
            <ul className="mt-5 space-y-2.5 text-base text-cream/80">
              {navItems.map(({ label, section }) => (
                <li key={section}>
                  <button
                    type="button"
                    onClick={() => goTo(section)}
                    className="transition-colors hover:text-cream"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-gold-soft">
              Visit Us
            </h2>
            <ul className="mt-5 space-y-3 text-base text-cream/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-soft" strokeWidth={1.75} />
                {contactInfo.address}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-gold-soft" strokeWidth={1.75} />
                <a href={telHref} className="transition-colors hover:text-cream">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-gold-soft" strokeWidth={1.75} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-cream"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>

            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-cream/25 px-4 py-2.5 text-base font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              <InstagramIcon className="h-5 w-5" />
              {contactInfo.instagram}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-cream/15 pt-6 text-sm text-cream/60">
          <span>{new Date().getFullYear()} PTL Treehouse. All rights reserved.</span>
          <span>Monday to Friday, 8:30 AM &ndash; 3:30 PM</span>
        </div>
      </div>
    </footer>
  );
}
