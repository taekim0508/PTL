import type { ReactNode } from "react";

type Props = {
  /** The small caps line that names the section. */
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  /** Switches the palette for the dark bands. */
  tone?: "light" | "dark";
  /** A link or button that belongs beside the title, not under it. */
  action?: ReactNode;
  className?: string;
};

/**
 * Every section opens the same way: a short accent rule, an eyebrow, the
 * title. The rule is the part that matters. It is a fixed mark that says a
 * new section has started, so the reader never depends on a shift in
 * background tone to know where they are.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  action,
  className = "",
}: Props) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div
      className={`${centered ? "flex flex-col items-center text-center" : ""} ${className}`}
    >
      <div
        className={`flex w-full gap-6 ${
          centered
            ? "flex-col items-center"
            : action
              ? "flex-col sm:flex-row sm:items-end sm:justify-between"
              : "flex-col"
        }`}
      >
        <div className={centered ? "flex flex-col items-center" : ""}>
          <span
            aria-hidden
            className={`block h-[3px] w-12 rounded-full ${
              dark ? "bg-gold-soft" : "bg-gold"
            }`}
          />
          {eyebrow ? (
            <p
              className={`mt-4 text-xs font-bold uppercase tracking-[0.22em] ${
                dark ? "text-gold-soft" : "text-gold-dark"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`${eyebrow ? "mt-2" : "mt-5"} font-display text-3xl font-semibold leading-tight sm:text-[2.5rem] ${
              dark ? "text-cream" : "text-forest"
            }`}
          >
            {title}
          </h2>
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>

      {lead ? (
        <p
          className={`mt-4 max-w-prose text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${dark ? "text-cream/85" : "text-charcoal/80"}`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
