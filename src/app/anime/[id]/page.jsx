import { getAnimeResponse } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);

  return (
    <div className="pt-8 px-6 text-white max-w-5xl mx-auto">
      {/* Judul */}
      <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">
        {anime.data.title}{" "}
        <span className="text-gray-400">({anime.data.year})</span>
      </h1>

      {/* Statistik */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Peringkat", value: anime.data.rank },
          { label: "Skor", value: anime.data.score },
          { label: "Anggota", value: anime.data.members },
          { label: "Episode", value: anime.data.episodes },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-md"
          >
            <h3 className="text-sm text-gray-300 font-semibold">
              {item.label}
            </h3>
            <p className="text-lg font-bold text-white">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Container utama */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Gambar */}
        <div className="w-full sm:w-1/3">
          <Image
            src={anime.data.images.webp.image_url}
            width={300}
            height={450}
            alt={`Poster ${anime.data.title}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Deskripsi */}
        <div className="w-full sm:w-2/3">
          <p className="text-lg text-gray-300 leading-relaxed text-justify">
            {anime.data.synopsis}
          </p>
        </div>
      </div>
      <VideoPlayer youtubeID={anime.data.trailer.youtube_id} />
    </div>
  );
};

export default Page;
