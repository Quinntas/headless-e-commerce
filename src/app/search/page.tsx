export default function Page() {
    return <div className="bg-white flex items-center justify-center py-5 ">
        <div className="w-2/4">
            <label
                htmlFor="Search"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black"
            >
                <input
                    type="search"
                    id="Search"
                    placeholder="Search"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-black"
                />

                <span
                    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
    Search
  </span>
            </label></div>
    </div>
}