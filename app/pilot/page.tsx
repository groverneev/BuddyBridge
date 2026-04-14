import PilotClient from "./pilot-client";
import { getSiteImages } from "@/lib/site-images";

export const dynamic = "force-dynamic";

const stats = [
  { value: "14", label: "Completed Jobs" },
  { value: "5", label: "Senior Households" },
  { value: "100%", label: "Completion Rate" },
];

export default async function PilotPage() {
  const images = await getSiteImages("pilot");

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Our Pilot</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          A look at BuddyBridge in action — volunteers and seniors connecting in our community.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-emerald-50 rounded-2xl py-8 px-4 text-center">
            <p className="text-5xl font-bold text-emerald-700 mb-2">{stat.value}</p>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <PilotClient images={images} />
    </div>
  );
}
