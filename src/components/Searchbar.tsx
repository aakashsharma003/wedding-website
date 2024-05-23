import React from "react";

export const Searchbar = () => {
  return (
    <div className="w-full h-full flex items-center relative ">
      <div className="absolute left-0 top-0 bottom-0 flex items-center pl-3 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="bg-white w-full h-[80%] rounded-2xl border border-grey-300 pl-10 focus:outline-none text-black sm:p-[2%] sm:pl-12"
        placeholder="Search Venues or Vendors"
      />
    </div>
  );
};
