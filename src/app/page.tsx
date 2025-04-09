import { MovieSearch } from "@/components/movie-search";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center gap-[32px] row-start-2 sm:items-start w-full">
        <MovieSearch />
      </main>
    </div>
  );
}
