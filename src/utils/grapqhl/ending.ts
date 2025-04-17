import { gql } from "@apollo/client";

export const GET_MOVIE_ENDING = gql`
  query MovieEnding($imdbId: String) {
    endings(imdbId: $imdbId) {
      ending
      plot
      aiName
    }
  }
`;
