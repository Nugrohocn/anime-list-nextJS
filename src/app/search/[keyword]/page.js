import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );

  const searchAnime = await response.json();

  return (
    <div>
      {/* Anime Terpopuler */}
      <section>
        <Header title={`Pencarian Untuk ${keyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
};

export default Page;
