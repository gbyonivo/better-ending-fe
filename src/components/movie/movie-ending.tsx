import { Ending } from "@/types/ending";
import { GET_MOVIE_ENDING } from "@/utils/grapqhl/ending";
import { MovieEndingsSwitch } from "./movie-endings-switch";
import { DataComponent } from "./common/data-component";

interface Props {
  imdbId: string;
}

export const MovieEnding = ({ imdbId }: Props) => {
  return (
    <div className="overflow-y-auto h-full">
      <DataComponent<Ending[]>
        graphqlQuery={GET_MOVIE_ENDING}
        variables={{ imdbId }}
        dataKey="endings"
        render={(data) => <MovieEndingsSwitch endings={data} />}
      />
    </div>
  );
};
