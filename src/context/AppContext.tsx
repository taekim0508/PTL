"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { NavSection } from "@/lib/data";

type AppContextValue = {
  section: NavSection;
  goTo: (section: NavSection) => void;
  tourOpen: boolean;
  openTour: () => void;
  closeTour: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [section, setSection] = useState<NavSection>("home");
  const [tourOpen, setTourOpen] = useState(false);

  const value = useMemo<AppContextValue>(
    () => ({
      section,
      goTo: (next) => {
        setSection(next);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      tourOpen,
      openTour: () => setTourOpen(true),
      closeTour: () => setTourOpen(false),
    }),
    [section, tourOpen]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
