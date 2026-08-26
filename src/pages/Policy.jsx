import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-24 text-white">
      <div className="mx-auto max-w-6xl">

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-red-950/30 px-6 py-14 sm:px-10">

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />

          <div className="relative">

            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
              Your Privacy Matters
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              This Privacy Policy explains how we collect, use,
              protect, and handle information when you use our
              website and services.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <span>Last updated:</span>

              <span className="text-slate-300">
                August 25, 2026
              </span>
            </div>

          </div>
        </section>

        {/* ================= CONTENT ================= */}

        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">

          {/* ================= SIDEBAR ================= */}

          <aside className="hidden lg:block">

            <div className="sticky top-28 rounded-2xl border border-slate-800 bg-slate-900 p-4">

              <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                On this page
              </p>

              <nav className="space-y-1">

                <a
                  href="#information"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Information We Collect
                </a>

                <a
                  href="#usage"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  How We Use Information
                </a>

                <a
                  href="#cookies"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Cookies
                </a>

                <a
                  href="#sharing"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Information Sharing
                </a>

                <a
                  href="#security"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Data Security
                </a>

                <a
                  href="#retention"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Data Retention
                </a>

                <a
                  href="#rights"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Your Rights
                </a>

                <a
                  href="#children"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Children's Privacy
                </a>

                <a
                  href="#changes"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Policy Changes
                </a>

                <a
                  href="#contact"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Contact
                </a>

              </nav>

            </div>

          </aside>

          {/* ================= POLICY CONTENT ================= */}

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 lg:p-10">

            {/* Introduction */}

            <div className="border-b border-slate-800 pb-8">

              <p className="leading-7 text-slate-400">
                We respect your privacy and are committed to
                protecting your personal information. This policy
                describes what information may be collected when
                you use our website and how that information may
                be used.
              </p>

            </div>

            {/* Information */}

            <section
              id="information"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                1. Information We Collect
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Depending on how you use our website, we may
                collect information that you voluntarily provide
                to us.
              </p>

              <ul className="mt-5 space-y-3 text-slate-400">

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Name and contact information.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Email address when you contact us.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Account information if account registration is
                  available.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Messages and information submitted through our
                  contact forms.
                </li>

              </ul>

            </section>

            {/* Usage */}

            <section
              id="usage"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                2. How We Use Your Information
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Information may be used to provide, maintain,
                improve, and personalize our services.
              </p>

              <ul className="mt-5 space-y-3 text-slate-400">

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Respond to your questions and requests.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Provide and improve website functionality.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Maintain website security.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Understand how visitors use the website.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Communicate important service-related updates.
                </li>

              </ul>

            </section>

            {/* Cookies */}

            <section
              id="cookies"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                3. Cookies and Similar Technologies
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                We may use cookies or similar technologies to
                remember preferences, maintain sessions, analyze
                website usage, and improve your experience.
              </p>

              <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">

                <div className="flex gap-3">

                  <span className="text-xl">
                    🍪
                  </span>

                  <p className="text-sm leading-6 text-slate-400">
                    You can manage or disable cookies through
                    your browser settings. Some website features
                    may not work correctly if cookies are disabled.
                  </p>

                </div>

              </div>

            </section>

            {/* Sharing */}

            <section
              id="sharing"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                4. Information Sharing
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                We do not sell your personal information. We may
                share information only when reasonably necessary
                to provide services, comply with legal obligations,
                protect our rights, or prevent misuse of the
                website.
              </p>

            </section>

            {/* Security */}

            <section
              id="security"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                5. Data Security
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                We take reasonable measures to protect information
                from unauthorized access, alteration, disclosure,
                or destruction.
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                However, no method of transmitting or storing
                information online can be guaranteed to be
                completely secure.
              </p>

            </section>

            {/* Retention */}

            <section
              id="retention"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                6. Data Retention
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                We retain information only for as long as
                reasonably necessary for the purposes described
                in this policy, unless a longer retention period
                is required by applicable law.
              </p>

            </section>

            {/* Rights */}

            <section
              id="rights"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                7. Your Privacy Rights
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Depending on your location and applicable law,
                you may have rights regarding your personal
                information.
              </p>

              <ul className="mt-5 space-y-3 text-slate-400">

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Request access to information we hold about you.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Request correction of inaccurate information.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Request deletion where legally applicable.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Withdraw consent where applicable.
                </li>

              </ul>

            </section>

            {/* Children */}

            <section
              id="children"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                8. Children's Privacy
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Our services are not intentionally designed to
                collect personal information from children in
                violation of applicable privacy laws.
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                If you believe that a child has provided personal
                information to us, please contact us so that we
                can review and take appropriate action.
              </p>

            </section>

            {/* Changes */}

            <section
              id="changes"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                9. Changes to This Privacy Policy
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                We may update this Privacy Policy from time to
                time. When changes are made, we will update the
                "Last updated" date displayed at the top of this
                page.
              </p>

            </section>

            {/* Contact */}

            <section
              id="contact"
              className="scroll-mt-28 pt-8"
            >

              <h2 className="text-2xl font-bold">
                10. Contact Us
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                If you have questions, concerns, or requests
                regarding this Privacy Policy, please contact us.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Contact Us

                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>

              </Link>

            </section>

          </article>

        </div>

        {/* ================= FOOTER CTA ================= */}

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center sm:flex-row sm:text-left">

          <div>

            <h3 className="font-semibold">
              Have a privacy question?
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              We're here to help with your privacy concerns.
            </p>

          </div>

          <Link
            to="/contact"
            className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-red-500 hover:text-red-500"
          >
            Contact Support
          </Link>

        </div>

      </div>
    </main>
  );
};

export default PrivacyPolicy;