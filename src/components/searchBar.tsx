export default function SearchBar({
                                      onChange, onFocus, value, searchRef,
                                  }: {
    onChange: (event: any) => void
    onFocus: () => void
    value: string,
    searchRef: any,
}) {
    return <div className="flex items-center justify-center py-5 ">
        <label
            ref={searchRef}
            htmlFor="default-search"
            className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black"
        >
            <input
                onChange={onChange}
                onFocus={onFocus}
                value={value}
                type="search"
                id="search"
                placeholder={'Search'}
                required={true}
                className="peer h-8 w-full border-none overflow-hidden bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-black"
            />

            <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
    Search
  </span>
        </label>
    </div>
}