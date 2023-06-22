export default function SearchBar({
                                      handleSearch, searchQuery, mutate
                                  }: {
    handleSearch: (query: string) => void,
    searchQuery: string,
    mutate: () => void
}) {
    return <div className="flex items-center justify-center py-5 ">
        <form className="w-2/4 "
              onSubmit={() => mutate()}
        >
            <label
                htmlFor="default-search"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black"
            >
                <input
                    type="search"
                    id="Search"
                    placeholder={searchQuery}
                    required={true}
                    onChange={(event) => handleSearch(event.currentTarget.value)}
                    className="peer h-8 w-full border-none overflow-hidden bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-black"
                />

                <span
                    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
    Search
  </span>
            </label>
        </form>
    </div>
}