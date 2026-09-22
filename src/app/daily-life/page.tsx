import { pageMetadata } from "@/lib/metadata";
import DailyLife from "@/components/sections/DailyLife";

export const metadata = pageMetadata({
  title: "Daily Life",
  description:
    "What a day at PTL Treehouse looks like hour by hour, with sample half-day and full-day schedules and the weekly afternoon enrichment classes.",
  path: "/daily-life",
});

export default function Page() {
  return <DailyLife />;
}
