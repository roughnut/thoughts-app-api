const { User, Thought } = require("../models");

module.exports = {
  // create new reaction
  async createReaction(req, res) {
    try {
      const { thoughtId } = req.params;
      console.log(thoughtId);
      const { reactionBody, username } = req.body;
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        {
          $push: {
            reactions: {
              reactionBody,
              username,
            },
          },
        },
        { new: true, runValidators: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ message: "Thought not found" });
      }
      res.status(200).json(updatedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to create reaction" });
    }
  },
  // delete reaction
  async deleteReaction(req, res) {
    const { thoughtId, reactionId } = req.params;
    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        {
          $pull: {
            reactions: { _id: reactionId },
          },
        },
        {
          new: true,
        }
      );
      res.status(200).json({ message: "Reaction deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete reaction" });
    }
  },
};
