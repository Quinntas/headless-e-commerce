export default function Coupon() {
    return <div className="relative">
        <label htmlFor="coupon" className="sr-only"> Coupon </label>

        <input
            type="coupon"
            id="coupon"
            placeholder="Coupon"
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
    <button
        type="button"
        className="rounded-full bg-black p-0.5 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
    >
      <span className="sr-only">Submit</span>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
      >
        <path
            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
        />
      </svg>
    </button>
  </span>
    </div>
}