import { pageMetadata } from "@/lib/metadata";
import AboutUs from "@/components/sections/AboutUs";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Thirteen years of Christian bilingual preschool in Bothell, WA. Our story, our mission and vision, and the directors who run PTL Treehouse.",
  path: "/about",
});

export default function Page() {
  return <AboutUs />;
}
