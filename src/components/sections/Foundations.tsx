import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeFoundations, tagline } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

/**
 * The dark anchor of the home page. Play, Pray, Prepare is the one idea the
 * whole school hangs off, so it gets the one treatment nothing else on the
 * page uses, and the page gains a hard break at its midpoint.
 */
export default function Foundations() {
    return (
    <section className="on-forest bg-forest py-16 text-cream sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="dark"
          eyebrow={tagline}
          title="The PTL Difference"
          lead="Three pillars hold up everything that happens here, from the first hour of the morning to the last minute before pickup."
          action={
            <Link
              href="/our-approach"
              className="flex items-center gap-1.5 text-base font-semibold text-gold-soft transition-colors hover:text-cream"
            >
              See our approach
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          }
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-soft bg-cream/20 md:grid-cols-3">
          {homeFoundations.map(({ label, line }, index) => (
            <div key={label} className="flex flex-col bg-forest p-7 sm:p-8">
              <span
                aria-hidden
                className="font-display text-sm font-semibold tracking-[0.2em] text-gold-soft"
              >
                0{index + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-cream sm:text-3xl">
                {label}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-cream/80">
                {line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
