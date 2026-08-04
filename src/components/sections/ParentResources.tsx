import { CalendarDays, FileText, HelpCircle, Wallet } from "lucide-react";
import { admissionsSteps } from "@/lib/data";

const resources = [
  {
    icon: CalendarDays,
    label: "Calendar & Closures",
    line: "School calendar, holidays, and in-service days.",
  },
  {
    icon: FileText,
    label: "Handbook & Policies",
    line: "Daily schedule, health policies, and classroom guidelines.",
  },
  {
    icon: Wallet,
    label: "Tuition & Payments",
    line: "Tuition rates, payment schedule, and billing questions.",
  },
  {
    icon: HelpCircle,
    label: "Frequently Asked Questions",
    line: "Answers for new and current PTL families.",
  },
];

export default function ParentResources() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-4xl font-semibold text-forest">Parent Resources</h1>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-charcoal/70">
        Everything current and prospective PTL families need, in one place.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {resources.map(({ icon: Icon, label, line }) => (
          <div
            key={label}
            className="flex items-start gap-4 rounded-soft border border-forest/10 bg-cream p-5 shadow-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10">
              <Icon className="h-5 w-5 text-forest" strokeWidth={1.75} />
            </span>
            <div>
              <h2 className="font-display text-base font-semibold text-forest">{label}</h2>
              <p className="mt-1 text-sm text-charcoal/70">{line}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-semibold text-forest">
        New to PTL? Here&apos;s How Enrollment Works
      </h2>
      <ol className="mt-6 space-y-4">
        {admissionsSteps.map(({ step, label }) => (
          <li key={step} className="flex items-center gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm font-semibold text-cream">
              {step}
            </span>
            <span className="text-sm font-semibold text-charcoal/80">{label}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
