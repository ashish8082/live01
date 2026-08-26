import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">

      <div className="w-full max-w-xl text-center">

        {/* 404 */}
        <div className="relative">

          <h1 className="text-[120px] font-black leading-none tracking-tight text-slate-800 sm:text-[160px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-red-600/10 px-5 py-2 text-sm font-semibold text-red-500">
              Page Not Found
            </span>
          </div>

        </div>

        {/* Icon */}
        <div className="mt-4 text-6xl">
          🎬
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
          Oops! This page doesn't exist.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
          The page you're looking for may have been removed,
          renamed, or the URL may be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/"
            className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Go Home
          </Link>

          <Link
            to="/movies"
            className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-red-500 hover:text-red-500"
          >
            Browse Movies
          </Link>

        </div>

      </div>

    </main>
  );
};

export default NotFound;