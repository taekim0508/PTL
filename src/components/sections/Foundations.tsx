import { homeFoundations } from "@/lib/data";
import { accentMap, CARD } from "@/lib/icons";

export default function Foundations() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
          The PTL Difference
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-charcoal/75">
          Play. Pray. Prepare. Everything we do at PTL Treehouse is guided by
          these three foundational pillars.
        </p>

        <div className="mt-10 grid items-start gap-5 md:grid-cols-3">
          {homeFoundations.map(({ label, line, accent }, index) => {
            const tone = accentMap[accent] ?? accentMap.green;
            return (
              <div key={label} className={`${CARD} ${tone.card} flex h-full flex-col p-7`}>
                <span aria-hidden className={`block h-1 w-10 rounded-full ${tone.bar}`} />
                <p
                  aria-hidden
                  className={`mt-3 font-display text-sm font-semibold tracking-[0.2em] ${tone.text}`}
                >
                  0{index + 1}
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-forest">
                  {label}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-charcoal/75">
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
