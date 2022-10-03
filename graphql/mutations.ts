import { gql } from "@apollo/client";

export const createGameMutation = gql`
  mutation CreateGame($opts: NewGame!) {
    CreateGame(opts: $opts) {
      id
      name
      store_id
      price
    }
  }
`;
