"use client";

import { useApp } from "@/context/AppContext";
import ContentPhoto from "@/components/ContentPhoto";

export default function HomeCta() {
  const { openTour } = useApp();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid gap-10 rounded-soft border border-gold-soft/70 bg-gold-soft/30 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <ContentPhoto
          src="/home/black-kid-smiling.avif"
          alt="Preschoolers laughing together over building toys at a classroom table"
          className="aspect-[4/3]"
          sizes="(max-width: 1024px) 100vw, 44vw"
        />

        <div>
          <h2 className="font-display text-3xl font-semibold text-forest sm:text-4xl">
            Visit PTL
          </h2>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-charcoal/75">
            We&apos;d love to meet your family and show you what life at PTL
            feels like in person. A tour is the best way to experience the
            classroom atmosphere and meet our team.
          </p>
          <button
            type="button"
            onClick={openTour}
            className="mt-6 rounded-full bg-forest px-7 py-3.5 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-forest-dark"
          >
            Schedule a Tour
          </button>
        </div>
      </div>
    </section>
  );
}
