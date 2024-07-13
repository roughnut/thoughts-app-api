const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const friendRoutes = require("./friends");

router.use("/", userRoutes);
// router.use("/:userId/friends/:friendId", friendRoutes);

module.exports = router;
