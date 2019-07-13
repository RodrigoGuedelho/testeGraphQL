import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./services/apollo";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App = () => (
  <ApolloProvider client={client}>
    <>
      <UserForm />
      <UserList />
    </>
  </ApolloProvider>
);

export default App;
