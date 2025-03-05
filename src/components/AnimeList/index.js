import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ images, title, id }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image
        src={images}
        width={350}
        height={350}
        alt=""
        className="max-h-64 w-full object-cover"
      />
      <h1 className="font-bold p-4 md:text-xl text-sm">{title}</h1>
    </Link>
  );
};

export default AnimeList;
