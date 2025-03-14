import Link from "next/link";
// import { useState } from "react";
import { Menu, X } from "lucide-react";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#111827] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">
          Anime List
        </Link>

        <nav className="hidden md:flex gap-6">
          <UserActionButton />
        </nav>

        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <nav className="md:hidden bg-[#1f2937] p-4 space-y-2">
          <Link
            href="/popular"
            className="block hover:text-gray-300 transition"
          >
            Popular
          </Link>
          <Link
            href="/recommendations"
            className="block hover:text-gray-300 transition"
          >
            Recommendations
          </Link>
          <Link href="/about" className="block hover:text-gray-300 transition">
            About
          </Link>
        </nav>
      )} */}
    </header>
  );
};

export default Navbar;
