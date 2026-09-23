"use client";

import { Check } from "lucide-react";
import {
  admissionsIntro,
  admissionsSteps,
  contactInfo,
  programs,
  registrationFee,
  requirements,
} from "@/lib/data";
import { useApp } from "@/context/AppContext";
import { BTN_PRIMARY, CARD } from "@/lib/icons";
import Band from "@/components/Band";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import SectionNav from "@/components/SectionNav";

const telHref = `tel:${contactInfo.phone.replace(/-/g, "")}`;

export default function Admissions() {
  const { openTour } = useApp();

  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title={admissionsIntro.heading}
        lead={`${admissionsIntro.lead} ${admissionsIntro.body}`}
      >
        <SectionNav
          items={[
            { id: "how-to-enroll", label: "How to Enroll" },
            { id: "tuition", label: "Tuition & Fees" },
            { id: "requirements", label: "Requirements" },
          ]}
        />
      </PageHeader>

      <Band id="how-to-enroll" tone="page" size="lg" width="mid" seamless>
        <SectionHeading
          align="center"
          eyebrow="Four steps"
          title="How to Enroll"
          lead="Enrolment is short, and nobody is asked to commit before they have stood in the classroom."
        />

        {/* A connecting rule behind the markers. Four separate cards made the
            steps look like four options to choose between rather than one
            sequence to walk through. */}
        <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden
            className="absolute inset-x-8 top-5 hidden h-px bg-forest/20 lg:block"
          />
          {admissionsSteps.map(({ step, label }) => (
            <li key={step} className="relative flex flex-col items-center text-center">
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-forest bg-cream font-display text-base font-semibold text-forest"
              >
                {step}
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
                Step {step}
              </p>
              <p className="mt-2 max-w-[18rem] text-base font-semibold leading-relaxed text-forest">
                {label}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <button type="button" onClick={openTour} className={BTN_PRIMARY}>
            Schedule a Tour
          </button>
        </div>
      </Band>

      <Band id="tuition" tone="band" size="lg" width="mid">
        <SectionHeading
          eyebrow="Costs"
          title="Tuition & Fees"
          lead="Tuition is set by program and by the days your family needs, so we go through it with you directly rather than printing a number that may not be yours."
        />

        <div className="mt-10 overflow-hidden rounded-soft border border-forest/12 bg-white shadow-sm">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Program hours</caption>
            <thead>
              {/* Forest, not cream-soft on a cream-soft section. A table head
                  has to look like a table head from across the room. */}
              <tr className="bg-forest">
                <th
                  scope="col"
                  className="px-5 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-cream sm:px-6"
                >
                  Program
                </th>
                <th
                  scope="col"
                  className="px-5 py-3.5 text-right text-xs font-bold uppercase tracking-[0.18em] text-cream sm:px-6"
                >
                  Hours
                </th>
              </tr>
            </thead>
            <tbody>
              {programs.map(({ id, name, hours }, index) => (
                <tr key={id} className={index % 2 === 1 ? "bg-cream/60" : ""}>
                  <th
                    scope="row"
                    className="px-5 py-4 text-left align-top font-display text-lg font-semibold text-forest sm:px-6"
                  >
                    {name}
                  </th>
                  <td className="px-5 py-4 text-right align-top font-display text-lg font-semibold text-forest sm:px-6">
                    {hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Two cards, not one full-width slab: the question a parent arrives
            with is "what will this cost", and the answer is a conversation
            next to the one number we can publish. */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className={`${CARD} flex flex-col p-6 sm:p-7`}>
            <h3 className="font-display text-xl font-semibold text-forest">
              Ask About Tuition
            </h3>
            <p className="mt-1.5 text-base leading-relaxed text-charcoal/80">
              Call or text us, or ask on your tour, and we will walk you through
              current monthly tuition for the program you are considering.
            </p>
            <dl className="mt-auto grid gap-3 pt-5">
              <div className="flex items-baseline justify-between gap-4 rounded-soft border border-forest/12 bg-cream px-5 py-3.5">
                <dt className="text-base text-charcoal/80">Call or text</dt>
                <dd>
                  <a
                    href={telHref}
                    className="font-display text-lg font-semibold text-forest underline underline-offset-2"
                  >
                    {contactInfo.phone}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-soft border border-forest/12 bg-cream px-5 py-3.5">
                <dt className="text-base text-charcoal/80">Email</dt>
                <dd>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-display text-base font-semibold text-forest underline underline-offset-2"
                  >
                    {contactInfo.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className={`${CARD} flex flex-col p-6 sm:p-7`}>
            <h3 className="font-display text-xl font-semibold text-forest">
              {registrationFee.heading}
            </h3>
            <p className="mt-1.5 text-base leading-relaxed text-charcoal/80">
              Charged once at enrolment, not monthly.
            </p>
            <dl className="mt-auto grid gap-3 pt-5">
              {registrationFee.rows.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 rounded-soft border border-forest/12 bg-cream px-5 py-3.5"
                >
                  <dt className="text-base text-charcoal/80">{label}</dt>
                  <dd className="font-display text-lg font-semibold text-forest">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Band>

      <Band id="requirements" tone="page" size="lg" width="mid">
        <SectionHeading
          align="center"
          eyebrow="Before the first day"
          title={requirements.heading}
        />
        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {requirements.items.map((item) => (
            <li
              key={item}
              className={`${CARD} flex items-center gap-3.5 px-5 py-4`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf/15 text-leaf-dark">
                <Check className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="text-base font-semibold text-charcoal/85">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-xl text-center text-base leading-relaxed text-charcoal/80">
          Questions about any of these? Call or text us at{" "}
          <a
            href={telHref}
            className="font-semibold text-forest underline underline-offset-2"
          >
            {contactInfo.phone}
          </a>
          .
        </p>
      </Band>
    </>
  );
}
