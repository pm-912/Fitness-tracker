const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        workouts: [Workout]
    }

    type Workout {
        _id: ID!
        title: String!
        details: String!
        date: Date
        type: String!
        duration: String
        comments: [Comment]
    }

    type Comment {
        _id: ID!
        date: Date
        author: User!
        content: String!
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        allWorkouts(_id: ID!): [Workout]
        myWorkouts(_id: ID!): [Workout]
        singleWorkout(_id: ID!): Workout
    }

    type Mutation {
        login:
        addUser:
        addWorkout:
        updateWorkout:
        deleteWorkout:
        addComment:
        deleteComment:
    }

`

module.exports = typeDefs