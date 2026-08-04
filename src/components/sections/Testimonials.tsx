"use client";

import { useState } from "react";
import { homeTestimonials } from "@/lib/data";

export default function Testimonials() {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <section className="bg-cream-soft/35 py-10 sm:py-11">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Family Testimonials
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-forest sm:text-4xl">
            What our families say
          </h2>
          <p className="mt-3 text-base leading-8 text-charcoal/72">
            A few words from parents who have entrusted PTL Treehouse with some
            of their children&apos;s earliest years.
          </p>
        </div>

        <div className="mt-7 grid items-start gap-4 lg:grid-cols-3 lg:[grid-auto-rows:1fr]">
          {homeTestimonials.map(
            ({ quote, originalQuote, attribution, showOriginalFirst }) => {
              const hasToggle = Boolean(originalQuote);
              const activeQuote = hasToggle
                ? showOriginalFirst
                  ? showOriginal
                    ? quote
                    : originalQuote
                  : showOriginal
                    ? originalQuote
                    : quote
                : quote;

              return (
                <div
                  key={attribution}
                  className="flex h-full flex-col border border-forest/12 bg-white p-5"
                >
                  <p className="flex-1 text-sm leading-7 text-charcoal/76">
                    &ldquo;{activeQuote}&rdquo;
                  </p>

                  {hasToggle ? (
                    <button
                      type="button"
                      onClick={() => setShowOriginal((value) => !value)}
                      className="ui-link-action mt-4 w-fit"
                    >
                      {showOriginalFirst
                        ? showOriginal
                          ? "View Korean original"
                          : "View English translation"
                        : showOriginal
                          ? "View English"
                          : "View original Korean"}
                    </button>
                  ) : null}

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/48">
                    {attribution}
                  </p>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
