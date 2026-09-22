import { pageMetadata } from "@/lib/metadata";
import Contact from "@/components/sections/Contact";

export const metadata = pageMetadata({
  title: "Contact & Visit",
  description:
    "Visit PTL Treehouse in Bothell, WA. Request a tour, call or text 425-753-1550, or email info@ptltreehouse.com.",
  path: "/contact",
});

export default function Page() {
  return <Contact />;
}
