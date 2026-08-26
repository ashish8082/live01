import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-24 text-white">

      <div className="mx-auto max-w-7xl">

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-red-950/30 px-6 py-16 sm:px-10 lg:px-16">

          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
              About Our Platform
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Your Entertainment.
              <span className="block text-red-500">
                Your Way.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Discover movies, explore new stories, and enjoy your
              favorite entertainment in one simple and beautiful
              platform.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/movies"
                className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Explore Movies
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-400"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </section>

        {/* ================= ABOUT ================= */}

        <section className="mt-16 grid items-center gap-10 lg:grid-cols-2">

          {/* Content */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-wider text-red-500">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Entertainment made simple
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our platform is designed to make discovering and
              enjoying movies simple. We bring a clean, easy-to-use
              experience where you can browse different categories,
              search for movies, and start watching with just a few
              clicks.
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              Whether you're looking for an action movie, drama,
              comedy, romance, or thriller, our goal is to help you
              find something you'll enjoy.
            </p>

            <div className="mt-7 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-2xl">
                🎬
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Discover More
                </h3>

                <p className="text-sm text-slate-500">
                  Find your next favorite movie.
                </p>
              </div>

            </div>

          </div>

          {/* Visual Card */}

          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-red-600/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <div className="grid grid-cols-2 gap-4">

                <div className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-gradient-to-br from-red-700 via-red-950 to-slate-950">
                  <span className="text-6xl">🎬</span>
                </div>

                <div className="mt-8 flex aspect-[3/4] items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 via-slate-900 to-black">
                  <span className="text-6xl">🍿</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= FEATURES ================= */}

        <section className="mt-20">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-red-500">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything you need
            </h2>

            <p className="mt-4 text-slate-400">
              We focus on keeping the movie browsing experience
              simple, fast, and enjoyable.
            </p>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Feature 1 */}

            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-red-500/40">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-2xl transition group-hover:bg-red-500/20">
                🔎
              </div>

              <h3 className="mt-5 font-semibold">
                Easy Discovery
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Quickly search and discover movies you want to
                watch.
              </p>

            </div>

            {/* Feature 2 */}

            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-red-500/40">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-2xl transition group-hover:bg-red-500/20">
                🎞️
              </div>

              <h3 className="mt-5 font-semibold">
                Multiple Categories
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Browse different genres and find something for
                every mood.
              </p>

            </div>

            {/* Feature 3 */}

            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-red-500/40">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-2xl transition group-hover:bg-red-500/20">
                ⚡
              </div>

              <h3 className="mt-5 font-semibold">
                Simple Experience
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                A clean interface designed to help you get to
                your content quickly.
              </p>

            </div>

            {/* Feature 4 */}

            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-red-500/40">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-2xl transition group-hover:bg-red-500/20">
                ❤️
              </div>

              <h3 className="mt-5 font-semibold">
                Made For Movie Lovers
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Built with a focus on making movie discovery
                enjoyable.
              </p>

            </div>

          </div>

        </section>

        {/* ================= STATS ================= */}

        <section className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12">

          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-3xl font-bold text-red-500">
                1000+
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Movies
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-red-500">
                10+
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Categories
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-red-500">
                24/7
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Availability
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-red-500">
                ❤️
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Movie Lovers
              </p>
            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-red-700 to-red-900 px-6 py-12 text-center sm:px-10">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to find your next movie?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-red-100 sm:text-base">
            Explore our collection and discover something
            interesting to watch today.
          </p>

          <Link
            to="/movies"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-red-700 transition hover:bg-slate-100"
          >
            Browse Movies
          </Link>

        </section>

      </div>

    </main>
  );
};

export default About;