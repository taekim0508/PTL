"use client";

import { hero } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import ContentPhoto from "@/components/ContentPhoto";

export default function Hero() {
  const { goTo, openTour } = useApp();

  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,420px)] lg:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-dark">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight text-forest sm:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-3 max-w-2xl font-accent text-3xl text-gold sm:text-4xl">
            {hero.headlineAccent}
          </p>

          <div className="mt-7 max-w-xl space-y-1 text-lg leading-relaxed text-charcoal/70">
            {hero.verse.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-4 font-display text-2xl font-semibold text-forest">
            {hero.turn}
          </p>
          <div className="mt-2 max-w-xl space-y-1 text-lg leading-relaxed text-charcoal/70">
            {hero.today.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-charcoal/75">
            {hero.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openTour}
              className="rounded-full bg-forest px-7 py-3.5 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-forest-dark"
            >
              Schedule a Tour
            </button>
            <button
              type="button"
              onClick={() => goTo("programs")}
              className="rounded-full border-2 border-forest px-7 py-3.5 text-base font-semibold text-forest transition-colors hover:bg-forest/5"
            >
              Explore Programs
            </button>
          </div>
        </div>

        <ContentPhoto
          src="/home/ptltreehouse-door.webp"
          alt="The PTL Treehouse garden gate with the school's hand-painted sign"
          className="aspect-[3/4] w-full lg:justify-self-end"
          sizes="(max-width: 1024px) 100vw, 420px"
          preload
        />
      </div>

      <p className="mt-12 border-t border-forest/10 pt-8 text-center font-display text-2xl font-semibold leading-relaxed text-forest sm:text-3xl">
        {hero.close[0]}{" "}
        <span className="text-gold-dark">{hero.close[1]}</span>
      </p>
    </section>
  );
}
