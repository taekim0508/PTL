type Props = {
  className?: string;
  title?: string;
};

export default function InstagramReelEmbed({
  className = "",
  title = "PTL Treehouse Instagram reel",
}: Props) {
  return (
    <div className={`border border-forest/10 bg-white ${className}`}>
      <iframe
        title={title}
        src="https://www.instagram.com/reel/DRfMkynAMAO/embed/"
        className="h-full w-full"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
