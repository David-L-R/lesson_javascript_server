const express = require("express");

const app = express();

// 3000 is common
const PORT = 3000;

app.get(
  "/", // route to listen on
  (req, res) =>
    res.status(200).send(`
    <h1>hello world</h1>
    <h2>Some other title</h2>
    <p>hello to you to</p>
  `)
);

app.get(
  "/hello", // route to listen on
  (req) => console.log(req.method) // handler function
);

// start listening on PORT 3000
app.listen(
  PORT, // TCP port where the server listens
  () => console.log(`Listening on :${PORT}`) // confirmation function
);
