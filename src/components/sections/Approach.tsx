import { approachIntro, pillars } from "@/lib/data";
import { accentMap, CARD } from "@/lib/icons";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import ContentPhoto from "@/components/ContentPhoto";

export default function Approach() {
  return (
    <>
      <PageHeader
        eyebrow="Our Approach"
        title={approachIntro.tagline}
        lead={approachIntro.lead}
      >
        <SectionNav items={pillars.map(({ id, label }) => ({ id, label }))} />
      </PageHeader>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-14 sm:px-8">
        {pillars.map(
          ({ id, label, accent, lead, points, closing, image, imageAlt }, index) => {
            const tone = accentMap[accent];
            return (
              <section key={id} id={id} className={`${CARD} ${tone.card} p-7 sm:p-9`}>
                <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
                  <div>
                    <span aria-hidden className={`block h-1 w-10 rounded-full ${tone.bar}`} />
                    <p
                      aria-hidden
                      className={`mt-3 font-display text-sm font-semibold tracking-[0.2em] ${tone.text}`}
                    >
                      0{index + 1}
                    </p>
                    <h2 className="mt-1 font-display text-3xl font-semibold text-forest">
                      {label}
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed text-charcoal/75">{lead}</p>

                    <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span
                            aria-hidden
                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone.bar}`}
                          />
                          <span className="text-base leading-relaxed text-charcoal/75">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ContentPhoto
                    src={image}
                    alt={imageAlt}
                    className="aspect-[4/3] w-full lg:aspect-square"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>

                <p className="mt-6 border-t border-forest/10 pt-5 text-base leading-relaxed text-charcoal/70">
                  {closing}
                </p>
              </section>
            );
          }
        )}
      </div>
    </>
  );
}
