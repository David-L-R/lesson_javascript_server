// we use the code from the library
// we need "require(<name_library>)"
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("hello world");
});

app.get("/user", (req, res) => {
  res.send("David, 35, Father of 2");
});

const PORT = 3000;

// once the server is working
// let me know (console.log) that it is working
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
