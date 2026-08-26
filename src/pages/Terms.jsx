import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-24 text-white">
      <div className="mx-auto max-w-6xl">

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-red-950/30 px-6 py-14 sm:px-10">

          {/* Background Glow */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />

          <div className="relative">

            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
              Legal Information
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Terms & Conditions
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Please read these terms carefully before using our
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
                  href="#acceptance"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Acceptance
                </a>

                <a
                  href="#use"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Use of Service
                </a>

                <a
                  href="#accounts"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  User Accounts
                </a>

                <a
                  href="#content"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Content
                </a>

                <a
                  href="#copyright"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Copyright
                </a>

                <a
                  href="#availability"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Availability
                </a>

                <a
                  href="#liability"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Liability
                </a>

                <a
                  href="#changes"
                  className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-red-500"
                >
                  Changes
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

          {/* ================= TERMS CONTENT ================= */}

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 lg:p-10">

            {/* Introduction */}

            <div className="border-b border-slate-800 pb-8">

              <p className="leading-7 text-slate-400">
                These Terms & Conditions govern your use of this
                website and its services. By accessing or using
                the website, you agree to follow these terms.
              </p>

            </div>

            {/* Acceptance */}

            <section
              id="acceptance"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                1. Acceptance of Terms
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                By accessing this website, you acknowledge that
                you have read, understood, and agreed to these
                Terms & Conditions. If you do not agree with
                these terms, please discontinue use of the
                website.
              </p>

            </section>

            {/* Use */}

            <section
              id="use"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                2. Use of the Service
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                You agree to use this website only for lawful
                purposes and in a way that does not interfere
                with the operation of the service or the rights
                of other users.
              </p>

              <ul className="mt-5 space-y-3 text-slate-400">

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Do not use the service for unlawful activities.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Do not attempt to gain unauthorized access.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Do not interfere with the website or its servers.
                </li>

                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  Do not misuse or abuse the service.
                </li>

              </ul>

            </section>

            {/* Accounts */}

            <section
              id="accounts"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                3. User Accounts
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                If you create an account, you are responsible for
                maintaining the confidentiality of your account
                information and for all activities performed
                through your account.
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                Please notify us if you believe your account has
                been accessed without authorization.
              </p>

            </section>

            {/* Content */}

            <section
              id="content"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                4. Content
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                The website may contain information, links,
                media, images, descriptions, and other content.
                Content may be changed, updated, or removed
                without prior notice.
              </p>

              <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">

                <div className="flex gap-3">

                  <span className="text-xl">
                    ⚠️
                  </span>

                  <p className="text-sm leading-6 text-slate-400">
                    Users are responsible for ensuring that their
                    use of any content complies with applicable
                    laws and regulations.
                  </p>

                </div>

              </div>

            </section>

            {/* Copyright */}

            <section
              id="copyright"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                5. Copyright & Intellectual Property
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                All trademarks, logos, designs, text, and other
                original materials belonging to this website are
                protected by applicable intellectual property laws.
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                You may not reproduce, distribute, modify, or
                commercially exploit our original content without
                appropriate authorization.
              </p>

            </section>

            {/* Availability */}

            <section
              id="availability"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                6. Service Availability
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                We try to keep the website available and
                functional, but we do not guarantee that the
                service will always be uninterrupted, secure,
                or error-free.
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                Maintenance, technical problems, network issues,
                or other circumstances may temporarily affect
                availability.
              </p>

            </section>

            {/* Liability */}

            <section
              id="liability"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                7. Limitation of Liability
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                To the extent permitted by applicable law, we
                shall not be responsible for indirect, incidental,
                or consequential losses resulting from your use
                of the website or inability to access the service.
              </p>

            </section>

            {/* Changes */}

            <section
              id="changes"
              className="scroll-mt-28 border-b border-slate-800 py-8"
            >

              <h2 className="text-2xl font-bold">
                8. Changes to These Terms
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                We may update these Terms & Conditions from time
                to time. Any updated version will be posted on
                this page with a revised "Last updated" date.
              </p>

            </section>

            {/* Contact */}

            <section
              id="contact"
              className="scroll-mt-28 pt-8"
            >

              <h2 className="text-2xl font-bold">
                9. Contact Us
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                If you have questions about these Terms &
                Conditions, please contact us.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Contact Support

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

        {/* ================= BOTTOM ================= */}

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center sm:flex-row sm:text-left">

          <div>

            <h3 className="font-semibold">
              Have questions?
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Our support team is happy to help.
            </p>

          </div>

          <Link
            to="/contact"
            className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-red-500 hover:text-red-500"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </main>
  );
};

export default Terms;