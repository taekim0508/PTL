"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type AppContextValue = {
  tourOpen: boolean;
  openTour: () => void;
  closeTour: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

/**
 * Only the tour modal lives here now. Which page you are on used to be React
 * state in this provider, mirrored into the location hash; it is the router's
 * job, and `usePathname` answers it wherever it is asked.
 */
export function AppProvider({ children }: { children: ReactNode }) {
  const [tourOpen, setTourOpen] = useState(false);

  const value = useMemo<AppContextValue>(
    () => ({
      tourOpen,
      openTour: () => setTourOpen(true),
      closeTour: () => setTourOpen(false),
    }),
    [tourOpen]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
