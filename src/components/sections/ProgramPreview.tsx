"use client";

import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import ContentPhoto from "@/components/ContentPhoto";

export default function ProgramPreview() {
  const { goTo } = useApp();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-3xl font-semibold text-forest sm:text-4xl">
          Our Programs
        </h2>
        <button
          type="button"
          onClick={() => goTo("programs")}
          className="hidden items-center gap-1.5 text-base font-semibold text-forest hover:text-forest-dark sm:flex"
        >
          See all programs
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
        <div>
          <p className="max-w-lg text-lg leading-relaxed text-charcoal/75">
            Choose from morning, lunch-extended, full-day, and aftercare
            options within the same nurturing, faith-filled, bilingual school
            environment.
          </p>

          <div className="mt-6 overflow-hidden rounded-soft border border-forest/10 bg-cream shadow-sm">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`px-5 py-4 ${
                  index !== programs.length - 1
                    ? "border-b border-forest/10"
                    : ""
                }`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight text-forest">
                      {program.name}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-charcoal/70">
                      {program.summary}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-gold-dark">
                    {program.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <ContentPhoto
            alt="Hands-on learning at PTL Treehouse"
            placeholder="Children at a learning center"
            className="aspect-[4/3]"
          />
          <p className="text-base leading-relaxed text-charcoal/65">
            Hands-on projects, language-rich lessons, and joyful classroom
            routines help children build confidence through everyday learning.
          </p>
        </div>
      </div>
    </section>
  );
}
