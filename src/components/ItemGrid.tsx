import { accentMap } from "@/lib/icons";

export type Item = {
  label: string;
  line?: string;
  accent?: string;
};

type Props = {
  items: Item[];
  columns?: string;
  /** Centers each item, for short label-only lists. */
  centered?: boolean;
  /** Light type for the dark bands. */
  tone?: "light" | "dark";
};

/**
 * The flat-list motif: an accent rule, the label, then the line.
 *
 * This is deliberately the plainest block on the site, and it is used for
 * supporting lists only. Running it four times down one page was most of what
 * made the old pages feel machine-set, so the lead block of a section now
 * takes a shape of its own and this carries what sits underneath.
 */
export default function ItemGrid({
  items,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
  centered = false,
  tone = "light",
}: Props) {
  const dark = tone === "dark";

  return (
    <div className={`grid gap-x-10 gap-y-8 ${columns}`}>
      {items.map(({ label, line, accent }) => {
        const bar = accent ? accentMap[accent].bar : "bg-gold";
        return (
          <div
            key={label}
            className={centered ? "flex flex-col items-center text-center" : ""}
          >
            <span
              aria-hidden
              className={`block h-[3px] w-10 rounded-full ${dark ? "bg-gold-soft" : bar} ${
                centered ? "mx-auto" : ""
              }`}
            />
            <h3
              className={`mt-3 font-display text-lg font-semibold leading-tight ${
                dark ? "text-cream" : "text-forest"
              }`}
            >
              {label}
            </h3>
            {line ? (
              <p
                className={`mt-1.5 text-base leading-relaxed ${
                  dark ? "text-cream/75" : "text-charcoal/80"
                }`}
              >
                {line}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
