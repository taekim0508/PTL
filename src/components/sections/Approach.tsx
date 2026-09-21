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
        {pillars.map(({ id, label, icon, accent, lead, points, closing }) => {
          const Icon = iconMap[icon];
          const tone = accentMap[accent];
          return (
            <section
              key={id}
              id={id}
              className="rounded-soft border border-forest/10 bg-cream p-7 shadow-sm sm:p-9"
            >
              <span aria-hidden className={`block h-1 w-10 rounded-full ${tone.rule}`} />

              <h2 className="mt-4 flex items-center gap-2.5 font-display text-3xl font-semibold text-forest">
                <Icon aria-hidden className={`h-6 w-6 shrink-0 ${tone.text}`} strokeWidth={1.75} />
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
