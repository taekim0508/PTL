import type { ReactNode } from "react";

/**
 * Surfaces run on a four-step ladder. A section always sits one visible step
 * away from its neighbour, so the boundary never has to be guessed at:
 *
 *   page    the default cream page
 *   band    a sand band, the everyday alternate
 *   raised  a white band, for pages that need a third light step
 *   forest  the dark anchor, used once or twice per page for rhythm
 */
export type BandTone = "page" | "band" | "raised" | "forest";

const tones: Record<BandTone, string> = {
  page: "bg-cream",
  band: "bg-sand",
  raised: "bg-white",
  forest: "bg-forest text-cream on-forest",
};

/** Light bands also carry a hairline, so two light steps still read as two. */
const rules: Record<BandTone, string> = {
  page: "border-t border-forest/10",
  band: "border-t border-forest/10",
  raised: "border-t border-forest/10",
  forest: "",
};

const sizes = {
  sm: "py-10 sm:py-12",
  md: "py-14 sm:py-16",
  lg: "py-16 sm:py-20 lg:py-24",
};

const widths = {
  narrow: "max-w-3xl",
  reading: "max-w-4xl",
  mid: "max-w-5xl",
  wide: "max-w-7xl",
};

type Props = {
  children: ReactNode;
  tone?: BandTone;
  size?: keyof typeof sizes;
  width?: keyof typeof widths;
  /** Section landmarks get an id so the on-page nav can jump to them. */
  id?: string;
  /** The first band under a page header supplies its own edge. */
  seamless?: boolean;
  className?: string;
};

export default function Band({
  children,
  tone = "page",
  size = "md",
  width = "wide",
  id,
  seamless = false,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`${tones[tone]} ${seamless ? "" : rules[tone]} ${sizes[size]} ${className}`}
    >
      <div className={`mx-auto ${widths[width]} px-5 sm:px-8`}>{children}</div>
    </section>
  );
}
