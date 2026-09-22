import { pageMetadata } from "@/lib/metadata";
import Approach from "@/components/sections/Approach";

export const metadata = pageMetadata({
  title: "Our Approach",
  description:
    "Play. Pray. Prepare. How PTL Treehouse teaches through play, weaves faith through the day, and prepares children for Kindergarten.",
  path: "/our-approach",
});

export default function Page() {
  return <Approach />;
}
