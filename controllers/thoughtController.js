const { User, Thought } = require("../models");

module.exports = {
  // get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (error) {
      console.error("Error fetching thoughts: ", error);
      res
        .status(500)
        .json({ message: "Server error while fetching thoughts." });
    }
  },
  // get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        res.status(404).json({message: "Thought not found."});
        return;
      }
      res.json(thought);
    } catch (error) {
      console.error("Error fetching thought: ", error);
      res.status(500).json({ message: "Server error while fetching thought." });
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
        const thoughtfulUser = await User.findOne({_id: req.body.userId});
              if (!thoughtfulUser) {
                res.status(404).json({ message: "User not found." });
                return;
              }
        const newThought = await Thought.create(req.body);
        thoughtfulUser.thoughts.push(newThought._id);
        await thoughtfulUser.save();
        res.status(201).json(newThought);
    } catch (error) {
      console.error("Error creating thought: ", error);
      res.status(500).json({ message: "Server error while creating thought." });        
    }
  },
  // delete a thought
  async deleteThought(req, res) {
    try {
        const deletedThought = await Thought.deleteOne({_id: req.params.thoughtId});
        if (deletedThought.deletedCount === 0) {
            res.status(404).json({message: "Thought not found."});
            return;
        }
        res.status(200).json({message: "Thought successfully deleted."});
    } catch (error) {
      console.error("Error deleting thought: ", error);
      res.status(500).json({ message: "Server error while deleting thought." });  
    }
  },
  async updateThought(req, res) {
    try {
        const updatedThought = await Thought.updateOne(
            {_id: req.params.thoughtId},
            {$set: req.body}
        );
        res.status(200).json(updatedThought);
    } catch (error) {
      console.error("Error updating thought: ", error);
      res.status(500).json({
        message: "Server error while updating thought.",
      });        
    }
  }
};
