const { User, Thought } = require("../models");

module.exports = {
  // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users: ", error);
      res.status(500).json({ message: "Server error while fetching users." });
    }
  },
  // get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findById( req.params.userId )
        .populate("thoughts")
        .populate("friends");

      if (!user) {
        res.status(404).json({message: "User not found."});
        return;
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching user: ", error);
      res.status(500).json({
        message: "Server error while fetching user.",
      });
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user: ", error);
      res.status(500).json({
        message: "Server error while creating user.",
      });
    }
  },
  // update a user
  async updateUser(req, res) {
    try {
      const updatedUser = await User.updateOne(
        { _id: req.params.userId },
        { $set: req.body }
      );
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating user: ", error);
      res.status(500).json({
        message: "Server error while updating user.",
      });
    }
  },
  // delete a user (and associated thoughts)
  async deleteUser(req, res) {
    try {
      // first get the user
      const userToDelete = await User.findById(req.params.userId);
      if (!userToDelete) {
        return res.status(404).json({message: "No such user"});
      }
      // next delete their thoughts
      await Promise.all(userToDelete.thoughts.map(async (thoughtId) => {
        await Thought.findByIdAndDelete(thoughtId);
      }));
      // now delete the user
      await User.findByIdAndDelete(req.params.userId);

      res.status(200).json({ message: "User and any user thoughts deleted" });
    } catch (error) {
      console.error("Error deleting user: ", error);
      res.status(500).json({
        message: "Server error while deleting user.",
      });
    }
  },
};
