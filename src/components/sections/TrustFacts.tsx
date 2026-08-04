import { homeFacts } from "@/lib/data";

export default function TrustFacts() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-4 sm:px-8 sm:py-5">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {homeFacts.map(({ label, line }) => (
          <div
            key={label}
            className="flex h-full flex-col border border-forest/12 bg-white px-4 py-3"
          >
            <p className="text-sm font-semibold text-forest">{label}</p>
            <p className="mt-1 flex-1 text-sm leading-6 text-charcoal/66">{line}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
