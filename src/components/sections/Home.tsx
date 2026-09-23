import Hero from "@/components/sections/Hero";
import HeroVerse from "@/components/sections/HeroVerse";
import TrustFacts from "@/components/sections/TrustFacts";
import ParentWants from "@/components/sections/ParentWants";
import Foundations from "@/components/sections/Foundations";
import ProgramPreview from "@/components/sections/ProgramPreview";
import BilingualSnapshot from "@/components/sections/BilingualSnapshot";
import FounderMessage from "@/components/sections/FounderMessage";
import Reviews from "@/components/sections/Reviews";
import HomeCta from "@/components/sections/HomeCta";

/**
 * The page alternates surface and shape deliberately. No two neighbouring
 * sections share a background, and no silhouette repeats before the reader
 * has seen two others: hero, verse, fact strip, list beside a photo, dark
 * three-up, table beside a photo, full-bleed split, letter, reviews, split.
 *
 * "Everything we do is designed to help children become" used to sit between
 * the fact strip and the pillars. It is the same six promises as "What Every
 * Parent Wants" told from the school's side, so it moved to About, next to
 * the mission it restates.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <HeroVerse />
      <TrustFacts />
      <ParentWants />
      <Foundations />
      <ProgramPreview />
      <BilingualSnapshot />
      <FounderMessage />
      <Reviews />
      <HomeCta />
    </>
  );
}
