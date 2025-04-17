"use client";

/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/types/movie";
import { MovieItemDescription } from "./movie-item-description";
import Link from "next/link";

interface MovieItemProps {
  movie: Movie;
  className?: string;
}

export const MovieItem = ({ movie, className }: MovieItemProps) => {
  return (
    <div className={`${className} flex justify-center`}>
      <div className="flex flex-col">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-64 h-64 mb-4 rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <MovieItemDescription label="Title" value={movie.title} />
          <MovieItemDescription label="Genre" value={movie.genre} />
          <MovieItemDescription label="Year" value={movie.year} />
          <MovieItemDescription label="Plot" value={movie.plot} />
        </div>
        <div className="mt-4">
          <Link
            href={`/movie/${movie.imdbId}`}
            className="text-xs text-white/50"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
