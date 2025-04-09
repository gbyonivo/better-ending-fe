/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/types/movie";
import { MovieItemDescription } from "./movie-item-description";

interface MovieItemProps {
  movie: Movie;
  className?: string;
}

export const MovieItem = ({ movie, className }: MovieItemProps) => {
  return (
    <div className={`${className} flex justify-start`}>
      <div className="flex flex-col">
        <img src={movie.Poster} alt={movie.Title} className="w-64 h-64 mb-4" />
        <MovieItemDescription label="Title" value={movie.Title} />
      </div>
    </div>
  );
};
