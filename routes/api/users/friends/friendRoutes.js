const router = require("express").Router();

const {
    createFriend,
    deleteFriend
} = require("../../../../controllers/friendController");

router.route("/")
    .post(createFriend)
    .delete(deleteFriend);

module.exports = router;