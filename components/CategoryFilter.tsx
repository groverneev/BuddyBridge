"use client";

import { CATEGORIES } from "@/lib/categories";

export default function CategoryFilter({
  selected,
  onChange,
}: {
  selected: string | null;
  onChange: (category: string | null) => void;
}) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
      <div className="flex gap-2 md:gap-3 md:flex-wrap md:justify-center min-w-max md:min-w-0">
        <button
          onClick={() => onChange(null)}
          className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors whitespace-nowrap ${
            selected === null
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors whitespace-nowrap ${
              selected === cat.id
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
