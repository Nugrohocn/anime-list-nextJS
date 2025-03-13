import InputSearch from "./InputSearch";
const HeaderBanner = () => {
  return (
    <div className="w-full h-56 p-10 bg-gradient-to-r from-[#111827] to-[#161e3a]">
      <h1 className="text-6xl  font-bold bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text mb-4 py-4">
        Jelajahi Dunia Anime
      </h1>
      <InputSearch />
    </div>
  );
};

export default HeaderBanner;
