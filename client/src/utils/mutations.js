import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_WORKOUT = gql`
    mutation addWorkout($title: String!) {
        addWorkout(title: $title) {
            _id
            title
            workoutUser
            details
            type
            duration
            createdAt
            comments {
                _id
                commentText
                commentAuthor
                createdAt
            }
        }
    }
`;

export const DELETE_WORKOUT = gql`
    mutation deleteWorkout(
        $_id: ID!
    ) {
        deleteWorkout(
            _id: $_id
        ) {
            _id
            title
            workoutUser
            details
            type
            duration
            createdAt
            comments {
                _id
                commentText
                commentAuthor
                createdAt
            }
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment(
        $workoutId: ID!
        $commentText: String!
        $commentAuthor: String!
    ) {
        addComment(
            workoutId: $workoutId
            commentText: $commentText
            commentAuthor: $commentAuthor
        ) {
            _id
            title
            workoutUser
            details
            type
            duration
            createdAt
            comments {
                _id
                commentText
                commentAuthor
                createdAt
            }
        }
    }
`;

export const DELETE_COMMENT = gql`
    mutation deleteComment(
        $workoutId: ID! 
        $commentText: String!
        $commentAuthor: String! {
            deleteComment(
                workoutId: $workoutId
                commentText: $commentText
                commentAuthor: $commentAuthor
            ) {
                _id
                title
                workoutUser
                details
                type
                duration
                createdAt
                comments {
                    _id
                    commentText
                    commentAuthor
                    createdAt
            }
        }
    )
`;
// create file that exports mutations for client side use
// Login, AddUser, AddWorkout, DeleteWorkout, AddComment, DeleteComment