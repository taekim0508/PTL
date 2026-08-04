"use client";

import { AppProvider, useApp } from "@/context/AppContext";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TourModal from "@/components/TourModal";
import VideoModal from "@/components/VideoModal";
import HomeSection from "@/components/sections/Home";
import AboutUs from "@/components/sections/AboutUs";
import ProgramsPage from "@/components/sections/ProgramsPage";
import WhyPTL from "@/components/sections/WhyPTL";
import ParentResources from "@/components/sections/ParentResources";
import Contact from "@/components/sections/Contact";

function ActiveSection() {
  const { section } = useApp();

  switch (section) {
    case "about":
      return <AboutUs />;
    case "programs":
      return <ProgramsPage />;
    case "why-ptl":
      return <WhyPTL />;
    case "parent-resources":
      return <ParentResources />;
    case "contact":
      return <Contact />;
    case "home":
    default:
      return <HomeSection />;
  }
}

function SiteShell() {
  const { tourOpen, videoOpen } = useApp();

  return (
    <>
      <AnnouncementBanner />
      <Nav />
      <main className="flex-1">
        <ActiveSection />
      </main>
      <Footer />
      {tourOpen && <TourModal />}
      {videoOpen && <VideoModal />}
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
