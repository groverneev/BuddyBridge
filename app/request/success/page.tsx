import Link from "next/link";

export default function RequestSuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-6">&#10003;</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Request Received!
      </h1>
      <p className="text-xl text-gray-600 mb-2">
        Thank you for reaching out. We&apos;ve received your request.
      </p>
      <p className="text-lg text-gray-500 mb-8">
        We&apos;ll call or email you within 24 hours to confirm everything.
      </p>
      <Link
        href="/helpers"
        className="inline-block bg-primary text-white text-lg px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
      >
        Browse More Helpers
      </Link>
    </div>
  );
}
