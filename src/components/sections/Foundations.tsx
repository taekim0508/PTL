import { homeFoundations } from "@/lib/data";

export default function Foundations() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-11">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          The PTL Difference
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-forest sm:text-4xl">
          Play to Learn, Pray to Learn, Prepare to Learn
        </h2>
        <p className="mt-3 text-base leading-8 text-charcoal/72">
          PTL Treehouse is shaped by three simple commitments that guide the
          way children grow here every day.
        </p>
      </div>

      <div className="mt-7 grid items-start gap-4 lg:grid-cols-3 lg:[grid-auto-rows:1fr]">
        {homeFoundations.map(({ label, line }) => {
          return (
            <div
              key={label}
              className="flex h-full flex-col border border-forest/12 bg-white p-5"
            >
              <h3 className="font-display text-2xl font-semibold leading-tight text-forest">
                {label}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-charcoal/74">{line}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
