"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import Logo from "@/components/Logo";

export default function Nav() {
  const { section, goTo, openTour } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Escape closes the drawer, matching the modal.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // The logo is deliberately large at rest so the brand leads the page, then
  // shrinks once you scroll so a sticky header never eats the viewport.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-[padding] duration-300 ease-out sm:px-8 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <Logo
          preload
          className={scrolled ? "h-14 sm:h-16" : "h-16 sm:h-[92px]"}
        />

        {/* Seven links plus the tour button need the xl breakpoint to fit
            beside the logo. Below that, everything moves into the drawer. */}
        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <button
              key={item.section}
              type="button"
              onClick={() => goTo(item.section)}
              aria-current={section === item.section ? "page" : undefined}
              className={`text-base font-semibold transition-colors ${
                section === item.section
                  ? "text-forest"
                  : "text-charcoal/75 hover:text-forest"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden xl:block">
          <button
            type="button"
            onClick={openTour}
            className="rounded-full bg-forest px-6 py-3 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-forest-dark"
          >
            Schedule a Tour
          </button>
        </div>

        <button
          type="button"
          className="rounded-soft p-2 text-forest xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-forest/10 bg-cream xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                type="button"
                onClick={() => {
                  goTo(item.section);
                  setMobileOpen(false);
                }}
                aria-current={section === item.section ? "page" : undefined}
                className={`rounded-soft px-3 py-2.5 text-left text-base font-semibold ${
                  section === item.section
                    ? "bg-forest/10 text-forest"
                    : "text-charcoal/75"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                openTour();
                setMobileOpen(false);
              }}
              className="mt-2 w-fit rounded-full bg-forest px-6 py-3 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-forest-dark"
            >
              Schedule a Tour
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
