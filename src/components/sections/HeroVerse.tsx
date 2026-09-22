import { hero } from "@/lib/data";

/**
 * The "one day" passage, lifted out of the hero and given a dark band to
 * itself. It is the most personal writing on the site and it was previously
 * set as body copy between a headline and two paragraphs of prose, where it
 * read as filler. On its own, centred, against forest, it reads as what it is.
 */
export default function HeroVerse() {
  return (
    <section className="on-forest bg-forest py-16 text-cream sm:py-20">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <div className="space-y-1.5 font-display text-xl leading-relaxed text-cream/80 sm:text-2xl">
          {hero.verse.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <p className="mt-8 font-accent text-4xl text-gold-soft sm:text-5xl">{hero.turn}</p>

        <div className="mt-6 space-y-1.5 font-display text-xl leading-relaxed text-cream sm:text-2xl">
          {hero.today.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl border-t border-cream/20 pt-8 font-display text-2xl font-semibold leading-relaxed sm:text-[1.75rem]">
          {hero.close[0]}{" "}
          <span className="text-gold-soft">{hero.close[1]}</span>
        </p>
      </div>
    </section>
  );
}
