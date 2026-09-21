"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { contactInfo, navItems } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import Logo from "@/components/Logo";
import { InstagramIcon } from "@/components/SocialIcons";

const telHref = `tel:${contactInfo.phone.replace(/-/g, "")}`;

export default function Footer() {
  const { openTour, goTo } = useApp();

  return (
    <footer className="border-t border-forest/10 bg-cream-soft">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr]">
          <div>
            <Logo className="h-24" />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-charcoal/70">
              A Christian bilingual preschool where children are known by
              name, loved well, and prepared for what comes next.
            </p>
            <button
              type="button"
              onClick={openTour}
              className="mt-5 rounded-full bg-forest px-6 py-3 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-forest-dark"
            >
              Schedule a Tour
            </button>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-forest">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-base text-charcoal/75">
              {navItems.map(({ label, section }) => (
                <li key={section}>
                  <button
                    type="button"
                    onClick={() => goTo(section)}
                    className="transition-colors hover:text-forest"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-forest">Visit Us</h3>
            <ul className="mt-4 space-y-3 text-base text-charcoal/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                {contactInfo.address}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                <a href={telHref} className="transition-colors hover:text-forest">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-forest"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>

            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-forest/10 px-4 py-2.5 text-base font-semibold text-forest transition-colors hover:bg-forest/15"
            >
              <InstagramIcon className="h-5 w-5" />
              {contactInfo.instagram}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-forest/10 pt-6 text-xs text-charcoal/50">
          <span>{new Date().getFullYear()} PTL Treehouse. All rights reserved.</span>
          <span>Monday to Friday, 8:30 AM &ndash; 3:30 PM</span>
        </div>
      </div>
    </footer>
  );
}
