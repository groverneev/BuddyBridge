"use client";

import { useState } from "react";
import Image from "next/image";
import { Volunteer } from "@/lib/types";
import RequestHelpModal from "@/components/RequestHelpModal";

export default function VolunteerCard({ volunteer }: { volunteer: Volunteer }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            {volunteer.photo_url ? (
              <Image
                src={volunteer.photo_url}
                alt={volunteer.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl text-gray-400">
                {volunteer.name.charAt(0)}
              </div>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            {volunteer.name}
          </h3>
        </div>
        <p className="text-gray-600 mb-4">{volunteer.bio}</p>
        <button
          onClick={() => setModalOpen(true)}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Request Help
        </button>
      </div>

      <RequestHelpModal
        volunteerId={volunteer.id}
        volunteerName={volunteer.name}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
