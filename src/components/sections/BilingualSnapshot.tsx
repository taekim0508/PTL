import { bilingualSchedule } from "@/lib/data";

export default function BilingualSnapshot() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-11">
      <div className="grid gap-7 bg-forest px-5 py-7 text-white sm:px-8 sm:py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-soft">
            Bilingual Snapshot
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Korean and English, naturally integrated
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-white/84">
            Our bilingual program helps children grow in confidence in both
            Korean and English while strengthening family connection and
            cultural identity.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {bilingualSchedule.map(({ label, line }) => (
              <div
                key={label}
                className="border border-white/14 bg-white/6 p-4"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-gold-soft">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-7 text-white/82">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
