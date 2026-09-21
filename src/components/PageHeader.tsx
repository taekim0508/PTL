import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
};

/** The h1 + lede block that opens every interior page. */
export default function PageHeader({ eyebrow, title, lead, children }: Props) {
  return (
    <header className="mx-auto max-w-7xl px-5 pt-14 text-center sm:px-8">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-dark">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 font-display text-4xl font-semibold text-forest sm:text-5xl">
        {title}
      </h1>
      {lead ? (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-charcoal/70">
          {lead}
        </p>
      ) : null}
      {children}
    </header>
  );
}
