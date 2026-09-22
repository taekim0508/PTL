import { keyFacts } from "@/lib/data";

/**
 * The reference facts, as a strip rather than a section. Six short answers to
 * six short questions do not need a heading, a lede and a card each; they need
 * to be findable in one pass and then got out of the way.
 */
export default function TrustFacts() {
  return (
    <section className="border-y border-forest/12 bg-sand py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="sr-only">PTL Treehouse at a glance</h2>
        <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {keyFacts.map(({ label, value }) => (
            <div key={label} className="border-l-2 border-gold/50 pl-4">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
                {label}
              </dt>
              <dd className="mt-1.5 text-base leading-relaxed text-charcoal/85">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
