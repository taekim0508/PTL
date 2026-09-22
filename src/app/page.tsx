"use client";

import { AppProvider, useApp } from "@/context/AppContext";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TourModal from "@/components/TourModal";
import HomeSection from "@/components/sections/Home";
import AboutUs from "@/components/sections/AboutUs";
import Approach from "@/components/sections/Approach";
import ProgramsPage from "@/components/sections/ProgramsPage";
import DailyLife from "@/components/sections/DailyLife";
import Admissions from "@/components/sections/Admissions";
import ParentResources from "@/components/sections/ParentResources";
import Contact from "@/components/sections/Contact";

function ActiveSection() {
  const { section } = useApp();

  switch (section) {
    case "about":
      return <AboutUs />;
    case "approach":
      return <Approach />;
    case "programs":
      return <ProgramsPage />;
    case "daily-life":
      return <DailyLife />;
    case "admissions":
      return <Admissions />;
    case "faq":
      return <ParentResources />;
    case "contact":
      return <Contact />;
    case "home":
    default:
      return <HomeSection />;
  }
}

function SiteShell() {
  const { tourOpen } = useApp();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AnnouncementBanner />
      <Nav />
      <main id="main" tabIndex={-1} className="flex-1">
        <ActiveSection />
      </main>
      <Footer />
      {tourOpen && <TourModal />}
    </>
  );
}

export default function Page() {
  return (
    <AppProvider>
      <SiteShell />
    </AppProvider>
  );
}
