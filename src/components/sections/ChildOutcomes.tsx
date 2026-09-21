import { childOutcomes } from "@/lib/data";
import { iconMap, accentMap } from "@/lib/icons";

export default function ChildOutcomes() {
  return (
    <section className="bg-cream-soft py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
          Everything we do is designed to help children become
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {childOutcomes.map(({ label, line, icon, accent }) => {
            const Icon = iconMap[icon];
            const tone = accentMap[accent];
            return (
              <div
                key={label}
                className="relative flex flex-col overflow-hidden rounded-soft border border-forest/10 bg-cream p-6 shadow-sm"
              >
                <span aria-hidden className={`absolute inset-x-0 top-0 h-1 ${tone.rule}`} />
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${tone.chip}`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-forest">
                  {label}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal/70">{line}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
