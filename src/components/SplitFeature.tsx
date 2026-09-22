import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  children: ReactNode;
  /** Puts the photo on the right instead of the left. */
  reverse?: boolean;
  /** The panel the copy sits on. */
  tone?: "forest" | "band" | "page";
  id?: string;
  sizes?: string;
};

const panels = {
  forest: "bg-forest text-cream on-forest",
  band: "bg-sand",
  page: "bg-cream",
};

/**
 * A photo bleeding to the edge of the viewport against a solid panel of copy.
 * The hard seam between the two is the strongest divider the site has, so
 * these rows are what break a long page into chapters.
 */
export default function SplitFeature({
  src,
  alt,
  children,
  reverse = false,
  tone = "forest",
  id,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: Props) {
  return (
    <section id={id} className="grid lg:grid-cols-2">
      <div
        className={`relative min-h-[260px] sm:min-h-[340px] lg:min-h-[520px] ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-center" />
      </div>

      <div
        className={`flex items-center px-5 py-12 sm:px-8 sm:py-16 lg:py-20 ${
          panels[tone]
        } ${reverse ? "lg:order-1 lg:justify-end lg:pr-14 xl:pr-20" : "lg:pl-14 xl:pl-20"}`}
      >
        <div className="w-full max-w-xl">{children}</div>
      </div>
    </section>
  );
}
