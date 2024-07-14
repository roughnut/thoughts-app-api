const router = require("express").Router();
const thoughtRoutes = require("./thoughtRoutes");
const reactionRoutes = require("./reactions");

router.use("/", thoughtRoutes);
router.use("/reactions", reactionRoutes);

module.exports = router;