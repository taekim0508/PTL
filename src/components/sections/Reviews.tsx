"use client";

import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { reviews, reviewSummary, type Review } from "@/lib/content/reviews";
import { testimonialsHeading } from "@/lib/data";
import Band from "@/components/Band";
import SectionHeading from "@/components/SectionHeading";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/**
 * Formatted by hand rather than with toLocaleDateString, which resolves
 * against the runtime's locale and so can disagree between the server and the
 * browser, which React calls a hydration error.
 */
function monthYear(iso: string) {
  const [year, month] = iso.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

/** Long enough to fill the clamp; past this a card earns a Read more. */
const CLAMP_AT = 260;

function Stars({ count, label }: { count: number; label?: string }) {
  return (
    <span className="flex items-center gap-0.5" role="img" aria-label={label ?? `${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={`h-4 w-4 ${i < count ? "fill-gold text-gold" : "text-forest/20"}`}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.body.length > CLAMP_AT;

  return (
    <figure className="flex break-inside-avoid flex-col rounded-soft border border-forest/12 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <Stars count={review.stars} label={`${review.stars} out of 5 stars from ${review.name}`} />
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-charcoal/45">
          {review.source === "google" ? "Google" : "Facebook"}
        </span>
      </div>

      <blockquote
        lang={review.lang}
        className={`mt-4 flex-1 text-base leading-relaxed text-charcoal/80 ${
          isLong && !expanded ? "line-clamp-6" : ""
        }`}
      >
        {review.body}
      </blockquote>

      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 w-fit text-sm font-semibold text-forest underline underline-offset-2 hover:text-forest-dark"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}

      <figcaption className="mt-5 flex items-baseline justify-between gap-3 border-t border-forest/12 pt-4">
        <span className="text-sm font-bold uppercase tracking-[0.16em] text-gold-dark">
          {review.name}
        </span>
        <time dateTime={review.date} className="shrink-0 text-sm text-charcoal/55">
          {monthYear(review.date)}
        </time>
      </figcaption>
    </figure>
  );
}

/**
 * The families' own words, as they left them, rather than three quotes the
 * school chose. A wall of thirteen signed reviews with a rating on top says
 * something a curated trio cannot: that there are thirteen of them.
 *
 * Laid out in CSS columns so cards of wildly different lengths pack without
 * leaving a ragged gap under the short ones.
 */
export default function Reviews() {
  return (
    <Band tone="page" size="lg">
      <SectionHeading
        align="center"
        eyebrow="From our families"
        title={testimonialsHeading}
        lead="A few words from parents who have entrusted PTL Treehouse with some of their children's earliest years."
      />

      {/* The rating sits under the heading rather than replacing it: the
          sentence says what the section is, the number says how many families
          stand behind it. */}
      <div className="mt-8 flex flex-col items-center text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <Stars
            count={Math.round(reviewSummary.rating)}
            label={`${reviewSummary.rating} out of 5 stars`}
          />
          <p className="text-lg text-charcoal/80">
            <span className="font-display text-xl font-semibold text-forest">
              {reviewSummary.rating.toFixed(1)} out of 5
            </span>{" "}
            from {reviewSummary.total} reviews
          </p>
        </div>
        <a
          href={reviewSummary.googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-1.5 text-base font-semibold text-forest transition-colors hover:text-forest-dark"
        >
          Read them on Google
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </a>
      </div>

      <div className="mt-12 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </Band>
  );
}
