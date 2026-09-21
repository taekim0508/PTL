import { parentWants } from "@/lib/data";
import IconGrid from "@/components/IconGrid";

export default function ParentWants() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <h2 className="text-center font-display text-3xl font-semibold text-forest sm:text-4xl">
        What Every Parent Wants
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-lg leading-relaxed text-charcoal/65">
        You want your child to:
      </p>

      <div className="mt-10">
        <IconGrid
          items={parentWants}
          variant="inline"
          columns="sm:grid-cols-2 lg:grid-cols-3"
        />
      </div>
    </section>
  );
}
