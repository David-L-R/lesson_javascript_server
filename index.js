// we use the code from the library
// we need "require(<name_library>)"
const express = require("express");
const users = require("./users.json");

const app = express();

// to welcome the user
app.get("/", (request, response) => {
  response.send("welcome to my app");
});

// to present all users
// RESTAPI - GET
app.get("/users", (request, response) => {
  response.send(users);
});

// send a single user
app.get("/users/:id", (request, response) => {
  // read the id
  // find a single user using the id
  // params = {id: "..."}
  // destructing
  const { id } = request.params;

  /* old javascript
  const id = request.params.id;
  const name = request.params.name;
  const age = request.params.age;
  const isAdult = request.params.isAdult;
*/
  // new JS
  //  const {id, name, age, isAdult} = request.params

  // find a single user
  const user = users.find((user) => user._id === id);

  // ERROR HANDLING
  // if there is NO user
  // user === undefined
  // undefined === falsy
  if (!user) {
    return response.send({ error: "no user was found" });
  }

  response.send(user);
});

app.get("/email/:email", (request, response) => {
  const { email } = request.params;
  // find a single user
  const user = users.find((user) => user.email === email);
  response.send(user);
});

app.get("/search", (request, response) => {
  // read gender
  // male or female
  // filter users by gender
  const { gender, isActive } = request.query;

  const filteredUsers = users
    .filter((user) => user.gender === gender)
    .filter((user) => user.isActive == JSON.parse(isActive));

  // if .filter filtered everything => get back []
  // filteredUsers.length === 0 => empty array
  if (filteredUsers.length === 0) {
    return response.send({ error: "no user was found" });
  }

  response.send(filteredUsers);
});

app.get("/choose/gender/female", (request, response) => {
  const filteredUsers = users.filter((user) => user.gender === "female");

  response.send(filteredUsers);
});

app.get("/gender/:gender", (request, response) => {
  const { gender } = request.params;

  const filteredUsers = users
    .filter((user) => user.gender === gender)
    .filter((user) => user.isActive);

  response.send(filteredUsers);
});

app.get("/gender/notactive/:gender", (request, response) => {
  const { gender } = request.params;

  const filteredUsers = users
    .filter((user) => user.gender === gender)
    // ! is the opposite
    // if isActive === false
    // !isActive === true
    .filter((user) => !user.isActive);

  response.send(filteredUsers);
});

const PORT = 3000;
