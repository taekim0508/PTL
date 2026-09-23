import { pageMetadata } from "@/lib/metadata";
import Admissions from "@/components/sections/Admissions";

export const metadata = pageMetadata({
  title: "Admissions & Tuition",
  description:
    "How to enroll at PTL Treehouse, program hours, how to ask about tuition, registration fees, and what your child needs before the first day.",
  path: "/admissions",
});

export default function Page() {
  return <Admissions />;
}
