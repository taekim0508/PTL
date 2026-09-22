import { faqIntro, faqCategories, faqCloser, contactInfo } from "@/lib/data";
import Band from "@/components/Band";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import Accordion from "@/components/Accordion";

const telHref = `tel:${contactInfo.phone.replace(/-/g, "")}`;

/**
 * Six categories that used to run together in one column, separated only by
 * white space and a small gold tick. Each category now takes its own band and
 * alternates surface, so the answer you are looking for sits inside a visible
 * container rather than somewhere in a list of forty questions.
 */
export default function ParentResources() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title={faqIntro.heading} lead={faqIntro.lead}>
        <SectionNav items={faqCategories.map(({ id, label }) => ({ id, label }))} />
      </PageHeader>

      {faqCategories.map(({ id, label, items }, index) => (
        <Band
          key={id}
          id={id}
          tone={index % 2 === 0 ? "page" : "band"}
          size="md"
          width="reading"
          seamless={index === 0}
        >
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <span aria-hidden className="block h-[3px] w-12 rounded-full bg-gold" />
              <h2 className="mt-4 font-display text-2xl font-semibold text-forest sm:text-3xl">
                {label}
              </h2>
            </div>
            <p className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
              {items.length} questions
            </p>
          </div>

          <div className="mt-6">
            <Accordion
              items={items.map((item, itemIndex) => ({
                id: `${id}-${itemIndex}`,
                title: item.q,
                body: (
                  <div className="space-y-3">
                    {item.a ? (
                      <p className="text-base leading-relaxed text-charcoal/80">{item.a}</p>
                    ) : null}
                    {item.points ? (
                      <ul className="space-y-2">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5">
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                            />
                            <span className="text-base leading-relaxed text-charcoal/80">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {item.aAfter ? (
                      <p className="text-base leading-relaxed text-charcoal/80">
                        {item.aAfter}
                      </p>
                    ) : null}
                  </div>
                ),
              }))}
            />
          </div>
        </Band>
      ))}

      <section className="on-forest bg-forest py-14 text-cream sm:py-16">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            {faqCloser.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-cream/85">
            Call or text us at{" "}
            <a href={telHref} className="font-semibold text-gold-soft underline underline-offset-4">
              {contactInfo.phone}
            </a>
            , or email{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-semibold text-gold-soft underline underline-offset-4"
            >
              {contactInfo.email}
            </a>
            . We&apos;re here to help.
          </p>
        </div>
      </section>
    </>
  );
}
