"use client";

/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/types/movie";
import { useRouter } from "next/navigation";
import { ClickableText } from "../common/clickable-text";
import { DescriptionLine } from "../common/description-line";
// import { useLogin } from "@/hooks/use-login";

interface MovieItemProps {
  movie: Movie;
  className?: string;
}

export const MovieItem = ({ movie, className }: MovieItemProps) => {
  const router = useRouter();
  // const login = useLogin();
  return (
    <div className={`${className} flex justify-center`}>
      <div className="flex flex-col">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-64 h-64 mb-4 rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <DescriptionLine label="Title" value={movie.title} />
          <DescriptionLine label="Genre" value={movie.genre} />
          <DescriptionLine label="Year" value={movie.year} />
          <DescriptionLine label="Plot" value={movie.plot} />
        </div>
        <div className="mt-4">
          <ClickableText
            onClick={() => {
              // login();
              router.push(`/movie/${movie.imdbId}`);
            }}
            text="View Details"
          />
        </div>
      </div>
    </div>
  );
};
