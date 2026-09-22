import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
};

/**
 * The h1 block that opens every interior page, on a sand band of its own with
 * a hard edge under it. Previously this floated on the same cream as the
 * first section, so a page had no visible top: the title, the lede and the
 * first block of content all ran together as one undifferentiated column.
 */
export default function PageHeader({ eyebrow, title, lead, children }: Props) {
  return (
    <header className="border-b border-forest/12 bg-sand">
      <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-16">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-dark">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-forest sm:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/80">
            {lead}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
