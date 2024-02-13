const router = ('express').Router();

const { Thought } = require('../../models');


// Create a thought
router.post('/thoughts', async (req, res) => {
    try {
        const thought = await Thought.create(req.body);

        res.json(thought);
    } catch (err) {
        console.log(err)
    }
});

// Get all thoughts
router.get('/thoughts', async (req, res) => {
    try {
        const thoughts = await Thought.find();

        res.json(thoughts);
    } catch (err) {
        console.log(err);
    }
});

// Get thought by ID
router.get('/thoughts/:thought_id', async (req, res) => {
    try {
        const thought = Thought.findById(req.params.thought_id);

        if (!thought) return res.status(404).json({
            message: 'Thought with ID not found'
        });
    } catch (err) {
        console.log(err);
    }
});

// Update a single thought
router.put('/thoughts/:thought_id', async (req, res) => {
    const { thought, reaction, } = req.body;

    try {
        if (thought) {
            const thought = await User.findByIdAndUpdate(req.params.thought_id, {
                $set: {
                    email: email
                }
            }, { new: true });

            res.json(user);
        }
    } catch (err) {
        console.log(err);
    }
});


