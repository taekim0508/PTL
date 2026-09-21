"use client";

import Image from "next/image";
import { useApp } from "@/context/AppContext";

const RATIO = 102.77 / 96.41;
const INTRINSIC = 176;

type Props = {
  /** Tailwind height classes. The mark scales to whatever height it is given. */
  className?: string;
  preload?: boolean;
};

export default function Logo({ className = "h-16", preload = false }: Props) {
  const { goTo } = useApp();

  return (
    <button
      type="button"
      onClick={() => goTo("home")}
      className="flex shrink-0 items-center"
      aria-label="PTL Treehouse, go to home"
    >
      <Image
        src="/ptl-logo.svg"
        alt="PTL Treehouse Early Learning Center"
        width={Math.round(INTRINSIC * RATIO)}
        height={INTRINSIC}
        preload={preload}
        className={`w-auto transition-[height] duration-300 ease-out ${className}`}
      />
    </button>
  );
}
