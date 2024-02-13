const { User, Thought } = require("../models")


module.exports = {
    async getAllusers(req, res) {
        const allUsers = await User.find()
        res.json(allUsers)
    }
}




