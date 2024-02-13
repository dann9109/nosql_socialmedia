const router = require('express').Router();

const { User } = require('../../models/');


// Create a user
router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.json(user);
    } catch (err) {
        console.log(err);
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (err) {
        console.log(err);
    }
});

// Get one user by ID
router.get('/users/:user_id', async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id);

        if (!user) return res.status(404).json({
            message: 'User with ID not found'
        });

        res.json(user);
    } catch (err) {
        console.log(err);
    }
});

// Update a single user
router.put('/users/:user_id', async (req, res) => {
    const { email, password, newPassword } = req.body;

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
});

// Delete a user
router.delete('/users/:user_id', async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.user_id });

        res.json({
            message: 'User deleted successfully!'
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;