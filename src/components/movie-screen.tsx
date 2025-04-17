"use client";

import { GET_MOVIE_BY_ID } from "@/utils/grapqhl/movies";
import { useParams } from "next/navigation";
import { MovieHeader } from "./movie-header";
import { MovieEndingOrPoem } from "./movie-ending-or-poem";
import { Movie } from "@/types/movie";
import { DataComponent } from "./elements/data-component";

export const MovieScreen = () => {
  const params = useParams();
  const imdbId = params.id as string;

  return (
    <DataComponent<Movie>
      graphqlQuery={GET_MOVIE_BY_ID}
      variables={{ imdbId: params.id as string }}
      dataKey="movieById"
      Component={({ data }) => (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:py-8">
          <div className="col-span-2 col-start-2 w-full rounded-lg flex flex-col gap-4">
            <MovieHeader movie={data} />
            <MovieEndingOrPoem imdbId={imdbId} />
          </div>
        </div>
      )}
    />
  );
};
