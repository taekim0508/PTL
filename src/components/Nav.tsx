"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import Logo from "@/components/Logo";

export default function Nav() {
  const { section, goTo, openTour } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.section}
              type="button"
              onClick={() => goTo(item.section)}
              data-active={section === item.section ? "true" : "false"}
              className={`ui-nav-link text-sm font-semibold ${
                section === item.section
                  ? "text-forest"
                  : "text-charcoal/70 hover:text-forest"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={openTour}
            className="ui-button-primary"
          >
            Schedule a Tour
          </button>
        </div>

        <button
          type="button"
          className="p-2 text-forest lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-forest/10 bg-cream px-5 pb-5 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                type="button"
                onClick={() => {
                  goTo(item.section);
                  setMobileOpen(false);
                }}
                className={`px-3 py-2.5 text-left text-sm font-semibold ${
                  section === item.section
                    ? "bg-forest/10 text-forest"
                    : "text-charcoal/70"
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
                className="ui-button-primary mt-2 w-fit"
              >
                Schedule a Tour
              </button>
          </nav>
        </div>
      )}
    </header>
  );
}
