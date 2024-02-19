const router = require('express').Router();

const { getThoughts, getOneThought, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thought_controller');



// /api/thoughts/

// Get all thoughts
router.route("/").get(getThoughts).post(createThought);

// Get thought by ID
router.route('/:thought_id').get(getOneThought).put(updateThought).delete(deleteThought)

router.route('/:thought_id/reactions').post(addReaction)

router.route('/:thought_id/reactions/:reactionId').delete(removeReaction)

module.exports = router;
