"use client";

import { useApp } from "@/context/AppContext";
import ContentPhoto from "@/components/ContentPhoto";

export default function HomeCta() {
  const { openTour } = useApp();

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-11">
      <div className="grid gap-6 border border-forest/10 bg-cream-soft/85 px-5 py-6 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <ContentPhoto
          src="/home/fall-event.jpeg"
          alt="PTL Treehouse fall event with teachers and children"
          className="aspect-[4/3]"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Visit PTL
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-forest sm:text-4xl">
            Come see if PTL Treehouse is the right fit for your family
          </h2>
          <p className="mt-3 max-w-xl text-base leading-8 text-charcoal/72">
            We&apos;d love to meet your family and show you what life at PTL feels
            like in person. A tour is the best way to experience the classroom
            atmosphere and meet our team.
          </p>
          <button
            type="button"
            onClick={openTour}
            className="ui-button-primary mt-5"
          >
            Schedule a Tour
          </button>
        </div>
      </div>
    </section>
  );
}
