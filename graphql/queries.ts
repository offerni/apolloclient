import { gql } from "@apollo/client";

const gamesFragment = gql`
  fragment GameFields on Game {
    id
    store_id
    name
    price
  }
`;

export const getStores = gql`
  ${gamesFragment}
  query GetStores {
    stores {
      id
      name
      games {
        ...GameFields
      }
    }
  }
`;

export const getStore = gql`
  ${gamesFragment}
  query GetStore($id: String!) {
    store(id: $id) {
      id
      name
      games {
        ...GameFields
      }
    }
  }
`;
