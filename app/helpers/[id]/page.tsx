import { getSupabase } from "@/lib/supabase";
import { Volunteer } from "@/lib/types";
import { getCategoryLabel } from "@/lib/categories";
import { notFound } from "next/navigation";
import Image from "next/image";

export const dynamic = "force-dynamic";
import VolunteerProfileClient from "./profile-client";

const DAYS_ORDER = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default async function VolunteerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await getSupabase()
    .from("volunteers")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) notFound();

  const volunteer = data as Volunteer;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
        <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
          {volunteer.photo_url ? (
            <Image
              src={volunteer.photo_url}
              alt={volunteer.name}
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
              {volunteer.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {volunteer.name}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {volunteer.categories.map((cat) => (
              <span
                key={cat}
                className="text-sm bg-blue-50 text-primary px-3 py-1 rounded-full"
              >
                {getCategoryLabel(cat)}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">About</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {volunteer.bio}
        </p>
      </section>

      {/* Availability */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Availability
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {DAYS_ORDER.map((day) => {
            const slots = volunteer.availability[day];
            if (!slots || slots.length === 0) return null;
            return (
              <div key={day} className="bg-gray-50 rounded-lg p-3">
                <p className="font-medium text-gray-800">{capitalize(day)}</p>
                <p className="text-sm text-gray-500">
                  {slots.map(capitalize).join(", ")}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Request Help Button */}
      <VolunteerProfileClient
        volunteerId={volunteer.id}
        volunteerName={volunteer.name}
      />
    </div>
  );
}
