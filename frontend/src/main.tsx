import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import {
  HttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://127.0.0.1:8000/graphql", // Your Django GraphQL endpoint
    credentials: "include", // ✅ This sends the cookies (e.g., sessionid)
  }),
  cache: new InMemoryCache(),
  defaultContext: {
    fetch,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
);
