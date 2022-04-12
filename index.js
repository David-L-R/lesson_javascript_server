// import express
const express = require("express");
const users = require("./users.json");

// create server
const app = express();

app.get("/", (req, res) => {
  return res.send({ users: users.length });
});

app.get("/male", (req, res) => {
  return res.send({
    users: users.filter((user) => user.gender === "male").length,
  });
});

app.get("/email/:email", (req, res) => {
  const { email } = req.params;

  return res.send({
    user: users.filter((user) => user.email === email),
  });
});

app.get("/filter", (req, res) => {
  const { gender } = req.query;

  return res.send({
    user: users.filter((user) => user.gender === gender),
  });
});

// 3000 is common
const PORT = 3000;

// start listening on port 3000
app.listen(PORT, () => {
  console.log("server running on port: " + PORT);
});
