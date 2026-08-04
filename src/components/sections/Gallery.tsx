import { Images } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";

const captions = [
  "Photo — gardening together",
  "Photo — morning prayer",
  "Photo — art & painting",
  "Photo — outdoor play",
  "Photo — circle time",
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <h2 className="text-center font-display text-3xl font-semibold text-forest">
        A Glimpse Into Life at PTL Treehouse
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {captions.map((caption) => (
          <PlaceholderImage key={caption} caption={caption} className="aspect-square" tone="warm" />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <span className="flex items-center gap-2 rounded-full border-2 border-forest px-6 py-3 text-sm font-semibold text-forest">
          <Images className="h-4 w-4" strokeWidth={2} />
          Full photo gallery lives here
        </span>
      </div>
    </section>
  );
}
