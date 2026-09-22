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
    <header
      className={`sticky top-0 z-40 border-b bg-cream/95 backdrop-blur transition-shadow ${
        scrolled ? "border-forest/15 shadow-[0_1px_12px_rgba(47,74,56,0.08)]" : "border-forest/10"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-[padding] duration-300 ease-out sm:px-8 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <Logo preload className={scrolled ? "h-12 sm:h-14" : "h-14 sm:h-[76px]"} />

        {/* Shortening "Parent Resources" to "FAQ" bought back enough width for
            the full nav to survive at laptop sizes, so the drawer is now a
            phone and tablet affordance rather than something a 1280px screen
            has to put up with. */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = section === item.section;
            return (
              <button
                key={item.section}
                type="button"
                onClick={() => goTo(item.section)}
                aria-current={active ? "page" : undefined}
                className={`relative px-3 py-2 text-[0.9375rem] font-semibold transition-colors ${
                  active ? "text-forest" : "text-charcoal/70 hover:text-forest"
                }`}
              >
                {item.label}
                {/* Colour alone was carrying the current page. It now has a
                    mark of its own, which also survives a colour-blind read. */}
                <span
                  aria-hidden
                  className={`absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-gold transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={openTour}
            className="rounded-full bg-forest px-5 py-2.5 text-[0.9375rem] font-semibold text-cream shadow-sm transition-colors hover:bg-forest-dark"
          >
            Schedule a Tour
          </button>
        </div>

        <button
          type="button"
          className="rounded-soft p-2 text-forest lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-forest/10 bg-cream lg:hidden">
          <nav
            aria-label="Main"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8"
          >
            {navItems.map((item) => {
              const active = section === item.section;
              return (
                <button
                  key={item.section}
                  type="button"
                  onClick={() => {
                    goTo(item.section);
                    setMobileOpen(false);
                  }}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-soft border-l-[3px] px-3 py-2.5 text-left text-base font-semibold transition-colors ${
                    active
                      ? "border-gold bg-forest/10 text-forest"
                      : "border-transparent text-charcoal/70 hover:text-forest"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => {
                openTour();
                setMobileOpen(false);
              }}
              className="mt-3 w-fit rounded-full bg-forest px-6 py-3 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-forest-dark"
            >
              Schedule a Tour
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
