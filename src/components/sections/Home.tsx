import Hero from "@/components/sections/Hero";
import TrustFacts from "@/components/sections/TrustFacts";
import ParentWants from "@/components/sections/ParentWants";
import ChildOutcomes from "@/components/sections/ChildOutcomes";
import Foundations from "@/components/sections/Foundations";
import FounderMessage from "@/components/sections/FounderMessage";
import ProgramPreview from "@/components/sections/ProgramPreview";
import BilingualSnapshot from "@/components/sections/BilingualSnapshot";
import Testimonials from "@/components/sections/Testimonials";
import HomeCta from "@/components/sections/HomeCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustFacts />
      <ParentWants />
      <ChildOutcomes />
      <Foundations />
      <ProgramPreview />
      <BilingualSnapshot />
      <FounderMessage />
      <Testimonials />
      <HomeCta />
    </>
  );
}
