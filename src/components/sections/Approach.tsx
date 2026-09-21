import { approachIntro, pillars } from "@/lib/data";
import { iconMap, accentMap } from "@/lib/icons";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";

export default function Approach() {
  return (
    <>
      <PageHeader
        eyebrow="Our Approach"
        title={approachIntro.tagline}
        lead={approachIntro.lead}
      >
        <SectionNav
          items={pillars.map(({ id, label }) => ({ id, label }))}
        />
      </PageHeader>

      <div className="mx-auto max-w-4xl space-y-6 px-5 py-14 sm:px-8">
        {pillars.map(({ id, label, icon, accent, lead, points, closing }, index) => {
          const Icon = iconMap[icon];
          const tone = accentMap[accent];
          return (
            <section
              key={id}
              id={id}
              className="relative overflow-hidden rounded-soft border border-forest/10 bg-cream p-7 shadow-sm sm:p-9"
            >
              <span aria-hidden className={`absolute inset-x-0 top-0 h-1 ${tone.rule}`} />

              <div className="flex items-center justify-between gap-4">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${tone.chip}`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <span
                  aria-hidden
                  className={`font-display text-4xl font-semibold leading-none ${tone.num}`}
                >
                  {index + 1}
                </span>
              </div>

              <h2 className="mt-5 font-display text-3xl font-semibold text-forest">
                {label}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-charcoal/75">{lead}</p>

              <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone.rule}`}
                    />
                    <span className="text-base leading-relaxed text-charcoal/75">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-forest/10 pt-5 text-base leading-relaxed text-charcoal/70">
                {closing}
              </p>
            </section>
          );
        })}
      </div>
    </>
  );
}
