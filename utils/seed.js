const connection = require("../config/connection");
const { User, Thought } = require("../models");
const seedData = require("./data");

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
    }
// seed the database
    const userData = await User.create(seedData);
    console.table(seedData);
    

    console.info("Database seeded");
  } catch (error) {
    console.error("Database seeding error", error);
  } finally {
    process.exit(0);
  }
});
