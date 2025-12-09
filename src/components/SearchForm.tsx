import React from "react";
import { RiSearchLine } from "react-icons/ri";

export const SearchForm: React.FC = () => {
  return (
    <form className="flex items-center gap-2 order-2 md:order-3">
      <div className="relative">
        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      <label htmlFor="site-search" className="sr-only">
        Поиск по сайту
      </label>

      <input
        id="site-search"
        className="w-45 md:w-56 h-9 pl-9 pr-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
        placeholder="Поиск по сайту..."
        type="search"
        // onChange={}
      />
      <button className="px-3 py-1.5 bg-gray-600 hover:bg-blue-700 rounded-lg text-sm transition">
        Найти
      </button>
    </form>
  );
};
