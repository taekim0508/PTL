"use client";

import { Play } from "lucide-react";
import Modal from "@/components/Modal";
import { useApp } from "@/context/AppContext";

export default function VideoModal() {
  const { closeVideo } = useApp();

  return (
    <Modal title="Our Story" onClose={closeVideo}>
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-soft border border-forest/15 bg-forest/5">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream">
          <Play className="h-5 w-5" fill="currentColor" strokeWidth={0} />
        </span>
        <p className="px-6 text-center text-sm font-semibold text-forest/70">
          Your welcome video will play here
        </p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
        A short welcome video from Esther and Julie will introduce PTL
        Treehouse to families visiting the live site.
      </p>
    </Modal>
  );
}
