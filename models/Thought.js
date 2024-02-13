const { Schema, model } = require('mongoose');
const Reactionschema = require('./Reaction');
const Thoughtschema = new Schema({
    thoughttext: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },

    createdAt: {
        type: Date,
        default: Date.now(),
        // get: timestamp => dayjs(timestamp).format("MM/DD/YYYY")

    },

    username:
    {
        type: String,
        required: true
    },

    reactions: [Reactionschema]

}, {
    toJSON: {
        virtuals: true,
        getters: true
    }
})

Thoughtschema.virtual("reactionCount").get(function () {
    return this.reactions.length
})

const Thought = model("Thought", Thoughtschema);

module.exports = Thought;