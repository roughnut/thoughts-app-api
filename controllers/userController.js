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
      const user = await User.findOne({ _id: req.params.userId });
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
  // delete a user
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.deleteOne({ _id: req.params.userId });
      if (deletedUser.deletedCount === 0) {
        res.json({message: "No such user"});
        return;
      }
      res.status(204).json({ message: "User deleted" });
    } catch (error) {
      console.error("Error deleting user: ", error);
      res.status(500).json({
        message: "Server error while deleting user.",
      });
    }
  },
};
