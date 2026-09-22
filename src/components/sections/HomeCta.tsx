"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import { BTN_ON_FOREST } from "@/lib/icons";
import SectionHeading from "@/components/SectionHeading";
import SplitFeature from "@/components/SplitFeature";

export default function HomeCta() {
  const { openTour } = useApp();

  return (
    <SplitFeature
      src="/home/visit-ptl.jpg"
      alt="A child practising letters in a workbook at her desk"
      tone="forest"
      reverse
    >
      <SectionHeading
        tone="dark"
        eyebrow="Come and see"
        title="Visit PTL"
        lead="A tour is the best way to know whether a school is right for your family. Come while the children are here, and see what an ordinary morning actually looks like."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={openTour}
          className={BTN_ON_FOREST}
        >
          Schedule a Tour
        </button>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border-2 border-cream/40 px-7 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-cream/10"
        >
          Contact Us
        </Link>
      </div>

      <p className="mt-8 flex items-start gap-2.5 border-t border-cream/20 pt-6 text-base text-cream/75">
        <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-soft" strokeWidth={1.75} />
        {contactInfo.address}
      </p>
    </SplitFeature>
  );
}
