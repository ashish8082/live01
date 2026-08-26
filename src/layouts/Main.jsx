import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

import channels from "../config/channels";
import ShowChannels from "../components/ShowChannels";
import Sidebar from "../components/SideBar";
 
const Main = () => 
{
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  

  const [selectedChannel, setSelectedChannel] = useState(channels[0]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFavorite, setIsFavorite] = useState(false);
  const [search, setSearch] = useState("");
 

  // Filter channels
const filteredChannels = channels.filter((channel) => {
                            const categoryMatch =
                                activeCategory === "All" ||
                                channel.category.toLowerCase() === activeCategory.toLowerCase();

                            const searchMatch = channel.name
                                .toLowerCase()
                                .includes(search.toLowerCase());

                            return categoryMatch && searchMatch;
                            });

                    // Load HLS stream
                        useEffect(() => {
                            if (!videoRef.current || !selectedChannel.stream) 
                            {
                                return;
                            }

                        const video = videoRef.current;

    // Destroy previous HLS instance
    if (hlsRef.current) 
    {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    if (Hls.isSupported()) 
    {
        const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: true,
        });

      hlsRef.current = hls;

      hls.loadSource(selectedChannel.stream);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => 
        {
            video.play().catch(() => {
            // Browser may block autoplay until user interaction
            });
        });

      hls.on(Hls.Events.ERROR, (event, data) => 
        {
            console.error("HLS Error:", data);
      });
    } 
    else if 
    (
          video.canPlayType("application/vnd.apple.mpegurl")
    ) 
    {
      // Safari native HLS
      video.src = selectedChannel.stream;
      video.addEventListener("loadedmetadata", () => 
        {
            video.play().catch(() => {});
      });
    }

    return () => {
      if (hlsRef.current) 
    {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }

      video.removeAttribute("src");
      video.load();
    };
  }, [selectedChannel]);

  const handleChannelChange = (channel) => {
    setSelectedChannel(channel);

    // Reset favorite state for new channel
    setIsFavorite(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-10 pt-20 text-white">
      <div className="mx-auto max-w-7xl">

    
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* =========================================
              VIDEO SECTION
          ========================================= */}
          <section className="lg:col-span-3">

            {/* Video Player */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-2xl">

              {selectedChannel.stream ? (
                <video
                  ref={videoRef}
                  className="h-full w-full object-contain"
                  controls
                  playsInline muted
                  poster="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center bg-slate-900">

                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-800 text-4xl">
                    📺
                  </div>

                  <h2 className="text-xl font-semibold">
                    Stream Unavailable
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Live stream is not available for this channel.
                  </p>

                </div>
              )}

              {/* LIVE Badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-red-600 px-3 py-1.5 text-xs font-bold shadow-lg">

                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />

                LIVE
              </div>

            </div>

            {/* =========================================
                CHANNEL INFORMATION
            ========================================= */}
            <div className="mt-5">

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div className="flex gap-4">

                  {/* Channel Logo */}
                  <div className="hidden h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-800 sm:block">

                    <img
                      src={selectedChannel.logo}
                      alt={selectedChannel.name}
                      className="h-full w-full object-contain"
                    />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      {selectedChannel.name}
                    </h2>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-400">

                      <span>
                        {selectedChannel.category}
                      </span>

                      <span>•</span>

                      <span>
                        {selectedChannel.country}
                      </span>

                      <span>•</span>

                      <span className="flex items-center gap-1 text-red-500">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                        Live
                      </span>

                    </div>

                  </div>

                </div>

                {/* Favorite */}
                <button
                  onClick={() =>
                    setIsFavorite(!isFavorite)
                  }
                  className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition ${
                    isFavorite
                      ? "border-red-500 bg-red-600 text-white"
                      : "border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  {isFavorite ? "♥ Favorited" : "♡ Add to Favorites"}
                </button>

              </div>

              {/* Description */}
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900 p-5">

                <h3 className="font-semibold">
                  About this channel
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {selectedChannel.description}
                </p>

              </div>

            </div>

          </section>

          {/* =========================================
              CHANNEL SIDEBAR
          ========================================= */}
          <aside className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

            {/* Sidebar Header */}
             <Sidebar channels={filteredChannels}  search={search} setSearch ={setSearch} activeCategory ={activeCategory} setActiveCategory={setActiveCategory}/>
            {/* Channels */}
              <ShowChannels filteredChannels={filteredChannels} selectedChannel={selectedChannel} handleChannelChange ={handleChannelChange}/>

          </aside>

        </div>
      </div>
    </main>
  );
};

export default Main;