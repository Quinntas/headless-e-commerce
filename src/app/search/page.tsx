"use client";

import {AiOutlineArrowRight} from "react-icons/ai";


export default function Page() {
    return <form>
        <div className="bg-white flex items-center justify-center py-5 ">
            <div className="w-2/4 relative">
                <label
                    htmlFor="default-search"
                    className="relative block overflow-hidden  rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black"
                >
                    <input
                        type="search"
                        id="Search"
                        placeholder="Search"
                        required={true}
                        className="peer h-8 w-11/12 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-black"
                    />

                    <button type="submit"
                            className="w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-1 ">
                        <AiOutlineArrowRight color={"black"} className="w-8 h-8"
                        />
                    </button>

                    <span
                        className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                    >
    Search
  </span>
                </label></div>
        </div>
    </form>
}