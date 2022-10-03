import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Test } from "../compoonents/Test";
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Test />
      {/* <Component {...pageProps} />{" "} */}
    </ApolloProvider>
  );
}

export default MyApp;
