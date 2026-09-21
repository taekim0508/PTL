import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  preload?: boolean;
  sizes?: string;
};

export default function ContentPhoto({
  src,
  alt,
  className = "",
  imageClassName = "",
  preload = false,
  sizes = "100vw",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-soft border border-forest/10 bg-cream-soft shadow-sm ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        preload={preload}
        sizes={sizes}
        className={`object-cover object-center ${imageClassName}`}
      />
    </div>
  );
}
