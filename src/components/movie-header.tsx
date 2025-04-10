import { Movie } from "@/types/movie";
import { MovieItemDescription } from "./movie-item-description";

interface MovieHeaderProps {
  movie: Movie;
}

export const MovieHeader = ({ movie }: MovieHeaderProps) => {
  return (
    <div className="flex space-x-4 p-2 bg-white/3 rounded-lg">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="h-24 w-24 rounded-lg"
      />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{movie.Title}</h1>
        <MovieItemDescription label="Year" value={movie.Year} row />
        <MovieItemDescription label="Rated" value={movie.Rated} row />
        <MovieItemDescription label="Runtime" value={movie.Runtime} row />
      </div>
    </div>
  );
};
