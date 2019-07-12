import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
// import { Container } from './styles';

const UserQuery = gql`
  query {
    users {
      id
      name
    }
  }
`;

export default class UserList extends Component {
  render() {
    return (
      <Query query={UserQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Carregando...</p>;
          if (loading)
            return <p>Erro de sistema, entre em contato com o suporte.</p>;
          return (
            <ul>
              {data.users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}
