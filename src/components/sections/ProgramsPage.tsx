"use client";

import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import { programs } from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function ProgramsPage() {
  const [openId, setOpenId] = useState<string | null>(programs[0].id);

  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-4xl font-semibold text-forest">Our Programs</h1>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-charcoal/70">
        Every program includes Korean-English bilingual instruction, woven
        throughout the week — Monday through Wednesday in English, Thursday
        and Friday in Korean.
      </p>

      <div className="mt-8 space-y-4">
        {programs.map((program) => {
          const open = openId === program.id;
          return (
            <div
              key={program.id}
              className="overflow-hidden rounded-soft border border-forest/10 bg-cream shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenId(open ? null : program.id)}
                className="flex w-full items-center gap-5 p-5 text-left"
              >
                <PlaceholderImage
                  caption="Photo"
                  className="hidden aspect-square w-20 shrink-0 sm:flex"
                  tone="forest"
                />
                <div className="flex-1">
                  <h2 className="font-display text-lg font-semibold text-forest">
                    {program.name}
                  </h2>
                  <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-gold">
                    <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                    {program.hours}
                  </p>
                  <p className="mt-1 text-sm text-charcoal/70">{program.summary}</p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-forest transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open && (
                <div className="border-t border-forest/10 px-5 pb-5 pt-4 text-sm leading-relaxed text-charcoal/75">
                  {program.detail}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
