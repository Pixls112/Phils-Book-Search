const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
                return userData;
            }
            throw new AuthenticationError('Not logged in')
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const userData = await User.findOne({ email });
      
            if (!userData) {
              throw new AuthenticationError('Incorrect email');
            }
            const correctPw = await userData.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password');
            }
            const token = signToken(userData);
            return { token, userData };
          },
          addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
      
            return { token, user };
          },
          saveBook: async (parent, { book }, context) => {
            if (context.user) {
                const saveBook = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet:{savedBook: book }},
                    { new:true }
                )
                return saveBook
            }
            throw new AuthenticationError('Not logged in')
          },
          removeBook: async (parent, { bookId }, context) => {
            if (context.user)  {
                const removeBook = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull:{ savedBook: { bookId: bookId }}},
                    {new:true}
                )
                return removeBook
            }
            throw new AuthenticationError('Not logged in')
          }
    }
}

module.exports = resolvers;



    
