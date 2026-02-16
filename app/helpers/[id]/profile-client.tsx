"use client";

import { useState } from "react";
import RequestHelpModal from "@/components/RequestHelpModal";

export default function VolunteerProfileClient({
  volunteerId,
  volunteerName,
}: {
  volunteerId: string;
  volunteerName: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="w-full sm:w-auto bg-primary text-white text-xl px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
      >
        Request Help from {volunteerName}
      </button>

      <RequestHelpModal
        volunteerId={volunteerId}
        volunteerName={volunteerName}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
