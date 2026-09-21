import {
  dailyLifeIntro,
  dayParts,
  dailySchedule,
  afternoonSchedule,
  weeklyEnrichment,
  enrichmentClasses,
} from "@/lib/data";
import { iconMap, accentMap } from "@/lib/icons";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import ScheduleTable from "@/components/ScheduleTable";
import IconGrid from "@/components/IconGrid";

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
          {dayParts.map(({ id, label, icon, accent, body, points }) => {
            const Icon = iconMap[icon];
            const tone = accentMap[accent];
            return (
              <div
                key={id}
                className="relative flex flex-col overflow-hidden rounded-soft border border-forest/10 bg-cream p-7 shadow-sm"
              >
                <span aria-hidden className={`absolute inset-x-0 top-0 h-1 ${tone.rule}`} />
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${tone.chip}`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold text-forest">
                  {label}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-charcoal/75">{body}</p>
                {points.length > 0 ? (
                  <ul className="mt-4 space-y-2">
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
            <div
              key={day}
              className="rounded-soft border border-forest/10 bg-cream p-5 text-center shadow-sm"
            >
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
          <IconGrid
            items={enrichmentClasses}
            variant="inline"
            columns="sm:grid-cols-2 lg:grid-cols-3"
          />
        </div>
      </section>
    </>
  );
}
