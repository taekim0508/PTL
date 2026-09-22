"use client";

import { useState } from "react";
import { homeTestimonials, testimonialsHeading } from "@/lib/data";
import Band from "@/components/Band";
import SectionHeading from "@/components/SectionHeading";

type Testimonial = (typeof homeTestimonials)[number];

function activeQuoteFor(item: Testimonial, showOriginal: boolean) {
  if (!item.originalQuote) return item.quote;
  const flipped = item.showOriginalFirst ? !showOriginal : showOriginal;
  return flipped ? item.originalQuote : item.quote;
}

/**
 * One quote set large and two set small, rather than three equal cards. Three
 * identical boxes make the reader weigh them against each other; a lead quote
 * and two supporting ones let the first do the persuading and the others
 * confirm it.
 */
export default function Testimonials() {
  const [openOriginals, setOpenOriginals] = useState<Record<string, boolean>>({});
  const [lead, ...rest] = homeTestimonials;

  function renderToggle(item: Testimonial) {
    if (!item.originalQuote) return null;
    const showOriginal = openOriginals[item.attribution] ?? false;
    const showingKorean = item.showOriginalFirst ? !showOriginal : showOriginal;
    return (
      <button
        type="button"
        onClick={() =>
          setOpenOriginals((value) => ({
            ...value,
            [item.attribution]: !showOriginal,
          }))
        }
        className="mt-5 w-fit rounded-full border border-forest/20 bg-cream px-4 py-2 text-sm font-semibold text-forest transition-colors hover:border-forest/50 hover:bg-white"
      >
        {showingKorean ? "Read the English translation" : "Read the Korean original"}
      </button>
    );
  }

  return (
    <Band tone="page" size="lg">
      <SectionHeading
        align="center"
        eyebrow="From our families"
        title={testimonialsHeading}
        lead="A few words from parents who have entrusted PTL Treehouse with some of their children's earliest years."
      />

      <figure className="mt-12 rounded-soft border border-forest/12 bg-white p-8 shadow-sm sm:p-12">
        <span aria-hidden className="block font-display text-6xl leading-none text-gold/50">
          &ldquo;
        </span>
        <blockquote
          lang={activeQuoteFor(lead, openOriginals[lead.attribution] ?? false) === lead.originalQuote ? "ko" : "en"}
          className="-mt-3 font-display text-2xl leading-relaxed text-forest sm:text-[1.75rem]"
        >
          {activeQuoteFor(lead, openOriginals[lead.attribution] ?? false)}
        </blockquote>
        {renderToggle(lead)}
        <figcaption className="mt-6 border-t border-forest/12 pt-5 text-sm font-bold uppercase tracking-[0.18em] text-gold-dark">
          {lead.attribution}
        </figcaption>
      </figure>

      <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
        {rest.map((item) => {
          const showOriginal = openOriginals[item.attribution] ?? false;
          const quote = activeQuoteFor(item, showOriginal);
          return (
            <figure
              key={item.attribution}
              className="flex h-full flex-col rounded-soft border border-forest/12 bg-white p-7 shadow-sm"
            >
              <blockquote
                lang={quote === item.originalQuote ? "ko" : "en"}
                className="flex-1 text-base leading-relaxed text-charcoal/80"
              >
                &ldquo;{quote}&rdquo;
              </blockquote>
              {renderToggle(item)}
              <figcaption className="mt-6 border-t border-forest/12 pt-4 text-sm font-bold uppercase tracking-[0.18em] text-gold-dark">
                {item.attribution}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </Band>
  );
}
