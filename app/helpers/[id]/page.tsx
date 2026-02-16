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
                className="text-sm bg-emerald-50 text-primary px-3 py-1 rounded-full"
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
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Availability
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-gray-500 py-2 pr-4 w-24"></th>
                {DAYS_ORDER.map((day) => (
                  <th
                    key={day}
                    className="text-center text-sm font-medium text-gray-700 py-2 px-1"
                  >
                    {capitalize(day).slice(0, 3)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["morning", "afternoon", "evening"].map((slot) => (
                <tr key={slot} className="border-t border-gray-100">
                  <td className="text-sm text-gray-500 py-3 pr-4">
                    {capitalize(slot)}
                  </td>
                  {DAYS_ORDER.map((day) => {
                    const available =
                      volunteer.availability[day]?.includes(slot);
                    return (
                      <td key={day} className="text-center py-3 px-1">
                        {available ? (
                          <span className="inline-block w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full leading-8 text-sm font-medium">
                            &#10003;
                          </span>
                        ) : (
                          <span className="inline-block w-8 h-8 bg-gray-50 text-gray-300 rounded-full leading-8 text-sm">
                            &mdash;
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
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
