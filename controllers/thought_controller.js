const { User, Thought } = require("../models")





async function getThoughts(req, res) {
    try {
        const thoughts = await Thought.find();

        res.json(thoughts);
    } catch (err) {
        console.log(err);
    }
}

async function getOneThought(req, res) {
    try {
        const thought = await Thought.findOne({ _id: req.params.thought_id });

        if (!thought) return res.status(404).json({
            message: 'Thought with ID not found'
        });
        res.json(thought)
    } catch (err) {
        console.log(err);
    }
}

async function createThought(req, res) {
    try {
        const thought = await Thought.create(req.body);


        res.json(thought)
    } catch (err) {
        console.log(err);
    }
}

async function updateThought(req, res) {


    try {

        const updatedThought = await Thought.findByIdAndUpdate({ _id: req.params.thought_id },
            {
                $set: req.body
            },
            { new: true });

        res.json(updatedThought);



    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })

    }
}

async function deleteThought(req, res) {
    try {
        await Thought.findOneAndDelete({ _id: req.params.thought_id });

        res.json({
            message: 'Thought deleted successfully!'
        });
    } catch (err) {
        console.log(err);
    }
}

async function addReaction(req, res) {
    try {
        await Thought.findOneAndUpdate({ _id: req.params.thought_id }, { $addToSet: { reactions: req.body } }, { new: true });

        res.json({
            message: 'Reaction added successfully!'
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = { getThoughts, getOneThought, createThought, updateThought, deleteThought, addReaction }