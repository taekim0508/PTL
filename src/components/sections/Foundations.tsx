import { homeFoundations } from "@/lib/data";
import { iconMap, accentMap } from "@/lib/icons";

export default function Foundations() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
          The PTL Difference
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-charcoal/65">
          Play. Pray. Prepare. Everything we do at PTL Treehouse is guided by
          these three foundational pillars.
        </p>

        <div className="mt-10 grid items-start gap-6 md:grid-cols-3">
          {homeFoundations.map(({ label, line, icon, accent }, index) => {
            const Icon = iconMap[icon];
            const tone = accentMap[accent] ?? accentMap.green;
            return (
              <div
                key={label}
                className="relative flex h-full flex-col overflow-hidden rounded-soft border border-forest/10 bg-cream p-7 shadow-sm"
              >
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-1 ${tone.rule}`}
                />
                <div className="flex items-center justify-between">
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
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-forest">
                  {label}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-charcoal/70">
                  {line}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
