import Link from "next/link";
import Image from "next/image";
import { Volunteer } from "@/lib/types";
import { getCategoryLabel } from "@/lib/categories";

const DAYS_ORDER = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

function formatAvailability(availability: Record<string, string[]>): string {
  const available = DAYS_ORDER.filter((d) => availability[d]?.length > 0);
  if (available.length === 0) return "Contact for availability";
  if (available.length >= 5) return "Most days";
  return available
    .map((d) => d.charAt(0).toUpperCase() + d.slice(1, 3))
    .join(", ");
}

export default function VolunteerCard({ volunteer }: { volunteer: Volunteer }) {
  return (
    <Link
      href={`/helpers/${volunteer.id}`}
      className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
    >
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
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {volunteer.name}
          </h3>
          <p className="text-sm text-gray-500">
            {formatAvailability(volunteer.availability)}
          </p>
        </div>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-2">{volunteer.bio}</p>
      <div className="flex flex-wrap gap-2">
        {volunteer.categories.map((cat) => (
          <span
            key={cat}
            className="text-sm bg-emerald-50 text-primary px-3 py-1 rounded-full"
          >
            {getCategoryLabel(cat)}
          </span>
        ))}
      </div>
    </Link>
  );
}
