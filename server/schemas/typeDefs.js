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
        details: String
        createdAt: String
        workoutUser: User
        type: String
        duration: String
        comments: [Comment]
    }

    type Comment {
        _id: ID!
        createdAt: String
        commentAuthor: User!
        commentText: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        allWorkouts: [Workout]
        myWorkouts(_id: ID!): [Workout]
        singleWorkout(_id: ID!): Workout
        me: User
    }

    input WorkoutArgs {
       
        title: String
        details: String
        type: String
        duration: String
    }

    type Mutation {
        login(username: String, email: String, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addWorkout(input: WorkoutArgs): Workout
        updateWorkout(args: WorkoutArgs): Workout
        deleteWorkout(_id: ID!): Workout
        addComment(workoutId: ID!, commentText: String!, commentAuthor: String!): Comment
        deleteComment(workoutId: ID!, commentId: ID! ): Workout
    }

`

module.exports = typeDefs