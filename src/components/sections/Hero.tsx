"use client";

import Link from "next/link";
import { hero, valueStatements } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import { accentMap, BTN_PRIMARY, BTN_SECONDARY } from "@/lib/icons";
import ContentPhoto from "@/components/ContentPhoto";

/**
 * The hero used to carry the whole opening: the headline, a three-line verse,
 * a turn, three more lines, two paragraphs, and only then the buttons. That
 * put the one action a visiting parent came to take below the fold on most
 * laptops, and gave the verse no room to land.
 *
 * It is now one beat. Headline, the claim, the action, and what the school is
 * in six words. The verse follows on its own band.
 */
export default function Hero() {
  const { openTour } = useApp();

  return (
    <section className="mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 sm:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-dark">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.75rem] font-semibold leading-[1.08] text-forest sm:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-3 max-w-2xl font-accent text-3xl text-gold sm:text-4xl">
            {hero.headlineAccent}
          </p>

          <div className="mt-7 max-w-xl space-y-4 text-lg leading-relaxed text-charcoal/80">
            {hero.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={openTour} className={BTN_PRIMARY}>
              Schedule a Tour
            </button>
            <Link href="/programs" className={BTN_SECONDARY}>
              Explore Programs
            </Link>
          </div>
        </div>

        <ContentPhoto
          src="/home/ptltreehouse-door.webp"
          alt="The PTL Treehouse garden gate with the school's hand-painted sign"
          className="aspect-[3/4] w-full lg:justify-self-end"
          sizes="(max-width: 1024px) 100vw, 440px"
          preload
        />
      </div>

      {/* The six quick value statements were a whole centred card grid of
          their own. They are labels, not a section, so they read as labels. */}
      <ul className="mt-12 flex flex-wrap justify-center gap-2.5 border-t border-forest/10 pt-8 lg:justify-start">
        {valueStatements.map(({ label, accent }) => (
          <li
            key={label}
            className={`flex items-center gap-2.5 rounded-full border bg-white px-4 py-2 text-sm font-semibold text-forest shadow-sm ${
              accentMap[accent]?.ring ?? "border-forest/15"
            }`}
          >
            <span
              aria-hidden
              className={`h-2 w-2 rounded-full ${accentMap[accent]?.bar ?? "bg-gold"}`}
            />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
