"use client";

import { faqIntro, faqCategories, faqCloser, contactInfo } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import Accordion from "@/components/Accordion";

export default function ParentResources() {
  return (
    <>
      <PageHeader
        eyebrow="Parent Resources"
        title={faqIntro.heading}
        lead={faqIntro.lead}
      >
        <SectionNav
          items={faqCategories.map(({ id, label }) => ({ id, label }))}
        />
      </PageHeader>

      <div className="mx-auto max-w-4xl space-y-12 px-5 py-14 sm:px-8">
        {faqCategories.map(({ id, label, icon, items }) => {
          const Icon = iconMap[icon];
          return (
            <section key={id} id={id}>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h2 className="font-display text-2xl font-semibold text-forest">
                  {label}
                </h2>
              </div>

              <div className="mt-5">
                <Accordion
                  items={items.map((item, index) => ({
                    id: `${id}-${index}`,
                    title: item.q,
                    body: (
                      <div className="space-y-3">
                        {item.a ? (
                          <p className="text-base leading-relaxed text-charcoal/75">
                            {item.a}
                          </p>
                        ) : null}
                        {item.points ? (
                          <ul className="space-y-2">
                            {item.points.map((point) => (
                              <li key={point} className="flex items-start gap-2.5">
                                <span
                                  aria-hidden
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                                />
                                <span className="text-base leading-relaxed text-charcoal/75">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {item.aAfter ? (
                          <p className="text-base leading-relaxed text-charcoal/75">
                            {item.aAfter}
                          </p>
                        ) : null}
                      </div>
                    ),
                  }))}
                />
              </div>
            </section>
          );
        })}

        <div className="rounded-soft border border-gold-soft/70 bg-gold-soft/30 px-6 py-8 text-center sm:px-10">
          <h2 className="font-display text-2xl font-semibold text-forest">
            {faqCloser.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-charcoal/75">
            Message us at{" "}
            <a
              href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
              className="font-semibold text-forest underline underline-offset-2"
            >
              {contactInfo.phone}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-semibold text-forest underline underline-offset-2"
            >
              {contactInfo.email}
            </a>
            . We&apos;re here to help.
          </p>
        </div>
      </div>
    </>
  );
}
