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

function getCookie(name: string): string {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : "";
}

const link = new HttpLink({
    uri: "http://127.0.0.1:5173/graphql",
    credentials: "same-origin",
    headers: {
        "X-CSRFTOKEN": getCookie("csrftoken"),
    }
});


const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
    connectToDevTools: true,
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
