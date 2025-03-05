import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4 items-center">
        <Link href="/" className="font-bold text-xl text-white">
          ANIME LIST
        </Link>
        <input
          type="text"
          placeholder="Search..."
          className="bg-white rounded-lg placeholder:text-slate-500 p-2"
        />
      </div>
    </header>
  );
};

export default Navbar;
