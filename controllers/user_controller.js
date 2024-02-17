const { User, Thought } = require("../models")


async function createUser(req, res) {
    try {
        const user = await User.create(req.body);

        res.json(user)
    } catch (err) {
        console.log(err);
    }
}

async function getAllusers(req, res) {
    try {
        const users = await User.find();

        res.json(users);
    } catch (err) {
        console.log(err);
    }
}

async function getUserbyId(req, res) {
    try {
        const user = await User.findById(req.params.user_id);

        if (!user) return res.status(404).json({
            message: 'User with ID not found'
        });

        res.json(user);
    } catch (err) {
        console.log(err);
    }
}

async function updateUser(req, res) {
    try {
        if (email) {
            const user = await User.findByIdAndUpdate(req.params.user_id, {
                $set: {
                    email: email
                }
            }, { new: true });

            res.json(user);
        }

        if (password) {
            const user = await User.findById(req.params.user_id);

            if (!user) return res.status(404).json({
                message: 'User with ID not found'
            });

            // Check if old password is correct
            const pass_valid = await user.validatePass(password);

            if (!pass_valid) return res.status(401).json({
                message: 'The old password is incorrect'
            });

            user.password = newPassword;

            user.save();

            res.json(user);
        }

    } catch (err) {
        console.log(err);
    }
}

async function deleteUser(req, res) {
    try {
        await User.deleteOne({ _id: req.params.user_id });

        res.json({
            message: 'User deleted successfully!'
        });
    } catch (err) {
        console.log(err);
    }
}

async function addFriend(req, res) {
    try {
        await User.updateOne(
            { _id: user_Id },
            { $addToSet: { friends: friendId } }
        );
    } catch (err) {
        console.log(err);
    }

}

async function removeFriend(req, res) {
    try {
        await User.updateOne(
            { _id: user_Id },
            { $pull: { friends: friendId } }
        );
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    getAllusers, addFriend, removeFriend, deleteUser, updateUser, getUserbyId, createUser
}




