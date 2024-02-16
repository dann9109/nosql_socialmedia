const { User, Thought } = require("../models")



async function getAllusers(req, res) {
    const allUsers = await User.find()
    res.json(allUsers)
}

async function addFriend(req, res) {
    await this.updateOne(
        { _id: userId },
        { $addToSet: { friends: friendId } }
    );
}

async function removeFriend(req, res) {
    await this.updateOne(
        { _id: userId },
        { $pull: { friends: friendId } }
    );
}


module.exports = {
    getAllusers, addFriend, removeFriend
}




