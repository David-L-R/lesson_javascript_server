const express = require("express");

const app = express();

// GET all users

// GET a user by id

// GET all user by a specific gender (/users/:gender)

// GET all users that are above 30 years old and have green eyes (/users/:color)

// GET user by name, no matter in which case it is written (upper or lower or both)

// Add error handling

// Send HTML

app.listen(4000, () => {
  console.log("server running on port", 4000);
});
