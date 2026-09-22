"use client";

import { useState } from "react";
import { homeTestimonials, testimonialsHeading } from "@/lib/data";

export default function Testimonials() {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <h2 className="text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
        {testimonialsHeading}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-base leading-relaxed text-charcoal/75">
        A few words from parents who have entrusted PTL Treehouse with some of
        their children&apos;s earliest years.
      </p>

      <div className="mt-10 grid items-start gap-5 md:grid-cols-3">
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
                className="flex h-full flex-col rounded-soft border border-forest/10 bg-white p-6 shadow-sm"
              >
                <p
                  lang={activeQuote === originalQuote ? "ko" : "en"}
                  className="flex-1 text-base leading-relaxed text-charcoal/75"
                >
                  &ldquo;{activeQuote}&rdquo;
                </p>

                {hasToggle ? (
                  <button
                    type="button"
                    onClick={() => setShowOriginal((value) => !value)}
                    className="mt-4 w-fit rounded-full border border-forest/20 bg-white px-4 py-2 text-sm font-semibold text-forest shadow-sm transition-colors hover:border-forest/40"
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

                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-charcoal/75">
                  {attribution}
                </p>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
