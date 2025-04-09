import { gql } from "@apollo/client";

export const MOVIE_DETAILS = gql`
  fragment MovieDetails on Movie {
    Title
    Year
    Rated
    Released
    Runtime
    Genre
    Director
    Writer
    Actors
    Plot
    Language
    Country
    Awards
    Poster
    Ratings
    Metascore
    imdbRating
    imdbVotes
    imdbID
    Type
    DVD
    BoxOffice
    Production
    Website
    Response
  }
`;

export const GET_MOVIE = gql`
  query MovieByName($name: String) {
    movieByName(name: $name) {
      Title
      Year
      imdbID
      Type
      Poster
    }
  }
`;
