import { aboutIntro, feelStatements, mission, vision, team } from "@/lib/data";
import { accentMap, CARD } from "@/lib/icons";
import PageHeader from "@/components/PageHeader";
import SectionNav from "@/components/SectionNav";
import ItemGrid from "@/components/ItemGrid";
import ContentPhoto from "@/components/ContentPhoto";

export default function AboutUs() {
  return (
    <>
      <PageHeader eyebrow="About" title="About Us" lead={aboutIntro.lead}>
        <SectionNav
          items={[
            { id: "our-story", label: "Our Story" },
            { id: "mission", label: "Mission" },
            { id: "vision", label: "Vision" },
            { id: "team", label: "Meet Our Team" },
          ]}
        />
      </PageHeader>

      <section id="our-story" className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <ContentPhoto
            src="/home/ptltreehouse-door-2.jpg"
            alt="The PTL Treehouse gate sign, with the words: a community that grows with your child"
            className="aspect-square w-full"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="space-y-4 text-lg leading-relaxed text-charcoal/75">
            {aboutIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-center font-display text-2xl font-semibold text-forest sm:text-3xl">
            We believe children learn best when they feel
          </h2>
          <div className="mt-8">
            <ItemGrid
              items={feelStatements}
              centered
              columns="sm:grid-cols-3 lg:grid-cols-6"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-4 text-center text-lg leading-relaxed text-charcoal/75">
          {aboutIntro.closing.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section id="mission" className="bg-forest py-16 text-cream">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {mission.heading}
          </h2>
          <p className="mt-6 font-display text-2xl leading-relaxed text-cream/90 sm:text-3xl">
            {mission.statement}
          </p>
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <h2 className="text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
          {vision.heading}
        </h2>
        <p className="mt-3 text-center text-lg text-charcoal/75">{vision.lead}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {vision.loves.map(({ label, accent }) => {
            const tone = accentMap[accent];
            return (
              <div
                key={label}
                className={`${CARD} ${tone.card} px-6 py-8 text-center`}
              >
                <span
                  aria-hidden
                  className={`mx-auto block h-1 w-10 rounded-full ${tone.bar}`}
                />
                <p className="mt-4 font-display text-2xl font-semibold text-forest">
                  {label}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-charcoal/75">
          {vision.closing}
        </p>
      </section>

      <section id="team" className="bg-cream-soft py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
            {team.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg leading-relaxed text-charcoal/75">
            {team.lead}
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <ContentPhoto
              src={team.image}
              alt={team.imageAlt}
              className="aspect-[4/3] w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <ul className="space-y-4">
              {team.members.map(({ name, role }) => (
                <li
                  key={name}
                  className="rounded-soft border border-forest/10 bg-white px-6 py-5 shadow-sm"
                >
                  <p className="font-display text-2xl font-semibold text-forest">{name}</p>
                  <p className="mt-1 text-base text-charcoal/75">{role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
