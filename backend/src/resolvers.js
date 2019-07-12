const User = require("./app/models/User");

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },

  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email }),
    deleteUser: (_, { id }) => User.findByIdAndDelete(id)
  }
};
