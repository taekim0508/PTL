import {
  aboutIntro,
  childOutcomes,
  feelStatements,
  mission,
  team,
  vision,
} from "@/lib/data";
import { accentMap, CARD } from "@/lib/icons";
import Band from "@/components/Band";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import SectionNav from "@/components/SectionNav";
import ContentPhoto from "@/components/ContentPhoto";

export default function AboutUs() {
  return (
    <>
      <PageHeader eyebrow="About" title="About Us" lead={aboutIntro.lead}>
        <SectionNav
          items={[
            { id: "our-story", label: "Our Story" },
            { id: "mission-vision", label: "Mission & Vision" },
            { id: "aiming-for", label: "What We Are Aiming For" },
            { id: "team", label: "Our Team" },
          ]}
        />
      </PageHeader>

      <Band id="our-story" tone="page" size="lg" seamless>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <ContentPhoto
            src="/home/ptltreehouse-door-2.jpg"
            alt="The PTL Treehouse gate sign, with the words: a community that grows with your child"
            className="aspect-square w-full"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div>
            <SectionHeading eyebrow="Our story" title="Fifteen Years On This Corner" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal/80">
              {aboutIntro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Six one-word statements. They were a heading plus a full card grid,
            which gave six adjectives the weight of a whole section. */}
        <div className="mt-14 rounded-soft border border-forest/12 bg-white px-6 py-8 shadow-sm sm:px-10">
          <h3 className="text-center font-display text-2xl font-semibold text-forest">
            We believe children learn best when they feel
          </h3>
          <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
            {feelStatements.map(({ label, accent }) => (
              <li
                key={label}
                className={`flex items-center gap-2.5 rounded-full border bg-cream px-5 py-2.5 font-display text-lg font-semibold text-forest ${
                  accentMap[accent]?.ring ?? "border-forest/15"
                }`}
              >
                <span
                  aria-hidden
                  className={`h-2 w-2 rounded-full ${accentMap[accent]?.bar ?? "bg-gold"}`}
                />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4 text-center text-lg leading-relaxed text-charcoal/80">
          {aboutIntro.closing.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Band>

      {/* Mission and Vision were two separate light sections saying one thing
          in two voices. Together on the dark band they read as the statement
          of purpose the page has been building towards. */}
      <section
        id="mission-vision"
        className="on-forest bg-forest py-16 text-cream sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-soft">
            {mission.heading}
          </p>
          <h2 className="mt-5 font-display text-2xl leading-relaxed sm:text-[2rem]">
            {mission.statement}
          </h2>

          <div className="mt-14 border-t border-cream/20 pt-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-soft">
              {vision.heading}
            </p>
            <p className="mt-4 text-lg text-cream/80">{vision.lead}</p>

            <ul className="mt-8 grid gap-px overflow-hidden rounded-soft bg-cream/20 sm:grid-cols-3">
              {vision.loves.map(({ label }) => (
                <li
                  key={label}
                  className="bg-forest px-6 py-8 font-display text-2xl font-semibold text-cream sm:text-[1.75rem]"
                >
                  {label}
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80">
              {vision.closing}
            </p>
          </div>
        </div>
      </section>

      <Band id="aiming-for" tone="band" size="lg" width="mid">
        <SectionHeading
          align="center"
          eyebrow="Outcomes"
          title={childOutcomes.heading}
          lead={childOutcomes.lead}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {childOutcomes.items.map(({ label, line, accent }) => {
            const tone = accentMap[accent] ?? accentMap.green;
            return (
              <div key={label} className={`${CARD} flex flex-col p-6`}>
                <span aria-hidden className={`block h-[3px] w-10 rounded-full ${tone.bar}`} />
                <h3 className="mt-4 font-display text-2xl font-semibold text-forest">
                  {label}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal/80">{line}</p>
              </div>
            );
          })}
        </div>
      </Band>

      <Band id="team" tone="page" size="lg">
        <SectionHeading eyebrow="Meet our team" title={team.heading} lead={team.lead} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <ContentPhoto
            src={team.image}
            alt={team.imageAlt}
            className="aspect-[4/3] w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <ul className="space-y-4">
            {team.members.map(({ name, role }) => (
              <li key={name} className={`${CARD} border-l-[3px] border-l-gold px-6 py-5`}>
                <p className="font-display text-2xl font-semibold text-forest">{name}</p>
                <p className="mt-1 text-base text-charcoal/80">{role}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 max-w-prose text-base leading-relaxed text-charcoal/70">
          Photography of the wider teaching team is still to come.
        </p>
      </Band>
    </>
  );
}
