import { gql } from '@apollo/client';

export const QUERY_ALL_WORKOUTS = gql`
    query allWorkouts {
        allWorkouts {
            _id
            title
            details
            type
            duration
            createdAt
            workoutUser {
                username
                _id
            }
        }
    }
`;

export const QUERY_MY_WORKOUTS = gql`
    query myWorkouts($workoutId: ID!) {
        myWorkouts(_id: $workoutId) {
            _id
            title
            type
            duration
            createdAt
        }
    }
`;

export const QUERY_SINGLE_WORKOUT = gql`
    query singleWorkout($id: ID!) {
        singleWorkout(_id: $id) {
          _id
          title
          details
          duration
          createdAt
          type
          workoutUser {
            _id
            username
          }
          comments {
            _id
            commentText
            createdAt
            commentAuthor {
                _id
                username
            }
          }
        }
      }
`;

export const QUERY_ME = gql`
    query Query {
        me {
        _id
        username
        email
        password
        workouts {
            _id
            createdAt
            title
            type
        }
        }
    }
`
// create queries file for front end use
// allworkouts, myworkouts, singleworkout