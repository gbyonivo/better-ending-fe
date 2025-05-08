import { GET_MOVIE_BY_ID } from "@/utils/grapqhl/movies";
import { DataComponent } from "./common/data-component";
import { useMemo } from "react";
import { Movie } from "@/types/movie";

interface Props {
  imdbId: string;
}

export const MoviePlot = ({ imdbId }: Props) => {
  const variables = useMemo(() => ({ imdbId }), [imdbId]);
  return (
    <DataComponent<Movie>
      graphqlQuery={GET_MOVIE_BY_ID}
      variables={variables}
      render={(data) => <div>{data.plot}</div>}
      dataKey="movieById"
    />
  );
};
