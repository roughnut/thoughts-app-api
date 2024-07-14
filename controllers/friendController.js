const { User } = require("../models");

module.exports = {
  // add new friend
  async addFriend(req, res) {
    const { userId, friendId } = req.params;

    try {
      const user = await User.findById(userId);
      const newFriend = await User.findById(friendId);

      if (!user || !newFriend) {
        return res
          .status(404)
          .json({ message: "User or new friend not found." });
      }

      await User.findByIdAndUpdate(userId, {
        $push: { friends: friendId },
      });

      res.status(200).json({ message: "Friend added" });
    } catch (error) {
      console.error("Error adding friend: ", error);
      res.status(500).json({
        message: "Server error while adding friend.",
      });
    }
  },
  // delete a friend
  async deleteFriend(req, res) {
    const { userId, friendId } = req.params;

    try {
      const user = await User.findById(userId);
      const friendToDelete = await User.findById(friendId);

      if (!user || !friendToDelete) {
        return res.status(404).json({ message: "User or friend not found." });
      }

      await User.findByIdAndUpdate(userId, {
        $pull: { friends: friendId },
      });

      res.status(200).json({ message: "Friend deleted" });
    } catch (error) {
      console.error("Error deleting friend: ", error);
      res.status(500).json({
        message: "Server error while deleting friend.",
      });
    }
  },
};
