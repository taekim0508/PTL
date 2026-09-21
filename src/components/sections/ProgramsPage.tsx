"use client";

import { Check, Clock } from "lucide-react";
import { programsIntro, programs, bilingual } from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import Accordion from "@/components/Accordion";
import ContentPhoto from "@/components/ContentPhoto";

export default function ProgramsPage() {
  return (
    <>
      <PageHeader eyebrow="Programs" title="Preschool Programs" lead={programsIntro}>
        <SectionNav
          items={[
            ...programs.map(({ id, name }) => ({ id, label: name })),
            { id: "bilingual", label: "Bilingual Program" },
          ]}
        />
      </PageHeader>

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <Accordion
          defaultOpenId={programs[0].id}
          items={programs.map((program) => ({
            id: program.id,
            title: program.name,
            meta: (
              <span className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-gold-dark">
                <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                {program.hours}
                <span aria-hidden className="text-forest/25">
                  |
                </span>
                {program.tuition} per month
              </span>
            ),
            lead: (
              <span className="mt-1.5 block text-base leading-relaxed text-charcoal/70">
                {program.summary}
              </span>
            ),
            body: (
              <div className="grid gap-6 sm:grid-cols-[1fr_180px] sm:items-start">
                <div>
                  <p className="text-base leading-relaxed text-charcoal/75">
                    {program.lead}
                  </p>
                  <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {program.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          aria-hidden
                          className="mt-1 h-4 w-4 shrink-0 text-leaf"
                          strokeWidth={2.5}
                        />
                        <span className="text-base leading-relaxed text-charcoal/75">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ContentPhoto
                  src={program.image}
                  alt={program.imageAlt}
                  className="aspect-square w-full"
                  sizes="180px"
                />
              </div>
            ),
          }))}
        />
      </section>

      <section id="bilingual" className="bg-forest py-16 text-cream">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.26em] text-gold-soft">
            {bilingual.eyebrow}
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-semibold sm:text-4xl">
            {bilingual.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-cream/80">
            {bilingual.body}
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {bilingual.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2.5 text-base font-semibold text-cream/90"
              >
                <Check aria-hidden className="h-4 w-4 text-gold-soft" strokeWidth={2.5} />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {bilingual.schedule.map(({ label, line }) => (
              <div
                key={label}
                className="rounded-soft border border-cream/15 bg-cream/5 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-gold-soft">
                  {label}
                </p>
                <p className="mt-2 text-lg leading-relaxed text-cream/85">{line}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-base text-cream/70">{bilingual.closing}</p>
        </div>
      </section>
    </>
  );
}
