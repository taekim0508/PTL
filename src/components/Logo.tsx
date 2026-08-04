"use client";

import Image from "next/image";
import { useApp } from "@/context/AppContext";

export default function Logo({ height = 48 }: { height?: number }) {
  const { goTo } = useApp();
  const width = Math.round(height * (102.77 / 96.41));

  return (
    <button
      type="button"
      onClick={() => goTo("home")}
      className="flex items-center rounded-soft"
      aria-label="PTL Treehouse — go to home"
    >
      <Image
        src="/ptl-logo.svg"
        alt="PTL Treehouse Early Learning Center"
        width={width}
        height={height}
        priority
      />
    </button>
  );
}
