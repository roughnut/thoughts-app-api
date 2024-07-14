const router = require("express").Router();

const {
    addFriend,
    deleteFriend
} = require("../../../../controllers/friendController");

router.route("/:userId/:friendId")
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;