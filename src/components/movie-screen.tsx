"use client";

import { GET_MOVIE_BY_ID } from "@/utils/grapqhl/movies";
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { MovieHeader } from "./movie-header";
import { MovieEndingOrPoem } from "./movie-ending-or-poem";

export const MovieScreen = () => {
  const params = useParams();
  const { data, loading, error } = useQuery(GET_MOVIE_BY_ID, {
    variables: { imdbId: params.id as string },
  });
  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:py-8">
      <div className="col-span-2 col-start-2 w-full rounded-lg flex flex-col gap-4">
        <MovieHeader movie={data.movieById} />
        <MovieEndingOrPoem />
      </div>
    </div>
  );
};
