import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/data";
import Band from "@/components/Band";
import SectionHeading from "@/components/SectionHeading";
import ContentPhoto from "@/components/ContentPhoto";

export default function ProgramPreview() {
  return (
    <Band tone="page" size="lg">
      <SectionHeading
        eyebrow="Four ways to join us"
        title="Our Programs"
        lead="Morning, lunch-extended, full-day, and aftercare options, all inside the same nurturing, faith-filled, bilingual school."
        action={
          <Link
            href="/programs"
            className="flex items-center gap-1.5 text-base font-semibold text-forest transition-colors hover:text-forest-dark"
          >
            See all programs
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        }
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
        <div className="overflow-hidden rounded-soft border border-forest/12 bg-white shadow-sm">
          {programs.map((program, index) => (
            /* Each row deep-links to its own programme, which is a thing the
               accordion on /programs knows how to open. */
            <Link
              key={program.id}
              href={`/programs#${program.id}`}
              className={`flex w-full flex-col gap-1 border-l-[3px] border-transparent px-5 py-5 text-left transition-colors hover:border-gold hover:bg-cream/70 sm:flex-row sm:items-start sm:justify-between sm:gap-6 ${
                index !== programs.length - 1 ? "border-b border-b-forest/12" : ""
              }`}
            >
              <span>
                <span className="block font-display text-xl font-semibold leading-tight text-forest">
                  {program.name}
                </span>
                <span className="mt-1 block max-w-md text-base leading-relaxed text-charcoal/80">
                  {program.summary}
                </span>
              </span>
              <span className="shrink-0 sm:text-right">
                <span className="block text-sm font-semibold text-gold-dark">
                  {program.hours}
                </span>
                <span className="mt-0.5 block font-display text-lg font-semibold text-forest">
                  {program.tuition}
                  <span className="text-sm font-normal text-charcoal/70">/mo</span>
                </span>
              </span>
            </Link>
          ))}
        </div>

        <figure className="lg:self-start">
          <ContentPhoto
            src="/home/learning.jpg"
            alt="A child working with a colorful counting abacus"
            className="aspect-[4/3] w-full"
            sizes="(max-width: 1024px) 100vw, 44vw"
          />
          <figcaption className="mt-3 text-base leading-relaxed text-charcoal/80">
            Hands-on projects, language-rich lessons, and joyful classroom
            routines help children build confidence through everyday learning.
          </figcaption>
        </figure>
      </div>
    </Band>
  );
}
