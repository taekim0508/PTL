"use client";

import { programs } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import ContentPhoto from "@/components/ContentPhoto";

export default function ProgramPreview() {
  const { goTo } = useApp();

  return (
    <section className="bg-cream-soft/45 py-10 sm:py-11">
      <div className="mx-auto grid max-w-7xl gap-7 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Program Snapshot
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-forest sm:text-4xl">
            Flexible preschool options for growing families
          </h2>
          <p className="mt-3 max-w-lg text-base leading-8 text-charcoal/72">
            Choose from morning, lunch-extended, full-day, and aftercare
            options within the same nurturing, faith-filled, bilingual school
            environment.
          </p>

          <div className="mt-6 overflow-hidden border border-forest/12 bg-white">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`px-4 py-3 sm:px-5 ${index !== programs.length - 1 ? "border-b border-forest/10" : ""}`}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight text-forest">
                      {program.name}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-charcoal/72">
                      {program.summary}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm font-semibold uppercase tracking-wide text-gold">
                    {program.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo("programs")}
            className="ui-link-action mt-5"
          >
            View All Programs
          </button>
        </div>

        <div className="space-y-3">
          <ContentPhoto
            src="/home/curriculum-craft.jpeg"
            alt="Child holding a classroom craft at PTL Treehouse"
            className="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
          <p className="text-sm leading-7 text-charcoal/62">
            Hands-on projects, language-rich lessons, and joyful classroom
            routines help children build confidence through everyday learning.
          </p>
        </div>
      </div>
    </section>
  );
}
