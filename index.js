// import express
const express = require("express");

// create server
const app = express();

app.get("/", (req, res) => {
  return res.send("hello world");
});

// 3000 is common
const PORT = 3000;

// start listening on port 3000
app.listen(PORT, () => {
  console.log("server running on port: " + PORT);
});
