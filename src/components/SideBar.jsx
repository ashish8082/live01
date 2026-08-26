
const Sidebar =({channels,search,setSearch,activeCategory,setActiveCategory})=>{
     const categories = ["All", "News", "Movies", "Sport", "Music"];
    return(
        <div className="border-b border-slate-800 p-5">

              <div className="flex items-center justify-between">

                <h2 className="text-lg font-bold">
                  Live Channels
                </h2>

                <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-400">
                  {channels.length} Live
                </span>

              </div>

              {/* Search */}
              <div className="mt-4">

                <div className="flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3">

                  <svg
                    className="h-4 w-4 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                    />
                  </svg>

                  <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search channels..."
                    className="w-full bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-500"
                  />

                </div>

              </div>

              {/* Categories */}
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">

                {categories.map((category) => (
                  <button
                    key={category}
                      type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${
                      activeCategory === category
                        ? "bg-red-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}

              </div>

            </div>
    )
}
export default Sidebar;