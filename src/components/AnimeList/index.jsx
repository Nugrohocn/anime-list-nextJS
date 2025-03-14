import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className=" grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 mb-10 max-w-6xl mx-auto">
      {api.data?.map((anime) => (
        <Link
          key={anime.mal_id}
          href={`/anime/${anime.mal_id}`}
          className="relative shadow-xl"
        >
          <Image
            src={anime.images.webp.image_url}
            width={350}
            height={350}
            alt={anime.title}
            className="w-full h-112 object-cover rounded-xl brightness-50"
          />
          <div className="absolute bottom-3 left-2  ">
            <h1 className="text-white text-lg font-base pr-4">{anime.title}</h1>
            <span className="text-white font-bold text-lg flex items-center gap-1">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26.9 25.65"
                className="w-5 h-5 fill-yellow-400 mr-1"
              >
                <path
                  d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 
        l-6.6,5.76l1.95,8.54c0.09,0.38-0.15,0.75-0.53,0.84c-0.19,0.04-0.39,0-0.54-0.1l-7.5-4.48l-7.52,4.5 
        c-0.33,0.2-0.76,0.09-0.96-0.24c-0.1-0.16-0.12-0.35-0.08-0.52h0l1.95-8.54l-6.6-5.76c-0.29-0.25-0.32-0.7-0.07-0.99 
        C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 
        L14.1,0.43z"
                />
              </svg>
              <div>{anime.score}</div>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
