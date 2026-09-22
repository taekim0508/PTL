"use client";

import type { ReactNode } from "react";
import { AppProvider, useApp } from "@/context/AppContext";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TourModal from "@/components/TourModal";
import HashScroll from "@/components/HashScroll";

function Chrome({ children }: { children: ReactNode }) {
  const { tourOpen } = useApp();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <HashScroll />
      <AnnouncementBanner />
      <Nav />
      <main id="main" tabIndex={-1} className="flex-1">
        {children}
      </main>
      <Footer />
      {tourOpen && <TourModal />}
    </>
  );
}

/**
 * The chrome every route shares. It sits in the root layout so the header,
 * the footer and the tour modal survive a navigation instead of remounting.
 */
export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <Chrome>{children}</Chrome>
    </AppProvider>
  );
}
