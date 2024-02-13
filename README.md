# Social Network API

## Description
This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It is built using Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents
Table of Contents
Installation
Usage
Walkthrough Video
License
Questions


## Usage 
Start the server and sync the Mongoose models to the MongoDB database by running the following command:
npm start
Open Insomnia or any other tool for testing API routes.
Use the following API routes to interact with the application:

## API Routes
###Users
GET /api/users: Get all users.
GET /api/users/:userId: Get a specific user by ID.
POST /api/users: Create a new user.
PUT /api/users/:userId: Update an existing user by ID.
DELETE /api/users/:userId: Delete a user by ID.

### Thoughts
GET /api/thoughts: Get all thoughts.
GET /api/thoughts/:thoughtId: Get a specific thought by ID.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:thoughtId: Update an existing thought by ID.
DELETE /api/thoughts/:thoughtId: Delete a thought by ID.

### Reactions
POST /api/thoughts/:thoughtId/reactions: Create a reaction to a thought by ID.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Delete a reaction to a thought by ID.

### Friends
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.

### DELETE 
/api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

## Questions
If you have any questions or need support, please contact me email me at danielxstella@gmail.com
