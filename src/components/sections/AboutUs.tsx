import { teamPlaceholders } from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function AboutUs() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-4xl font-semibold text-forest">About Us</h1>
      <p className="mt-2 font-accent text-2xl text-gold">
        A school built by two women who saw what young children deserved.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <PlaceholderImage
          caption="Photo — Esther Koh and Julie Kim"
          className="aspect-[4/3] w-full"
          tone="rose"
        />
        <div className="space-y-4 text-sm leading-relaxed text-charcoal/75">
          <p>
            PTL Treehouse was founded over 13 years ago on a simple dream: a
            place where children feel safe, loved, and excited to learn, and
            where faith is lived out naturally in everyday moments.
          </p>
          <p>
            Today, co-owners and directors Esther Koh and Julie Kim carry
            that same vision forward together — small enough that teachers
            know each child by name, intentional enough that Korean and
            English, faith and academics, play and structure all have their
            place.
          </p>
          <p>
            Our prayer is that every child who enters PTL Treehouse leaves
            knowing they are loved, capable, and ready for what&apos;s next.
          </p>
        </div>
      </div>

      <h2 className="mt-16 font-display text-2xl font-semibold text-forest">
        Meet the Team
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {teamPlaceholders.map(({ name, role }) => (
          <div key={`${name}-${role}`} className="text-center">
            <PlaceholderImage
              caption="Team photo"
              className="aspect-square w-full"
              tone="forest"
            />
            <p className="mt-3 font-display text-sm font-semibold text-forest">{name}</p>
            <p className="text-xs text-charcoal/60">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
