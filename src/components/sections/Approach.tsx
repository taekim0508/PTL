"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { approachIntro, pillars } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import { BTN_PRIMARY } from "@/lib/icons";

/**
 * The three pillars used to be three tinted cards stacked in a column, all
 * the same size and all the same shape, so the page read as a list of three
 * equivalent features rather than three chapters.
 *
 * They are now full-bleed rows that alternate side and surface. The photo
 * runs to the edge of the viewport and the panel beside it changes tone, so
 * you always know which pillar you are in and when you have left it.
 */
const rowTones = [
  { panel: "bg-cream", dark: false },
  { panel: "bg-forest on-forest", dark: true },
  { panel: "bg-sand", dark: false },
];

export default function Approach() {
  const { openTour, goTo } = useApp();

  return (
    <>
      <PageHeader
        eyebrow="Our Approach"
        title={approachIntro.tagline}
        lead={approachIntro.lead}
      >
        <SectionNav items={pillars.map(({ id, label }) => ({ id, label }))} />
      </PageHeader>

      {pillars.map(
        ({ id, label, lead, points, closing, image, imageAlt }, index) => {
          const { panel, dark } = rowTones[index % rowTones.length];
          const photoRight = index % 2 === 1;

          return (
            <section key={id} id={id} className="grid lg:grid-cols-2">
              <div
                className={`relative min-h-[260px] sm:min-h-[360px] lg:min-h-[560px] ${
                  photoRight ? "lg:order-2" : ""
                }`}
              >
                {image ? (
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                ) : null}
              </div>

              <div
                className={`flex items-center px-5 py-12 sm:px-8 sm:py-16 lg:py-20 ${panel} ${
                  photoRight
                    ? "lg:order-1 lg:justify-end lg:pr-14 xl:pr-20"
                    : "lg:pl-14 xl:pl-20"
                }`}
              >
                <div className="w-full max-w-xl">
                  <span
                    aria-hidden
                    className={`block h-[3px] w-12 rounded-full ${
                      dark ? "bg-gold-soft" : "bg-gold"
                    }`}
                  />
                  <p
                    aria-hidden
                    className={`mt-4 font-display text-sm font-semibold tracking-[0.2em] ${
                      dark ? "text-gold-soft" : "text-gold-dark"
                    }`}
                  >
                    0{index + 1}
                  </p>
                  <h2
                    className={`mt-2 font-display text-3xl font-semibold leading-tight sm:text-[2.5rem] ${
                      dark ? "text-cream" : "text-forest"
                    }`}
                  >
                    {label}
                  </h2>
                  <p
                    className={`mt-4 text-lg leading-relaxed ${
                      dark ? "text-cream/85" : "text-charcoal/80"
                    }`}
                  >
                    {lead}
                  </p>

                  <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span
                          aria-hidden
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                            dark ? "bg-gold-soft" : "bg-gold"
                          }`}
                        />
                        <span
                          className={`text-base leading-relaxed ${
                            dark ? "text-cream/85" : "text-charcoal/80"
                          }`}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className={`mt-7 border-t pt-6 text-base leading-relaxed ${
                      dark
                        ? "border-cream/20 text-cream/75"
                        : "border-forest/15 text-charcoal/80"
                    }`}
                  >
                    {closing}
                  </p>
                </div>
              </div>
            </section>
          );
        }
      )}

      <section className="border-t border-forest/12 bg-cream py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold text-forest">
            See it for yourself
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-charcoal/80">
            Play, prayer, and preparation are easier to watch than to describe.
            Come and spend a morning with us.
          </p>
          <button type="button" onClick={openTour} className={`${BTN_PRIMARY} mt-7`}>
            Schedule a Tour
          </button>
          <button
            type="button"
            onClick={() => goTo("daily-life")}
            className="mx-auto mt-6 flex items-center gap-1.5 text-base font-semibold text-forest transition-colors hover:text-forest-dark"
          >
            See how it fills a day
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </section>
    </>
  );
}
