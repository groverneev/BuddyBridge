"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useTransition } from "react";
import { volunteerSignup } from "@/app/actions/volunteer-signup";
import { CATEGORIES } from "@/lib/categories";
import Link from "next/link";

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
const TIME_SLOTS = ["morning", "afternoon", "evening"];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Resize + re-encode an image to JPEG so it never exceeds ~500 KB. */
async function compressImage(file: File): Promise<File> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const MAX = 1200;
        let { width, height } = img;
        if (width > MAX || height > MAX) {
          if (width >= height) {
            height = Math.round((height / width) * MAX);
            width = MAX;
          } else {
            width = Math.round((width / height) * MAX);
            height = MAX;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          (blob) =>
            resolve(
              blob
                ? new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), {
                    type: "image/jpeg",
                  })
                : file
            ),
          "image/jpeg",
          0.82
        );
      };
      img.src = e.target!.result as string;
    };
    reader.readAsDataURL(file);
  });
}

function SignupForm() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const [isPending, startTransition] = useTransition();

  if (success) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6">&#127881;</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to BuddyBridge!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for signing up as a volunteer. Your profile is now live and
          seniors in your community can request your help.
        </p>
        <Link
          href="/helpers"
          className="inline-block bg-primary text-white text-lg px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
        >
          View All Helpers
        </Link>
      </div>
    );
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const photo = formData.get("photo") as File | null;
    if (photo && photo.size > 0) {
      const compressed = await compressImage(photo);
      formData.set("photo", compressed, compressed.name);
    }
    startTransition(async () => {
      await volunteerSignup(formData);
    });
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Become a Volunteer
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        Join BuddyBridge and help seniors in your community with everyday tasks.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone (optional)
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Photo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Photo (optional)
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base"
          />
          <p className="mt-1 text-xs text-gray-500">
            Any size is fine — photos are automatically resized before upload.
          </p>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            About You *
          </label>
          <textarea
            name="bio"
            required
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Tell seniors a bit about yourself — what you enjoy, why you want to volunteer, etc."
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What can you help with? *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CATEGORIES.map((cat) => (
              <label
                key={cat.id}
                className="flex items-center gap-2 bg-gray-50 rounded-lg p-3 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  name="categories"
                  value={cat.id}
                  className="w-5 h-5 rounded text-primary"
                />
                <span>
                  {cat.emoji} {cat.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            When are you available?
          </label>
          <div className="space-y-3">
            {DAYS.map((day) => (
              <div key={day} className="bg-gray-50 rounded-lg p-3">
                <span className="block font-medium text-gray-700 mb-2">
                  {capitalize(day)}
                </span>
                <div className="flex flex-wrap gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <label
                      key={slot}
                      className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm border border-gray-200"
                    >
                      <input
                        type="checkbox"
                        name={`availability_${day}`}
                        value={slot}
                        className="w-4 h-4 rounded text-primary"
                      />
                      <span>{capitalize(slot)}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white text-xl px-6 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Signing up…" : "Sign Up as a Volunteer"}
        </button>
      </form>
    </div>
  );
}

export default function VolunteerSignupPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading...</div>}>
      <SignupForm />
    </Suspense>
  );
}
