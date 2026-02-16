import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          BuddyBridge
        </Link>
        <div className="flex items-center gap-6">
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
      </nav>
    </header>
  );
}
