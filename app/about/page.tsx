import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const socialLinks = [
    {
      href: "https://x.com/groverneev01",
      label: "Twitter",
    },
    {
      href: "https://github.com/groverneev",
      label: "GitHub",
    },
    {
      href: "https://techunpacked.substack.com",
      label: "Blog",
    },
    {
      href: "https://neevgrover.com",
      label: "Website",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-700 to-teal-800 py-16 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">About</h1>
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
          Learn more about BuddyBridge and its creator
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* About the Project */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            About BuddyBridge
          </h2>
          <p className="text-gray-600 mb-4">
            BuddyBridge is a free platform that connects seniors in our
            community with trusted teen volunteers who want to help. Whether
            it&apos;s setting up a phone, getting help with household chores, or simply
            having someone to talk to, we make it easy to find a friendly
            helping hand.
          </p>
          <p className="text-gray-600 mb-4">
            We believe that building connections across generations strengthens
            our communities. Seniors get the help they need, and young
            volunteers gain valuable experience and the satisfaction of making a
            real difference in someone&apos;s life.
          </p>
          <p className="text-gray-600">
            All of our services are completely free. Our volunteers do this
            because they care about their community and want to give back.
          </p>
        </section>

        {/* About the Creator */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            About the Creator
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <Image
                src="/neev.png"
                alt="Neev Grover"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Neev Grover
              </h3>
              <p className="text-gray-500 mb-4">
                Sophomore at the Harker School
              </p>
              <p className="text-gray-600 mb-4">
                I started BuddyBridge because I saw how much seniors in my
                community could benefit from a little extra help with everyday
                tasks, and how many of my peers were looking for meaningful ways
                to volunteer. This platform brings them together.
              </p>
              <p className="text-gray-600 mb-6">
                When I&apos;m not coding, you can find me writing about
                technology on my blog, exploring new ideas, and working on
                various side projects.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    {link.label}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Volunteers */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Our Volunteers
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <Image
                src="/meher.png"
                alt="Meher Batra"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Meher Batra
              </h3>
              <p className="text-emerald-700 text-sm font-medium mb-1">
                Founding Volunteer
              </p>
              <p className="text-gray-500 mb-4">
                7th grader at Redwood Middle School
              </p>
              <p className="text-gray-600">
                Hi! I&apos;m Meher Batra, a 7th grader at Redwood Middle School. I have a huge passion for the performing arts—specifically singing, dancing, and theater. When I&apos;m not on stage, I love meeting new people and making friends of all ages!
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href="/helpers"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
          >
            Browse Helpers
            <svg
              className="w-4 h-4 ml-2"
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
      </div>
    </div>
  );
}
