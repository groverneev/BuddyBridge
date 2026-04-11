import Link from "next/link";

const reviews = [
  {
    quote: "Neev comes by every week to take out the trash. It's a small thing, but it really means a lot to me.",
    name: "Trimual Kumar",
  },
  {
    quote: "I was nervous about having a stranger help me, but Neev was amazing. He was so kind that I felt completely at ease right away.",
    name: "Mr. Roberts",
  },
  {
    quote: "I didn't expect how sweet Meher would be. She would stop for a little chat on my porch for a couple of minutes and it would brighten my day.",
    name: "Mr. Jain",
  },
];

const tasks = [
  {
    icon: (
      // Trash can
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M3 6h18v2H3V6zm2 3h14l-1.5 12H6.5L5 9zm5 2v8h2v-8h-2zm4 0v8h2v-8h-2zM9 3h6v2H9V3z"/>
      </svg>
    ),
    title: "Moving Trash Cans",
    description: "Heavy bins to curb on trash day",
  },
  {
    icon: (
      // Laptop
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v9H4V6zm-2 9h20l1 2H1l1-2z"/>
      </svg>
    ),
    title: "Tech Help",
    description: "WhatsApp, FaceTime, scanning docs",
  },
  {
    icon: (
      // Broom
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19.36 2.72L20.78 4.14 7.29 17.63C7.75 18.33 8 19.14 8 20H2C2 16.69 4.69 14 8 14L19.36 2.72M16 1L21 6L19 8L14 3L16 1z"/>
      </svg>
    ),
    title: "Walkway Sweeping",
    description: "Clearing leaves & pine needles",
  },
  {
    icon: (
      // Seedling / flower
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 22V13M12 13C12 13 7 12 7 7C7 4.24 9.24 2 12 2C14.76 2 17 4.24 17 7C17 12 12 13 12 13Z"/>
        <path d="M12 13C12 13 9 16 5 15"/>
      </svg>
    ),
    title: "Flower Planting",
    description: "Digging and planting in gardens",
  },
  {
    icon: (
      // Water drop
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0C19 10 12 2 12 2z"/>
      </svg>
    ),
    title: "Garden Watering",
    description: "Watering front porch plants",
  },
  {
    icon: (
      // Paw print
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <circle cx="4.5" cy="9.5" r="2.5"/>
        <circle cx="9" cy="5.5" r="2.5"/>
        <circle cx="15" cy="5.5" r="2.5"/>
        <circle cx="19.5" cy="9.5" r="2.5"/>
        <path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.16 1.5.01 2.2-.28.63-.26 1.17-.68 1.73-1.04.59-.37 1.19-.74 1.9-.74.71 0 1.31.37 1.9.74.56.36 1.1.78 1.73 1.04.7.29 1.47.44 2.2.28 1.31-.29 2.04-1.3 2.33-2.32.3-2.03-1.31-3.48-2.62-4.79z"/>
      </svg>
    ),
    title: "Dog Walking",
    description: "Neighborhood walks for furry friends",
  },
];

const steps = [
  {
    number: "1",
    title: "Request Help",
    description: "Start by sending in a help request so we can connect you with the right volunteer.",
  },
  {
    number: "2",
    title: "Tell Us What You Need",
    description: "Share what you need help with and any timing details. The form is simple and quick to fill out.",
  },
  {
    number: "3",
    title: "We'll Be There",
    description: "We'll match you with a volunteer and follow up by phone or email to confirm everything.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Bridging Generations, One Task at a Time
            </h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              Need a hand with technology, household chores, or everyday tasks?
              Our trusted teen volunteers are here to help, free of charge.
            </p>
            <Link
              href="/helpers"
              className="inline-block bg-emerald-700 text-white text-xl px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
            >
              Request Help
            </Link>
          </div>

          {/* Right: photo with offset emerald background */}
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Pictures/FPS%20community/PXL_20260223_003432551.PORTRAIT.jpg"
              alt="Volunteer helping a senior"
              className="rounded-3xl w-full max-w-sm md:max-w-full object-cover shadow-lg"
              style={{ maxHeight: "560px", objectPosition: "top" }}
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tasks.map((task) => (
              <div
                key={task.title}
                className="bg-white rounded-2xl p-6 flex flex-col items-start gap-3 shadow-sm"
              >
                <div className="text-emerald-700">{task.icon}</div>
                <div>
                  <p className="font-semibold text-gray-900">{task.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                </div>
              </div>
            ))}
          </div>
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
              Get Help
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

      {/* Reviews */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Seniors Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="flex flex-col items-center text-center">
                <span className="text-4xl text-emerald-300 leading-none mb-2">&ldquo;</span>
                <p className="text-gray-600 italic mb-4">{review.quote}</p>
                <p className="font-semibold text-gray-800 text-sm">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-emerald-50">
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
