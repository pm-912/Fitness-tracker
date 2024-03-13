const { User, Workout } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
  Query: {
    allWorkouts: async () => {
      return await Workout.find().populate('workoutUser');
    },

    myWorkouts: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('workouts');

        return user.workouts
      }

      throw AuthenticationError;
    },

    singleWorkout: async (parent, { _id }, context) => {
      // if (context.user) {
        const workout = await Workout.findById(_id).populate('comments').populate('workoutUser');

        return workout;
      //  }
      // throw AuthenticationError
    },

  },

  Mutation: {
    login: async (parent, { username, email, password }) => {
      const user = await User.findOne({ $or: [{ email }, { username }]});

      if (!user) {
        throw AuthenticationError;
      };
      
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      const token = signToken(user);

      return { token, user };
    },

    addWorkout: async (parent, args, context) => {
      const { title, details, type, duration } = args
      if (context.user) {
        const newWorkout = await Workout.create({ title, details, type, duration });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { workouts: newWorkout._id } }
        );

        return newWorkout;
      }

      throw AuthenticationError
    },

    updateWorkout: async (parent, args, context) => {
      const { _id, title, details, type, duration } = args
      if (context.user) {
        return await Workout.findByIdAndUpdate(
          _id,
          { title: title, details: details, type: type, duration: duration },
          { new: true }
        );
      }

      throw AuthenticationError;
    },

    deleteWorkout: async (parent, { _id }) => {
      return Workout.findOneAndDelete({ _id: _id });
    },

    addComment: async (parents, { workoutId, commentText, commentAuthor }) => {
      return Workout.findOneAndUpdate(
        { _id: workoutId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    deleteComment: async (parent, { workoutId, commentId }) => {
      return Workout.findOneAndUpdate(
        { _id: workoutId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    }
  }
};

module.exports = resolvers;