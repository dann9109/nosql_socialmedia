const { Schema, model } = require('mongoose');

const Userschema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, "Must be a valid email"]
    },

    thoughts:
        [{
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }],

    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]

}, {
    toJSON: {
        virtuals: true
    }
})

Userschema.virtual("friendCount").get(function () {
    return this.friends.length
})

const User = model("User", Userschema)

module.exports = User;