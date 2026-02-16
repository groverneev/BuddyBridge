"use client";

import { useState } from "react";
import { Volunteer } from "@/lib/types";
import VolunteerCard from "@/components/VolunteerCard";
import CategoryFilter from "@/components/CategoryFilter";

export default function HelpersClient({
  volunteers,
}: {
  volunteers: Volunteer[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = selectedCategory
    ? volunteers.filter((v) => v.categories.includes(selectedCategory))
    : volunteers;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
        Our Helpers
      </h1>
      <p className="text-center text-gray-600 mb-8 text-lg">
        Browse our friendly volunteers and find someone who can help you.
      </p>

      <div className="mb-10">
        <CategoryFilter
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">
            {selectedCategory
              ? "No helpers found for this category yet."
              : "No helpers available right now."}
          </p>
          <p className="text-gray-400">
            Check back soon — new volunteers join regularly!
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((volunteer) => (
            <VolunteerCard key={volunteer.id} volunteer={volunteer} />
          ))}
        </div>
      )}
    </div>
  );
}
