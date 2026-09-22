"use client";

import { ArrowRight } from "lucide-react";
import { bilingual } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import SectionHeading from "@/components/SectionHeading";
import SplitFeature from "@/components/SplitFeature";

/**
 * A full-bleed split: photo to the edge of the viewport on one side, a solid
 * panel of copy on the other. The seam down the middle is the clearest
 * divider on the site, which is why the two heaviest ideas on the home page,
 * the bilingual programme and the invitation to visit, are built this way.
 */
export default function BilingualSnapshot() {
  const { goTo } = useApp();

  return (
    <SplitFeature
      src="/home/learning-2.jpg"
      alt="Two children writing side by side at a classroom table"
      tone="band"
    >
      <SectionHeading
        eyebrow={bilingual.eyebrow}
        title={bilingual.heading}
        lead={bilingual.body}
      />

      <dl className="mt-8 space-y-4">
        {bilingual.schedule.map(({ label, line }) => (
          <div key={label} className="border-l-2 border-gold pl-4">
            <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
              {label}
            </dt>
            <dd className="mt-1 text-base leading-relaxed text-charcoal/85">{line}</dd>
          </div>
        ))}
      </dl>

      <button
        type="button"
        onClick={() => goTo("programs")}
        className="mt-8 flex items-center gap-1.5 text-base font-semibold text-forest transition-colors hover:text-forest-dark"
      >
        See the bilingual program
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </button>
    </SplitFeature>
  );
}
