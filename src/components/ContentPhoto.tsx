"use client";

import Image from "next/image";

type Props = {
  alt: string;
  src?: string;
  stubLabel?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export default function ContentPhoto({
  alt,
  src,
  stubLabel,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "100vw",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden border border-forest/10 bg-cream-soft ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover object-center ${imageClassName}`}
        />
      ) : (
        <div className="flex h-full min-h-[280px] items-center justify-center bg-[linear-gradient(135deg,rgba(249,244,233,0.8),rgba(255,255,255,1))] p-6 text-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Image Coming Soon
            </p>
            {stubLabel ? (
              <p className="mt-2 font-display text-2xl text-forest">{stubLabel}</p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
