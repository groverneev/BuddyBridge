import Link from "next/link";

export default function OurStoryPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-700 to-teal-800 py-16 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Story</h1>
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
          Why BuddyBridge exists
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <article className="prose-lg text-gray-600 space-y-6">
          <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
            It started on a sidewalk in Saratoga.
          </p>

          <p>
            An elderly neighbor had collapsed while taking out his trash — alone.
            As my father and I rushed to help, one thought kept running through
            my mind: <em>Why did an 85-year-old have to do this by himself?</em>
          </p>

          <p>
            He recovered. But I couldn&apos;t shake the frustration. In a
            neighborhood full of capable teenagers, why wasn&apos;t anyone
            lending a hand?
          </p>

          <hr className="border-gray-200 my-8" />

          <p className="text-lg font-medium text-gray-800">
            Then I noticed something else.
          </p>

          <p>
            My generation lives in a &ldquo;social media first&rdquo; world —
            connected online, but often isolated in real life. We scroll past
            each other. We rarely talk to anyone outside our age group.
            Researchers call it a &ldquo;crisis of connection,&rdquo; and I see
            it every day.
          </p>

          <p className="text-lg font-medium text-gray-800">
            That&apos;s when it clicked.
          </p>

          <p>
            Seniors need a hand with everyday tasks. Teens need meaningful
            connection beyond their screens. What if we could bring them
            together?
          </p>

          <hr className="border-gray-200 my-8" />

          <p>
            <strong className="text-gray-800">BuddyBridge</strong> is that
            bridge — a simple way for students to help seniors in their
            community with things like setting up email, carrying groceries, or
            just sharing a conversation. No apps to download. No complicated
            technology. Just neighbors helping neighbors.
          </p>

          <p>
            We&apos;re not trying to replace family or professional care.
            We&apos;re here for the small stuff that makes daily life a little
            easier — and a little less lonely, for everyone.
          </p>

          <p className="text-right text-gray-800 font-medium italic pt-4">
            — Neev, Founder
          </p>
        </article>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/helpers"
            className="inline-block bg-primary text-white text-lg px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors text-center"
          >
            Find a Helper
          </Link>
          <Link
            href="/volunteer/signup"
            className="inline-block border-2 border-primary text-primary text-lg px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors text-center"
          >
            Become a Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
}
