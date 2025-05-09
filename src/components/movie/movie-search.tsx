"use client";

import { GET_MOVIE } from "@/utils/grapqhl/movies";
import { Movie } from "@/types/movie";
import { MovieItem } from "./movie-item";
import { DataComponent } from "../common/data-component";
import { SearchParams } from "../common/search-params";

export function MovieSearch() {
  return (
    <SearchParams
      searchKey="movie-name"
      label="Movie Name"
      subLabel="Enter Name of Movie"
      render={(search) => (
        <DataComponent<Movie>
          graphqlQuery={GET_MOVIE}
          dataKey="movieByName"
          variables={{ name: search }}
          render={(data) => <MovieItem movie={data} className="mt-8" />}
        />
      )}
    />
  );
}
