const router = require("express").Router();
const friendRoutes = require("./friendRoutes");

router.use("/", friendRoutes);

module.exports = router;