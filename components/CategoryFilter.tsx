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
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => onChange(null)}
        className={`px-4 py-2 rounded-full text-base font-medium transition-colors ${
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
          className={`px-4 py-2 rounded-full text-base font-medium transition-colors ${
            selected === cat.id
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {cat.emoji} {cat.label}
        </button>
      ))}
    </div>
  );
}
