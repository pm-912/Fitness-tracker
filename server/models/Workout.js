const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');



const workoutSchema = new Schema({

    title: {
        type: String,
        trim: true,
        require: true
    },

    details: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    duration: {
        type: String,
    },

    workoutUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },

    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 300
            },

            commentAuthor: {
                type: String,
                required: true
            },

            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp)
            }
        }
    ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;