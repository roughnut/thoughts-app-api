const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {usersSeed, thoughtsSeed, friendsSeed} = require("./data");

connection.on("error", (err) => {
  console.error("Database connection error:", err);
});

connection.once("open", async () => {
  // delete collections if they exist
  try {
    let userCheck = await connection.db
      .listCollections({ name: "users" })
      .toArray();
    if (userCheck.length) {
      await connection.db.dropCollection("users");
      console.info("users collection dropped");
    }
    let thoughtCheck = await connection.db
      .listCollections({ name: "thoughts" })
      .toArray();
    if (thoughtCheck.length) {
      await connection.db.dropCollection("thoughts");
      console.info("thoughts collection dropped");
    }
    // seed the database
    const userData = await User.create(usersSeed);
    console.table(usersSeed);
    const thoughtData = await Thought.create(thoughtsSeed);
    console.table(thoughtsSeed);

    // now seed the users collection with the friendsSeed object
    // Add friends to each user
    for (const [username, friends] of Object.entries(friendsSeed)) {
      const user = await User.findOne({username});

      if (user) {
        for (const friendName of friends) {
          const friend = await User.findOne({username: friendName});
          if (friend) {
            user.friends.push(friend._id);
          }
        }
        await user.save();
      }
    }

    // add each user's thoughts to users collection
    for (const thought of thoughtsSeed) {
  
      const userThought = await Thought.findOne({thoughtText: thought.thoughtText});

      if (userThought) {
        // need to query the thoughts collection to get the thought._id for each user thought
         const user = await User.findOne({username: userThought.username});
        user.thoughts.push(userThought._id);
        await user.save();
        console.log(user);
      }
    }

    console.info("Database seeded");
  } catch (error) {
    console.error("Database seeding error", error);
  } finally {
    process.exit(0);
  }
});
