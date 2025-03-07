"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;

    router.push(`/search/${keyword}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white rounded-lg placeholder:text-slate-500 p-2"
        ref={searchRef}
        onKeyDown={handleKeyDown}
      />
      <button
        className="absolute top-1.5 end-3 text-slate-500"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={26} />
      </button>
    </div>
  );
};

export default InputSearch;
