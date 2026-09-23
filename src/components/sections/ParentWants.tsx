import { parentWants } from "@/lib/data";
import { accentMap } from "@/lib/icons";
import Band from "@/components/Band";
import SectionHeading from "@/components/SectionHeading";
import ContentPhoto from "@/components/ContentPhoto";

/**
 * A photo holding one side and a numbered list holding the other. The list is
 * the same six promises as before, but a list that runs beside a picture of
 * the place reads as an account of a school, where six identical cards in a
 * grid read as a feature matrix.
 */
export default function ParentWants() {
  return (
    <Band tone="page" size="lg">
      {/* Equal halves. The old 0.85/1.15 split put the seam between the
          columns 86px left of the container's centre, which read as the
          whole section leaning left. */}
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Why families choose PTL"
            title="What Every Parent Wants"
            lead="You want your child to feel at home somewhere, and to leave it more themselves than when they arrived. That is the whole job."
          />
          <ContentPhoto
            src="/home/activities.jpg"
            alt="Children and a teacher making paper collages together at a low table"
            className="mt-8 aspect-[4/3] w-full"
            sizes="(max-width: 1024px) 100vw, (max-width: 1344px) 45vw, 576px"
          />
        </div>

        <ol className="divide-y divide-forest/12 border-t border-forest/12">
          {parentWants.map(({ label, line, accent }, index) => {
            const tone = accentMap[accent] ?? accentMap.green;
            return (
              <li key={label} className="flex gap-5 py-6 first:pt-7">
                <span
                  aria-hidden
                  className={`mt-1 font-display text-sm font-semibold tracking-[0.2em] ${tone.text}`}
                >
                  0{index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-forest">
                    {label}
                  </h3>
                  <p className="mt-1.5 max-w-prose text-base leading-relaxed text-charcoal/80">
                    {line}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Band>
  );
}
