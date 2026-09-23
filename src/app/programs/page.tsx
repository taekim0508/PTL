import { pageMetadata } from "@/lib/metadata";
import ProgramsPage from "@/components/sections/ProgramsPage";

export const metadata = pageMetadata({
  title: "Preschool Programs",
  description:
    "Morning, full-day, and aftercare programs for ages 2.5 to 5, with Korean-English bilingual instruction woven through the week.",
  path: "/programs",
});

export default function Page() {
  return <ProgramsPage />;
}
