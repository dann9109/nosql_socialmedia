const router = require('express').Router();


const { getAllusers, addFriend, removeFriend, createUser, getUserbyId, updateUser, deleteUser } = require('../../controllers/user_controller')




// /api/users/
// Get all users// Create a user
router.route("/").get(getAllusers).post(createUser);

// Get one user by ID // Update user //Delete User
router.route('/:user_id').get(getUserbyId).put(updateUser).delete(deleteUser)




// Add a friend to a user's friend list
router.route('/:userId/friends/:friendId').post(addFriend)

// Remove a friend from a user's friend list
router.route(':userId/friends/:friendId').delete(removeFriend)

module.exports = router;