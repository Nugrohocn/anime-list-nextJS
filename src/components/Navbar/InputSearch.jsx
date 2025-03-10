"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const [error, setError] = useState(false);
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current?.value.trim() ?? "";

      if (keyword === "") {
        setError(true);
        searchRef.current.value = "";
        return;
      }

      setError(false);
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder={error ? " Diisi dulu kang!! ⚠️" : "Search for anime..."}
        className={`w-full text-gray-900 rounded-full px-5 py-3 pl-12 outline-none transition-all shadow-sm 
          ${
            error
              ? "bg-red-100 placeholder-red-500 border border-red-500 focus:ring-red-500"
              : "bg-gray-100 focus:ring-blue-500"
          }`}
        ref={searchRef}
        onKeyDown={handleSearch}
        onChange={() => setError(false)}
      />
      <button
        className="absolute inset-y-0 left-3 flex items-center text-gray-500 hover:text-blue-500 transition-all cursor-pointer"
        onClick={handleSearch}
        disabled={!searchRef.current?.value?.trim()}
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
