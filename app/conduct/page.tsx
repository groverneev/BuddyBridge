import Link from "next/link";

export default function ConductPage() {
  const greenZone = [
    "Moving trash/recycling bins to and from the curb",
    "Sweeping walkways, driveways, or porches",
    "Raking leaves or clearing pine needles",
    "Harvesting fruit (using standing-height pickers only)",
    "Watering outdoor plants",
  ];

  const redZone = [
    "No Ladders — keep boots on the ground at all times",
    "No Power Tools — no lawnmowers, chainsaws, or trimmers",
    "No Heavy Lifting — do not lift items over 30 lbs",
    "No Chemicals — no pesticides, weed killers, or fertilizers",
    "No Driving — do not drive the senior or use their vehicle",
    "No entering the senior's home under any circumstances",
  ];

  const conductRules = [
    {
      title: "Punctuality",
      description:
        "If you claim a time window, you must fulfill it. If an emergency arises, notify the coordinator and cancel in advance.",
    },
    {
      title: "Privacy",
      description:
        "You may not share the senior's name, address, or personal details on social media. Photos uploaded for verification remain private within the BuddyBridge system.",
    },
    {
      title: "Respect",
      description:
        "Treat all neighbors with patience and kindness. Many seniors may move slowly or repeat themselves — always listen respectfully.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-700 to-teal-800 py-16 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Code of Conduct</h1>
        <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
          How we keep everyone safe and our volunteers accountable
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Section 1: Safety Boundary */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
              1
            </span>
            <h2 className="text-2xl font-bold text-gray-800">The Safety Boundary</h2>
          </div>
          <p className="text-gray-600 mb-5">
            For the safety of both our volunteers and our senior neighbors, BuddyBridge
            operates under a strict <strong>Outdoors-Only</strong> mandate.
          </p>

          {/* Red Line callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-5">
            <p className="font-semibold text-amber-800 mb-1">The Red Line</p>
            <p className="text-amber-700 text-sm">
              Volunteers are strictly prohibited from entering a senior&apos;s residence —
              including their house, garage, or shed — for any reason.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-700 mb-1">The Protocol</p>
              <p className="text-gray-600 text-sm">
                All interactions — handing over mail, confirming a task, or chatting — must
                happen outside the door or in the yard.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">The Script</p>
              <p className="text-gray-600 text-sm">
                If invited inside (even for water or snacks), politely decline:{" "}
                <em>&ldquo;Thank you so much, but we have strict outdoor-only safety rules.&rdquo;</em>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Approved Task List */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
              2
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Approved Task List</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Volunteers are only authorized to perform tasks in the{" "}
            <strong>Green Zone</strong>. Anything in the Red Zone is off-limits.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Green Zone */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0" />
                <h3 className="font-semibold text-emerald-700">Green Zone — Allowed</h3>
              </div>
              <ul className="space-y-2">
                {greenZone.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Red Zone */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0" />
                <h3 className="font-semibold text-red-700">Red Zone — Prohibited</h3>
              </div>
              <ul className="space-y-2">
                {redZone.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">
                      ✕
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Verification & Hours */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
              3
            </span>
            <h2 className="text-2xl font-bold text-gray-800">
              Verification &amp; Hours
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            We take the integrity of your service hours seriously. To receive
            official credit, follow the <strong>Link-Point System</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <svg
                  className="w-6 h-6 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="font-semibold text-gray-800">Photo Proof Required</p>
              </div>
              <p className="text-sm text-gray-600">
                Upload a clear photo of the completed task (e.g., bins at the curb)
                to unlock your points.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4 flex items-center gap-4">
              <div className="text-center flex-shrink-0">
                <p className="text-3xl font-bold text-primary">60</p>
                <p className="text-xs text-emerald-700 font-medium">Link-Points</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">=</p>
                <p className="font-semibold text-gray-800">1 Verified Service Hour</p>
                <p className="text-sm text-gray-600">Officially logged and recognized</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Professionalism & Conduct */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
              4
            </span>
            <h2 className="text-2xl font-bold text-gray-800">
              Professionalism &amp; Conduct
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            You are an ambassador for your school and your generation. Act accordingly.
          </p>

          <div className="space-y-5">
            {conductRules.map((rule) => (
              <div key={rule.title} className="flex gap-4">
                <div className="flex-shrink-0 w-1 rounded-full bg-primary mt-1" />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{rule.title}</p>
                  <p className="text-gray-600 text-sm">{rule.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
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
