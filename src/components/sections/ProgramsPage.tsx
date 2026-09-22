"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Clock } from "lucide-react";
import { programsIntro, programs, bilingual } from "@/lib/data";
import { useApp } from "@/context/AppContext";
import { BTN_PRIMARY, BTN_SECONDARY } from "@/lib/icons";
import Band from "@/components/Band";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import SectionNav from "@/components/SectionNav";
import Accordion from "@/components/Accordion";
import ContentPhoto from "@/components/ContentPhoto";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ProgramsPage() {
  const { openTour, goTo } = useApp();
  const [openId, setOpenId] = useState<string | null>(programs[0].id);
  // Opening a program collapses another, which shifts the page, so a jump that
  // changes what is open has to wait for the DOM to settle before it scrolls.
  const pendingScroll = useRef<string | null>(null);

  useEffect(() => {
    const target = pendingScroll.current;
    if (!target) return;
    pendingScroll.current = null;
    scrollToId(target);
  });

  function jumpTo(id: string) {
    const isProgram = programs.some((program) => program.id === id);
    if (!isProgram || openId === id) {
      scrollToId(id);
      return;
    }
    pendingScroll.current = id;
    setOpenId(id);
  }

  return (
    <>
      <PageHeader eyebrow="Programs" title="Preschool Programs" lead={programsIntro}>
        <SectionNav
          onSelect={jumpTo}
          items={[
            ...programs.map(({ id, name }) => ({ id, label: name })),
            { id: "bilingual", label: "Bilingual Program" },
          ]}
        />
      </PageHeader>

      <Band tone="page" size="lg" width="reading" seamless>
        <Accordion
          openId={openId}
          onToggle={setOpenId}
          items={programs.map((program) => ({
            id: program.id,
            title: program.name,
            meta: (
              <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold">
                <span className="flex items-center gap-1.5 text-gold-dark">
                  <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                  {program.hours}
                </span>
                {/* Tuition is the single most looked-for number on the site.
                    It used to sit in the same grey run-on as the hours. */}
                <span className="rounded-full bg-forest/10 px-2.5 py-0.5 text-forest">
                  {program.tuition} per month
                </span>
              </span>
            ),
            lead: (
              <span className="mt-2 block text-base leading-relaxed text-charcoal/80">
                {program.summary}
              </span>
            ),
            body: (
              <div className="grid gap-6 sm:grid-cols-[1fr_200px] sm:items-start">
                <div>
                  <p className="text-base leading-relaxed text-charcoal/80">
                    {program.lead}
                  </p>
                  <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {program.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          aria-hidden
                          className="mt-1 h-4 w-4 shrink-0 text-leaf-dark"
                          strokeWidth={2.5}
                        />
                        <span className="text-base leading-relaxed text-charcoal/80">
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
                  sizes="200px"
                />
              </div>
            ),
          }))}
        />

        <div className="mt-10 rounded-soft border border-forest/12 bg-white p-7 text-center shadow-sm sm:p-9">
          <h2 className="font-display text-2xl font-semibold text-forest">
            Not sure which one fits?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-charcoal/80">
            Most families decide after a visit. Tell us your child&apos;s age and
            your week, and we will talk through the options with you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={openTour} className={BTN_PRIMARY}>
              Schedule a Tour
            </button>
            <button
              type="button"
              onClick={() => goTo("admissions")}
              className={BTN_SECONDARY}
            >
              See Tuition
            </button>
          </div>
        </div>
      </Band>

      <section id="bilingual" className="on-forest bg-forest py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            tone="dark"
            eyebrow={bilingual.eyebrow}
            title={bilingual.heading}
            lead={bilingual.body}
          />

          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {bilingual.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-2.5 text-base font-semibold text-cream/90"
              >
                <Check aria-hidden className="h-4 w-4 text-gold-soft" strokeWidth={2.5} />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-px overflow-hidden rounded-soft bg-cream/20 sm:grid-cols-2">
            {bilingual.schedule.map(({ label, line }) => (
              <div key={label} className="bg-forest p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-soft">
                  {label}
                </p>
                <p className="mt-2.5 text-lg leading-relaxed text-cream/85">{line}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-base text-cream/70">{bilingual.closing}</p>
        </div>
      </section>
    </>
  );
}
