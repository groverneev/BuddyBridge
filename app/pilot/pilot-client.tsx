"use client";

import { useState } from "react";
import Image from "next/image";

// Phone photos are either portrait (3:4) or landscape (4:3)
function getDimensions(filename: string) {
  return filename.includes("PORTRAIT")
    ? { width: 900, height: 1200 }
    : { width: 1200, height: 900 };
}

export default function PilotClient({ images }: { images: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  function open(img: string, index: number) {
    setSelected(img);
    setSelectedIndex(index);
  }

  function close() {
    setSelected(null);
  }

  function prev() {
    const i = (selectedIndex - 1 + images.length) % images.length;
    setSelected(images[i]);
    setSelectedIndex(i);
  }

  function next() {
    const i = (selectedIndex + 1) % images.length;
    setSelected(images[i]);
    setSelectedIndex(i);
  }

  return (
    <>
      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 gap-3">
        {images.map((img, i) => {
          const { width, height } = getDimensions(img);
          return (
            <div
              key={img}
              className="break-inside-avoid mb-3 cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => open(img, i)}
            >
              <Image
                src={`/Pictures/${img}`}
                alt=""
                width={width}
                height={height}
                style={{ width: "100%", height: "auto" }}
                className="transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/80 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <Image
            src={`/Pictures/${selected}`}
            alt=""
            {...getDimensions(selected)}
            style={{ maxWidth: "100%", maxHeight: "90vh", width: "auto", height: "auto" }}
            className="rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Next"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 text-white/60 text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
