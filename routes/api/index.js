const router = require('express').Router();
const courseRoutes = require('./thought_routes');
const studentRoutes = require('./user_routes');

router.use('/thoughts', courseRoutes);
router.use('/users', studentRoutes);

module.exports = router;
