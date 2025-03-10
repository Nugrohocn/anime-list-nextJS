import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            key={index}
            href={`/${anime.mal_id}`}
            className="cursor-pointer"
          >
            <Image
              src={anime.images.webp.image_url}
              width={350}
              height={350}
              alt=""
              className="max-h-64 w-full object-cover rounded-xl"
            />
            <h1 className=" text-white p-4 md:text-xl text-sm">
              {anime.title}
            </h1>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
