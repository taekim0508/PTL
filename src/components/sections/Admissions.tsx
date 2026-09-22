"use client";

import { Check } from "lucide-react";
import {
  admissionsIntro,
  admissionsSteps,
  programs,
  registrationFee,
  requirements,
} from "@/lib/data";
import { useApp } from "@/context/AppContext";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";

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
            { id: "tuition", label: "Tuition" },
            { id: "requirements", label: "Requirements" },
          ]}
        />
      </PageHeader>

      <section id="how-to-enroll" className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {admissionsSteps.map(({ step, label }) => {
            return (
              <li
                key={step}
                className="flex h-full flex-col rounded-soft border border-forest/10 bg-white p-6 shadow-sm"
              >
                <span aria-hidden className="block h-1 w-10 rounded-full bg-gold" />
                <p
                  aria-hidden
                  className="mt-3 font-display text-sm font-semibold tracking-[0.2em] text-gold-dark"
                >
                  STEP {step}
                </p>
                <p className="mt-2 text-base font-semibold leading-relaxed text-forest">
                  {label}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={openTour}
            className="rounded-full bg-forest px-7 py-3.5 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-forest-dark"
          >
            Schedule a Tour
          </button>
        </div>
      </section>

      <section id="tuition" className="bg-cream-soft py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
            Tuition
          </h2>

          <div className="mt-8 overflow-hidden rounded-soft border border-forest/10 bg-white shadow-sm">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-forest/10 bg-cream-soft">
                  <th
                    scope="col"
                    className="px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-forest sm:px-6"
                  >
                    Program
                  </th>
                  <th
                    scope="col"
                    className="hidden px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-forest sm:table-cell sm:px-6"
                  >
                    Hours
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3.5 text-right text-sm font-semibold uppercase tracking-wide text-forest sm:px-6"
                  >
                    Monthly Tuition
                  </th>
                </tr>
              </thead>
              <tbody>
                {programs.map(({ id, name, hours, tuition }) => (
                  <tr key={id} className="border-b border-forest/8 last:border-0">
                    <th
                      scope="row"
                      className="px-5 py-4 text-left align-top font-display text-lg font-semibold text-forest sm:px-6"
                    >
                      {name}
                      <span className="mt-0.5 block text-sm font-semibold text-gold-dark sm:hidden">
                        {hours}
                      </span>
                    </th>
                    <td className="hidden px-5 py-4 align-top text-base text-charcoal/70 sm:table-cell sm:px-6">
                      {hours}
                    </td>
                    <td className="px-5 py-4 text-right align-top font-display text-xl font-semibold text-forest sm:px-6">
                      {tuition}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-soft border border-forest/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-forest">
              {registrationFee.heading}
            </h3>
            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {registrationFee.rows.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 rounded-soft bg-cream-soft px-4 py-3"
                >
                  <dt className="text-base text-charcoal/75">{label}</dt>
                  <dd className="font-display text-lg font-semibold text-forest">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="requirements" className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
          {requirements.heading}
        </h2>
        <ul className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {requirements.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-soft border border-forest/10 bg-white px-5 py-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf/15 text-leaf-dark">
                <Check className="h-4.5 w-4.5" strokeWidth={2.5} />
              </span>
              <span className="text-base font-semibold text-charcoal/80">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
