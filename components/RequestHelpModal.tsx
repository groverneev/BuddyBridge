"use client";

import { useRef } from "react";
import { requestHelp } from "@/app/actions/request-help";

export default function RequestHelpModal({
  volunteerId,
  volunteerName,
  open,
  onClose,
}: {
  volunteerId: string;
  volunteerName: string;
  open: boolean;
  onClose: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Request Help from {volunteerName}
        </h2>
        <p className="text-gray-600 mb-6">
          Fill out this form and we&apos;ll get back to you within 24 hours.
        </p>

        <form ref={formRef} action={requestHelp} className="space-y-4">
          <input type="hidden" name="volunteer_id" value={volunteerId} />
          <input type="hidden" name="volunteer_name" value={volunteerName} />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              name="senior_name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="senior_phone"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="(555) 000-0000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email (optional)
            </label>
            <input
              type="email"
              name="senior_email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Address *
            </label>
            <input
              type="text"
              name="senior_address"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="123 Main St, City, State ZIP"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What do you need help with? *
            </label>
            <textarea
              name="description"
              required
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="For example: I need help setting up WhatsApp on my phone"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              When would you like help? *
            </label>
            <input
              type="text"
              name="preferred_date"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="e.g. This Saturday morning, or any weekday afternoon"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
