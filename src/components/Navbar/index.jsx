import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-[#111827]">
      <div className="flex md:flex-row flex-col  justify-between p-4 md:items-center">
        <Link href="/" className="font-bold text-xl text-white">
          Anime List
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
