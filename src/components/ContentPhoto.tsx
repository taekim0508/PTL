import Image from "next/image";

type Props = {
  /** Omit to render the placeholder. */
  src?: string | null;
  alt: string;
  /** Describes the photo the school still needs to supply. */
  placeholder?: string;
  className?: string;
  imageClassName?: string;
  preload?: boolean;
  sizes?: string;
};

export default function ContentPhoto({
  src,
  alt,
  placeholder,
  className = "",
  imageClassName = "",
  preload = false,
  sizes = "100vw",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-soft border bg-cream-soft shadow-sm ${
        src ? "border-forest/10" : "border-dashed border-forest/25"
      } ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          preload={preload}
          sizes={sizes}
          className={`object-cover object-center ${imageClassName}`}
        />
      ) : (
        <div className="@container flex h-full flex-col items-center justify-center gap-1.5 p-4 text-center">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-dark @[16rem]:text-xs @[16rem]:tracking-[0.22em]">
            Photo coming soon
          </p>
          <p className="font-display text-sm leading-snug text-forest/70 @[16rem]:text-lg">
            {placeholder ?? alt}
          </p>
        </div>
      )}
    </div>
  );
}
