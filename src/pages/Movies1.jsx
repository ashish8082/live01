import { useEffect, useState } from "react";
import axios from "axios";

const MOVIE_BASE_URL =
  "http://103.225.94.27/Infobase/hdd-2/hindi2.0/";

const Movies1 = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
const [selectedMovie, setSelectedMovie] = useState(null);
const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "/Infobase/hdd-2/hindi2.0/"
        );

        const parser = new DOMParser();

        const doc = parser.parseFromString(
          response.data,
          "text/html"
        );

        const movieList = [];

        doc.querySelectorAll("tr").forEach((row) => {
          const link = row.querySelector("a");

          if (!link) return;

          const href = link.getAttribute("href");
          const title = link.textContent.trim();

          if (!href || !title) return;

          // Ignore parent directory
          if (title === "Parent Directory") return;

          // Only video files
          const extensions = [
            ".mp4",
            ".mkv",
            ".avi",
            ".mov",
            ".webm",
          ];

          const isVideo = extensions.some((ext) =>
            href.toLowerCase().endsWith(ext)
          );

          if (!isVideo) return;

          const columns = row.querySelectorAll("td");

          const modifiedDate =
            columns[2]?.textContent.trim() || "";

          const size =
            columns[3]?.textContent.trim() || "";

          const fullUrl = new URL(
            href,
            MOVIE_BASE_URL
          ).href;

          const fileName = decodeURIComponent(
            href.split("/").pop()
          );

          const movieTitle = fileName.replace(
            /\.[^/.]+$/,
            ""
          );

          movieList.push({
            id: movieList.length + 1,
            title: movieTitle,
            fileName,
            url: fullUrl,
            size,
            modifiedDate,
            language: "Hindi",
          });
        });

        console.log("Movies:", movieList);

        setMovies(movieList);

      } catch (error) {
        console.error("Movie Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Search
  const filteredMovies = movies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-12 pt-24 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Hindi Movies
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Browse and watch movies
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">

            <input
              type="text"
              placeholder="Search movies..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-red-500"
            />

          </div>
          

        </div>

        {/* Count */}
        <div className="mt-6 flex items-center justify-between">

          <h2 className="text-lg font-semibold">
            All Movies
          </h2>

          <span className="text-sm text-slate-500">
            {filteredMovies.length} Movies
          </span>

        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">

            <div className="text-center">

              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-red-600" />

              <p className="mt-3 text-sm text-slate-400">
                Loading movies...
              </p>

            </div>

          </div>
        )}

        {/* Movies */}
        {!loading && filteredMovies.length > 0 && (

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {filteredMovies.map((movie) => (

              <div
                key={movie.id}
                className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:border-red-600/50 hover:shadow-xl"
              >

                {/* Movie Header */}
                <div className="flex gap-4 p-4">

                  {/* Icon */}
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-700 to-slate-950">

                    <span className="text-3xl">
                      🎬
                    </span>

                  </div>

                  {/* Information */}
                  <div className="min-w-0 flex-1">

                    <h3
                      title={movie.title}
                      className="line-clamp-2 text-sm font-semibold text-white"
                    >
                      {movie.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-2">

                      <span className="rounded bg-red-600/10 px-2 py-1 text-[10px] text-red-400">
                        Hindi
                      </span>

                      <span className="rounded bg-slate-800 px-2 py-1 text-[10px] text-slate-400">
                        {movie.size}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Details */}
                <div className="border-t border-slate-800 px-4 py-3">

                  <div className="flex items-center justify-between gap-3">

                    <div className="min-w-0">

                      <p className="text-xs text-slate-500">
                        Modified
                      </p>

                      <p className="truncate text-xs text-slate-300">
                  {new Date(movie.modifiedDate).toLocaleString()}
                      </p>

                    </div>

                    {/* Play */}
                    <button
                     
                      onClick={() => setSelectedMovie(movie)}
                      className="flex shrink-0 items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-700"
                    >
                      ▶ Play
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

        {/* No Movies */}
        {!loading && filteredMovies.length === 0 && (

          <div className="flex min-h-[300px] flex-col items-center justify-center">

            <div className="text-5xl">
              🎬
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              No movies found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try another search.
            </p>

          </div>
        )}

      </div>
      {selectedMovie && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
    onClick={() => setSelectedMovie(null)}
  >
    <div
      className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">

        <div className="min-w-0 pr-4">

          <h2 className="truncate text-lg font-bold text-white">
            {selectedMovie.title}
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            {selectedMovie.size} • {selectedMovie.language}
          </p>

        </div>

        {/* Close */}
        <button
          type="button"
          onClick={() => setSelectedMovie(null)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xl text-white transition hover:bg-red-600"
        >
          ×
        </button>

      </div>

      {/* Video */}
      <div className="bg-black">

        <video
          key={selectedMovie.url}
          className="aspect-video w-full"
          controls
          autoPlay
          playsInline
        >
          <source
            src={selectedMovie.url}
            type="video/mp4"
          />

          Your browser does not support video playback.
        </video>

      </div>

      {/* Footer */}
      <div className="px-4 py-3">

        <p className="truncate text-xs text-slate-500">
          {selectedMovie.fileName}
        </p>

      </div>

    </div>
  </div>
)}

    </main>
  );
};

export default Movies1;