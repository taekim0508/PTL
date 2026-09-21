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
                className="flex flex-col rounded-soft border border-forest/10 bg-cream p-6 shadow-sm"
              >
                <span aria-hidden className={`block h-1 w-10 rounded-full ${tone.rule}`} />
                <h3 className="mt-4 flex items-center gap-2.5 font-display text-2xl font-semibold text-forest">
                  <Icon aria-hidden className={`h-5 w-5 shrink-0 ${tone.text}`} strokeWidth={1.75} />
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
