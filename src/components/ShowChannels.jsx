const ShowChannels = ({filteredChannels,selectedChannel,handleChannelChange})=>{
    return(<>
        <div className="max-h-[600px] overflow-y-auto p-3">

              {filteredChannels.length > 0 ? (
                filteredChannels.map((channel) => {

                  const isSelected =
                    selectedChannel.id === channel.id;

                  return (
                    <button
                      key={channel.id}
                      onClick={() =>
                        handleChannelChange(channel)
                      }
                      className={`group mb-2 flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
                        isSelected
                          ? "bg-red-600/10 ring-1 ring-red-500/40"
                          : "hover:bg-slate-800"
                      }`}
                    >

                      {/* Logo */}
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-slate-800">

                        <img src={channel.logo}  alt={channel.name} className="h-full w-full object-contain" />

                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1">

                        <h3 className="truncate text-sm font-semibold">
                          {channel.name}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          {channel.category}
                        </p>

                      </div>

                      {/* Live */}
                      <div className="flex items-center gap-1">

                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />

                        <span className="text-[10px] font-bold text-red-500">
                          LIVE
                        </span>

                      </div>

                    </button>
                  );
                })
              ) : (
                <div className="py-10 text-center">

                  <div className="text-3xl">
                    📺
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    No channels found
                  </p>

                </div>
              )}

            </div>
        </>)
}
export default ShowChannels;