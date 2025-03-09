import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-[#222831]">
      <div className="flex md:flex-row flex-col  justify-between p-4 md:items-center">
        <Link href="/" className="font-bold text-xl text-white">
          Anime List
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
