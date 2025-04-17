import { Movie } from "@/types/movie";
import { MovieItemDescription } from "./movie-item-description";

interface MovieHeaderProps {
  movie: Movie;
}

export const MovieHeader = ({ movie }: MovieHeaderProps) => {
  return (
    <div className="flex space-x-4 p-2 bg-white/3 rounded-lg">
      <img
        src={movie.poster}
        alt={movie.title}
        className="h-24 w-24 rounded-lg"
      />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <MovieItemDescription label="Year" value={movie.year} row />
        <MovieItemDescription label="Rated" value={movie.rated} row />
        <MovieItemDescription label="Runtime" value={movie.runtime} row />
        <MovieItemDescription label="Plot" value={movie.plot} row />
      </div>
    </div>
  );
};
