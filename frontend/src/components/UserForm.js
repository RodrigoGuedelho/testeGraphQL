import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const createUserMutation = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
    }
  }
`;
// import { Container } from './styles';

export default class UserForm extends Component {
  state = {
    newUser: "",
    name: "",
    email: ""
  };
  handleSubmit = (e, createUser) => {
    e.preventDefault();
    const { name, email } = this.state;
    console.log(
      createUser({
        variables: { name, email }
      })
    );
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, email } = this.state;
    return (
      <Mutation mutation={createUserMutation}>
        {createUser => (
          <form onSubmit={e => this.handleSubmit(e, createUser)}>
            <input name="name" value={name} onChange={this.handleChange} />
            <input name="email" value={email} onChange={this.handleChange} />
            <button type="submit">Salvar</button>
          </form>
        )}
      </Mutation>
    );
  }
}
