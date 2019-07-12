import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./services/apollo";
import UserList from "./components/UserList";
const App = () => (
  <ApolloProvider client={client}>
    <UserList />
  </ApolloProvider>
);

export default App;
