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
        }
    }
`;

export const QUERY_MY_WORKOUTS = gql`
    query myWorkouts($workoutId: ID!) {
        myWorkouts(_id: $workoutId) {
            _id
            title
            type
        }
    }
`;

export const QUERY_SINGLE_WORKOUT = gql`
    query singleWorkout($_id: ID!) {
        singleWorkout(_id: $_id) {
            _id
            title
            details
            type
            duration
        }
    }
`;
// create queries file for front end use
// allworkouts, myworkouts, singleworkout