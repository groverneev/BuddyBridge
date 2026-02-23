"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          BuddyBridge
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/conduct"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Code of Conduct
          </Link>
          <Link
            href="/our-story"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Our Story
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-primary font-medium"
          >
            About
          </Link>
          <Link
            href="/volunteer/signup"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Become a Volunteer
          </Link>
          <Link
            href="/helpers"
            className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark"
          >
            Browse Helpers
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-2 text-gray-700"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <Link
            href="/helpers"
            onClick={() => setMenuOpen(false)}
            className="block bg-primary text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-primary-dark"
          >
            Browse Helpers
          </Link>
          <Link
            href="/volunteer/signup"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 px-4 py-3 rounded-lg font-medium text-center hover:bg-gray-50"
          >
            Become a Volunteer
          </Link>
          <Link
            href="/our-story"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 px-4 py-3 rounded-lg font-medium text-center hover:bg-gray-50"
          >
            Our Story
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 px-4 py-3 rounded-lg font-medium text-center hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            href="/conduct"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 px-4 py-3 rounded-lg font-medium text-center hover:bg-gray-50"
          >
            Code of Conduct
          </Link>
        </div>
      )}
    </header>
  );
}
