import {
  dailyLifeIntro,
  dayParts,
  dailySchedule,
  afternoonSchedule,
  weeklyEnrichment,
  enrichmentClasses,
} from "@/lib/data";
import { accentMap, CARD } from "@/lib/icons";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import ScheduleTable from "@/components/ScheduleTable";
import ItemGrid from "@/components/ItemGrid";
import ContentPhoto from "@/components/ContentPhoto";

export default function DailyLife() {
  return (
    <>
      <PageHeader
        eyebrow="Daily Life"
        title={dailyLifeIntro.heading}
        lead={`${dailyLifeIntro.lead} ${dailyLifeIntro.body}`}
      >
        <SectionNav
          items={[
            { id: "a-day-at-ptl", label: "A Day at PTL" },
            { id: "daily-schedule", label: "Daily Schedule" },
            { id: "afternoon-enrichment", label: "Afternoon Enrichment" },
          ]}
        />
      </PageHeader>

      <section id="a-day-at-ptl" className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {dayParts.map(({ id, label, accent, body, points, image, imageAlt }) => {
            const tone = accentMap[accent];
            return (
              <div key={id} className={`${CARD} ${tone.card} flex flex-col p-7`}>
                <ContentPhoto
                  src={image}
                  alt={imageAlt}
                  className="aspect-[16/9] w-full"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <span
                  aria-hidden
                  className={`mt-6 block h-1 w-10 rounded-full ${tone.bar}`}
                />
                <h2 className="mt-3 font-display text-2xl font-semibold text-forest">
                  {label}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-charcoal/75">{body}</p>
                {points.length > 0 ? (
                  <ul className="mt-4 space-y-2">
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
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section id="daily-schedule" className="bg-cream-soft py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
          <ScheduleTable {...dailySchedule} />
          <div id="afternoon-enrichment">
            <ScheduleTable {...afternoonSchedule} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
          Weekly Enrichment
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-charcoal/65">
          Full-day students join a different enrichment class each afternoon.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {weeklyEnrichment.map(({ day, activity }) => (
            <div key={day} className={`${CARD} bg-white p-5 text-center`}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                {day}
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-forest">
                {activity}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <ItemGrid items={enrichmentClasses} columns="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>
    </>
  );
}
