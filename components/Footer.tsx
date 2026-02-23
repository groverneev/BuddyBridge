import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/helpers", label: "Browse Helpers" },
    { href: "/volunteer/signup", label: "Become a Volunteer" },
    { href: "/our-story", label: "Our Story" },
    { href: "/about", label: "About" },
    { href: "/conduct", label: "Code of Conduct" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BuddyBridge. Connecting
          generations, one helping hand at a time.
        </p>
      </div>
    </footer>
  );
}
