import { homeDirectorMessage } from "@/lib/data";
import ContentPhoto from "@/components/ContentPhoto";

export default function FounderMessage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-11">
      <div className="grid gap-7 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
        <div className="flex h-full flex-col justify-between border border-forest/12 bg-white p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Leadership
          </p>
          <div className="mt-2">
            <h2 className="font-display text-3xl font-semibold text-forest sm:text-4xl">
              {homeDirectorMessage.heading}
            </h2>
            <p className="mt-4 text-base leading-8 text-charcoal/74">
              {homeDirectorMessage.body}
            </p>
          </div>

          <div className="mt-5 space-y-1 text-sm font-semibold text-forest">
            {homeDirectorMessage.signoff.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <ContentPhoto
          src="/home/directors.jpeg"
          alt="Esther Koh and Julie Kim, co-directors of PTL Treehouse"
          className="aspect-[4/3] lg:h-full lg:aspect-auto"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
      </div>
    </section>
  );
}
