"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import Logo from "@/components/Logo";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function Footer() {
  const { openTour } = useApp();

  return (
    <footer className="border-t border-forest/10 bg-cream-soft">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal/70">
              A Christian bilingual preschool where children are known by
              name, loved well, and prepared for what comes next.
            </p>
            <button
              type="button"
              onClick={openTour}
              className="ui-button-primary mt-5"
            >
              Schedule a Tour
            </button>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-forest">
              Visit Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-charcoal/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                {contactInfo.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                {contactInfo.email}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-forest">
              Follow Our Days
            </h3>
            <p className="mt-4 text-sm text-charcoal/75">
              See classroom moments on Instagram and Facebook.
            </p>
            <div className="mt-4 flex gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-forest/10 bg-forest/5 text-forest">
                <InstagramIcon className="h-5 w-5" />
              </span>
              <span className="flex h-10 w-10 items-center justify-center border border-forest/10 bg-forest/5 text-forest">
                <FacebookIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-forest/10 pt-6 text-xs text-charcoal/50">
          {new Date().getFullYear()} PTL Treehouse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
