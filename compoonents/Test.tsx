import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { createGameMutation } from "../graphql/mutations";
import { getStore, getStores } from "../graphql/queries";

export const Test = () => {
  let id = "steam";

  const { data: { stores } = {}, loading } = useQuery(getStores);

  const { data: { store } = {}, refetch } = useQuery(getStore, {
    variables: { id },
  });

  console.log(store);

  const [createGame] = useMutation(createGameMutation);

  return (
    <div>
      <button
        onClick={async () => {
          const { data } = await createGame({
            variables: {
              opts: {
                name: "The last of us part II",
                store_id: id,
                price: "98.66",
              },
            },
          });
          if (data) {
            console.log(data);
            refetch({ id: data.CreateGame.store_id });
          }
        }}
      >
        CLick!
      </button>
    </div>
  );
};
