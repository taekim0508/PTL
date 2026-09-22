import { childOutcomes } from "@/lib/data";
import { accentMap, CARD } from "@/lib/icons";

export default function ChildOutcomes() {
  return (
    <section className="bg-cream-soft py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
          Everything we do is designed to help children become
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {childOutcomes.map(({ label, line, accent }) => {
            const tone = accentMap[accent] ?? accentMap.green;
            return (
              <div key={label} className={`${CARD} ${tone.card} flex flex-col p-6`}>
                <span aria-hidden className={`block h-1 w-10 rounded-full ${tone.bar}`} />
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
