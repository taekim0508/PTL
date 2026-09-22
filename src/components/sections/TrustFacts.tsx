import { valueStatements, keyFacts } from "@/lib/data";
import IconGrid from "@/components/IconGrid";

export default function TrustFacts() {
  return (
    <section className="bg-cream-soft py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
          PTL at a Glance
        </h2>

        <div className="mt-10">
          <IconGrid items={valueStatements} variant="plain" columns="sm:grid-cols-3 lg:grid-cols-6" />
        </div>

        <dl className="mt-12 grid gap-x-8 gap-y-4 border-t border-forest/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {keyFacts.map(({ label, value }) => (
            <div key={label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                {label}
              </dt>
              <dd className="mt-1 text-base leading-relaxed text-charcoal/75">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
