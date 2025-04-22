import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation LoginGoogleMutatio($token: String) {
    loginGoogle(token: $token) {
      email
    }
  }
`;
