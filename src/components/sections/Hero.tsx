"use client";

import { useApp } from "@/context/AppContext";
import InstagramReelEmbed from "@/components/InstagramReelEmbed";

export default function Hero() {
  const { goTo, openTour } = useApp();

  return (
    <section className="mx-auto max-w-7xl px-5 pb-7 pt-8 sm:px-8 sm:pb-8 sm:pt-10">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,360px)] lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
            Dual-Language Korean-English Christian Preschool
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-forest sm:text-5xl lg:text-6xl">
            Your Child Will Only Be Little Once.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-charcoal/72 sm:text-lg">
            For over 13 years, PTL Treehouse has helped children grow through
            play-based learning, Christian faith, and Korean-English bilingual
            education in a warm, nurturing preschool community.
          </p>
          <p className="mt-3 max-w-xl text-base leading-8 text-charcoal/68">
            Families come to PTL looking for more than childcare. They are
            looking for a place where children are known, guided with care, and
            prepared for kindergarten with confidence and joy.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openTour}
              className="ui-button-primary"
            >
              Schedule a Tour
            </button>
            <button
              type="button"
              onClick={() => goTo("programs")}
              className="ui-link-action"
            >
              Explore Programs
            </button>
          </div>
        </div>

        <div className="space-y-3 lg:justify-self-end">
          <InstagramReelEmbed className="mx-auto aspect-[3/4] max-w-[360px]" />
          <p className="mx-auto max-w-[360px] text-sm leading-relaxed text-charcoal/58">
            A short glimpse into life at PTL Treehouse from our Instagram.
          </p>
        </div>
      </div>
    </section>
  );
}
