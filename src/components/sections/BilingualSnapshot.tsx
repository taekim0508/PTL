"use client";

import { ArrowRight } from "lucide-react";
import { bilingual } from "@/lib/data";
import { useApp } from "@/context/AppContext";

export default function BilingualSnapshot() {
  const { goTo } = useApp();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid gap-8 rounded-soft bg-forest px-6 py-10 text-cream shadow-sm sm:px-10 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {bilingual.heading}
          </h2>
          <button
            type="button"
            onClick={() => goTo("programs")}
            className="mt-5 flex items-center gap-1.5 text-base font-semibold text-gold-soft transition-colors hover:text-cream"
          >
            See the bilingual program
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-cream/80">{bilingual.body}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {bilingual.schedule.map(({ label, line }) => (
              <div
                key={label}
                className="rounded-soft border border-cream/15 bg-cream/5 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-gold-soft">
                  {label}
                </p>
                <p className="mt-2 text-base leading-relaxed text-cream/80">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
