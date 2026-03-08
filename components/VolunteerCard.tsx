import Link from "next/link";
import Image from "next/image";
import { Volunteer } from "@/lib/types";

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
        <h3 className="text-xl font-semibold text-gray-900">
          {volunteer.name}
        </h3>
      </div>
      <p className="text-gray-600 line-clamp-2">{volunteer.bio}</p>
    </Link>
  );
}
