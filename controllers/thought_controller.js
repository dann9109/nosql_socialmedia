const { User, Thought } = require("../models")


module.exports = {
    async getThoughts(req, res) {
        const allThoughts = await Thought.find()
        res.json(allThoughts)
    }
}