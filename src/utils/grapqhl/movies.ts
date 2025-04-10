import { gql } from "@apollo/client";

export const MOVIE_DETAILS = `
    Title
    Year
    Rated
    Released
    Runtime
    Genre
    imdbID
    Poster
`;

export const GET_MOVIE = gql`
  query MovieByName($name: String) {
    movieByName(name: $name) {
      ${MOVIE_DETAILS}
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
  query MovieById($imdbId: String) {
    movieById(imdbId: $imdbId) {
      ${MOVIE_DETAILS}
    }
  }
`;
