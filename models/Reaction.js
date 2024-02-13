const { Schema, Types } = require('mongoose')

const Reactionschema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => {
            new Types.ObjectId();
        }
    },


    reactionBody: {
        type: String,
        required: true,
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



}, {
    toJSON: {
        virtuals: true,
        getters: true
    }
});

module.exports = Reactionschema;