const router = require("express").Router();
const reactionRoutes = require("./reactionRoutes");

router.use("/", reactionRoutes);

module.exports = router;