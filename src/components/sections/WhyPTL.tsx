import { whyPTL } from "@/lib/data";
import { iconMap } from "@/lib/icons";

export default function WhyPTL() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-4xl font-semibold text-forest">Why PTL</h1>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-charcoal/70">
        Four things every PTL Treehouse family can count on.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {whyPTL.map(({ label, line, icon }) => {
          const Icon = iconMap[icon];
          return (
            <div key={label} className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest/10">
                <Icon className="h-6 w-6 text-forest" strokeWidth={1.5} />
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-forest">{label}</h2>
                <p className="mt-1 text-sm leading-relaxed text-charcoal/70">{line}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
