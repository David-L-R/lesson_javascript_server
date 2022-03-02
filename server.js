const express = require("express");

const app = express();

// 3000 is common
const PORT = 3000;

app.get(
  "/:name/:world", // route to listen on
  (req, res) => {
    const { name, world } = req.params;

    res.status(200).send(`
    <h1>hello world</h1>
    <h2>Welcome back ${name}</h2>
    <p>We invite to join the ${world} world</p>
  `);
  }
);

app.get(
  "/hello", // route to listen on
  (req) => console.log(req.method) // handler function
);

// start listening on PORT 3000
app.listen(
  PORT, // TCP port where the server listens
  () => console.log(`Listening on: ${PORT}`) // confirmation function
);
