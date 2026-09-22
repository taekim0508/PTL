import { pageMetadata } from "@/lib/metadata";
import ParentResources from "@/components/sections/ParentResources";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers for new and current PTL Treehouse families on hours, curriculum, safety and health, enrollment, fees, and parent involvement.",
  path: "/faq",
});

export default function Page() {
  return <ParentResources />;
}
