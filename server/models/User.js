const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Workout = require('./Workout');

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    workouts: [Workout.schema]
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
