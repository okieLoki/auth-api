const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'First Name missing']
    },
    lastname: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email missing']
    },
    password: {
        type: String,
        required: [true, 'Password missing']
    },
    token: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User