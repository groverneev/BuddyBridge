export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-600">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BuddyBridge. Connecting
          generations, one helping hand at a time.
        </p>
      </div>
    </footer>
  );
}
