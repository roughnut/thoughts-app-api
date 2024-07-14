const router = require("express").Router();
const userRoutes = require("./userRoutes");
const friendRoutes = require("./friends");

router.use("/friends/", friendRoutes);
router.use("/", userRoutes);

module.exports = router;
