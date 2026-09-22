"use client";

import Modal from "@/components/Modal";
import TourRequestForm from "@/components/TourRequestForm";
import { useApp } from "@/context/AppContext";

export default function TourModal() {
  const { closeTour } = useApp();

  return (
    <Modal title="Schedule a Tour" onClose={closeTour}>
      <p className="text-base leading-relaxed text-charcoal/75">
        Tell us a little about your family and we&apos;ll follow up to confirm a
        time to visit.
      </p>
      <div className="mt-5">
        <TourRequestForm variant="modal" />
      </div>
    </Modal>
  );
}
