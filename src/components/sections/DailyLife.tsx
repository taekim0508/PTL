import {
  dailyLifeIntro,
  dayParts,
  dailySchedule,
  afternoonSchedule,
  weeklyEnrichment,
  enrichmentClasses,
} from "@/lib/data";
import { accentMap, CARD } from "@/lib/icons";
import Band from "@/components/Band";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
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
            { id: "weekly-enrichment", label: "Weekly Enrichment" },
          ]}
        />
      </PageHeader>

      <Band id="a-day-at-ptl" tone="page" size="lg" seamless>
        <SectionHeading
          eyebrow="Hour by hour"
          title="A Day at PTL"
          lead="Four moments that shape every morning, whichever programme a child is enrolled in."
        />

        {/* White cards on cream, with the accent carried by a rule rather than
            a fill. Four pale tinted panels side by side were indistinguishable
            from one another and from the page behind them. */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {dayParts.map(({ id, label, accent, body, points, image, imageAlt }, index) => {
            const tone = accentMap[accent];
            return (
              <article key={id} className={`${CARD} flex flex-col overflow-hidden`}>
                <div className="relative aspect-[16/9] w-full">
                  <ContentPhoto
                    src={image}
                    alt={imageAlt}
                    className="h-full w-full rounded-none border-0 shadow-none"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`h-[3px] w-8 rounded-full ${tone.bar}`}
                    />
                    <span
                      aria-hidden
                      className={`font-display text-xs font-semibold tracking-[0.2em] ${tone.text}`}
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-forest">
                    {label}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-charcoal/80">{body}</p>
                  {points.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span
                            aria-hidden
                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone.bar}`}
                          />
                          <span className="text-base leading-relaxed text-charcoal/80">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </Band>

      {/* The schedules sit on sand so the white tables stand off the page, and
          each table now wears a forest header. Before, the header of a
          schedule was the same cream-soft as the section behind it, so the
          title of the table and the background of the page were one value. */}
      <Band id="daily-schedule" tone="band" size="lg">
        <SectionHeading
          eyebrow="What the clock looks like"
          title="Sample Schedules"
          lead="Times shift with the season and the group, but the shape of a day holds."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
          <ScheduleTable {...dailySchedule} />
          <div id="afternoon-enrichment">
            <ScheduleTable {...afternoonSchedule} />
          </div>
        </div>
      </Band>

      <Band id="weekly-enrichment" tone="page" size="lg">
        <SectionHeading
          eyebrow="Afternoons"
          title="Weekly Enrichment"
          lead="Full-day students join a different enrichment class each afternoon."
        />

        <ol className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-soft border border-forest/12 bg-forest/12 sm:grid-cols-5">
          {weeklyEnrichment.map(({ day, activity }) => (
            <li key={day} className="bg-white px-4 py-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
                {day}
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-forest">
                {activity}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 border-t border-forest/12 pt-10">
          <ItemGrid items={enrichmentClasses} columns="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </Band>
    </>
  );
}
