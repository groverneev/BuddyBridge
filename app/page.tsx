import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Browse Helpers",
    description: "Look through our friendly volunteers and find someone who can help with what you need.",
  },
  {
    number: "2",
    title: "Request Help",
    description: "Tell us what you need and when. It only takes a minute to fill out a simple form.",
  },
  {
    number: "3",
    title: "Get Help",
    description: "We'll connect you with a volunteer and confirm everything by phone or email.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-800 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Bridging Generations, One Task at a Time
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Need a hand with technology, household chores, or everyday tasks? Our
            trusted teen volunteers are here to help — free of charge.
          </p>
          <Link
            href="/helpers"
            className="inline-block bg-white text-emerald-700 text-xl px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
          >
            Browse Helpers
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Who Are Our Volunteers?
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Our volunteers are local high school and college students who want
            to give back to their community. Each volunteer creates a profile so
            you can get to know them before requesting help.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            All services are completely free. Our volunteers do this because
            they care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/helpers"
              className="inline-block bg-primary text-white text-lg px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
            >
              Find a Helper
            </Link>
            <Link
              href="/volunteer/signup"
              className="inline-block border-2 border-primary text-primary text-lg px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            It started on a sidewalk in Saratoga, when an elderly neighbor
            collapsed while taking out his trash.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            That moment sparked a simple idea: seniors need a hand, teens need
            meaningful connection. What if we brought them together?
          </p>
          <Link
            href="/our-story"
            className="inline-flex items-center text-lg text-primary font-semibold bg-emerald-50 border border-emerald-200 px-6 py-3 rounded-xl hover:bg-emerald-100 transition-colors"
          >
            Read the full story
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
