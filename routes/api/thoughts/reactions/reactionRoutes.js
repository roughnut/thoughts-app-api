const router = require("express").Router();

const {
    createReaction,
    deleteReaction
} = require("../../../../controllers/reactionController");

// /api/thoughts/:thoughtId/:reactionId
router.route("/:thoughtId/:reactionId")
    .delete(deleteReaction);

// /api/thoughts/reactions/:thoughtId

router.route("/:thoughtId")
    .post(createReaction);

module.exports = router;