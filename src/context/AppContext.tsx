"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { navItems, type NavSection } from "@/lib/data";

type AppContextValue = {
  section: NavSection;
  goTo: (section: NavSection) => void;
  tourOpen: boolean;
  openTour: () => void;
  closeTour: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const pageHashes = new Set<string>(navItems.map((item) => item.section));

export function AppProvider({ children }: { children: ReactNode }) {
  const [section, setSection] = useState<NavSection>("home");
  const [tourOpen, setTourOpen] = useState(false);

  /**
   * Pages are swapped client-side rather than routed, which used to mean the
   * whole site lived at one URL: no back button, and no way to send anyone a
   * link to the tuition table. The current page is mirrored into the hash so
   * both work, while the single-document structure stays as it is.
   *
   * In-page anchors (the chips under each page header) scroll themselves and
   * never touch the hash, so anything here that isn't a page name is somebody
   * else's business and is left alone.
   */
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash === "") {
        setSection("home");
        return;
      }
      if (pageHashes.has(hash)) setSection(hash as NavSection);
    };

    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  const goTo = useCallback((next: NavSection) => {
    setSection(next);
    window.history.pushState(
      null,
      "",
      next === "home" ? window.location.pathname : `#${next}`
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      section,
      goTo,
      tourOpen,
      openTour: () => setTourOpen(true),
      closeTour: () => setTourOpen(false),
    }),
    [section, goTo, tourOpen]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
