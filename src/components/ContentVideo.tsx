type Props = {
  src: string;
  /** The still shown before the clip plays, and instead of it if it cannot. */
  poster: string;
  /** Described to a screen reader the way a photo's alt text would be. */
  label: string;
  className?: string;
};

/**
 * A short looping clip wearing ContentPhoto's frame, so a moving picture and
 * a still one sit on the page as the same object.
 *
 * It is a picture that happens to move: muted, looping, no controls, nothing
 * to miss by not watching. A browser that refuses to autoplay, or a reader
 * who has asked for less motion, is left with the poster frame, which is why
 * the poster has to stand on its own.
 */
export default function ContentVideo({ src, poster, label, className = "" }: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-soft border border-forest/12 bg-cream-soft shadow-sm ${className}`}
    >
      <video
        src={src}
        poster={poster}
        aria-label={label}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
      />
      {/* Only ever seen when the clip is suppressed: the poster, held still.
          Whichever of the two is display:none is out of the accessibility
          tree as well, so the label is never announced twice. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt={label}
        className="absolute inset-0 hidden h-full w-full object-cover object-center motion-reduce:block"
      />
    </div>
  );
}
