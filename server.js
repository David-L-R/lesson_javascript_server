const express = require("express");

const app = express();

// console.log("server running on port", 4000);

// REST
// request => data
// humburger => food
// "user info" => { name: "david" }

// "/" => route
app.get("/", (requset, response) => {
  //   console.log("we are here!");
  response.send("hello world");
});

app.get("/user", (requset, response) => {
  //   console.log("we are here!");

  const user = {
    name: "david",
    age: 35,
    kids: "too many",
  };

  response.send(user.name);
});

app.listen(4000, () => {
  console.log("server running on port", 4000);
});
