import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
        mutation login(
            $username: String
            $email: String
            $password: String! 
        ) {
        login(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
            $username: String!
            $email: String!
            $password: String!
        ) {
            addUser(
                username: $username
                email: $email
                password: $password
            ) {
                token
                user {
                    _id
                    username
                }
        }
    }
`;

export const ADD_WORKOUT = gql`
    mutation addWorkout(
            $workoutId: ID!
            $commentText: String!
            $commentAuthor: String!
        ) {
            addWorkout(
                workoutId: $workoutId
                commentText: $commentText
                commentAuthor: $commentAuthor
            ) {
                _id
                title
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

export const UPDATE_WORKOUT = gql`
    mutation updateWorkout(
        $_id: ID!
    ) {
        updateWorkout(
            _id: $_id
        ) {
            _id
            title
            details
            type
            duration
            createdAt
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
        $commentId: ID! {
            deleteComment(
                workoutId: $workoutId
                commentId: $commentId
            ) {
                _id
                title
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