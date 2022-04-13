![server](https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=968/wp-content/uploads/waiters-day.jpg)

# Servers

## Recap

### Fundamentals

- data types (`string`, `boolean`, `number`, `object`, `array`, `undefined`, `null`)
- variables (`let` and `const`)
- ternary operator (`condition ? true : false`)
- conditional (`if (something) { do this }`)
- Truthy and Falsy (`0`, `''`, `null`, `undefined` vs {}`, `[]`)
- functions

### Collections (Objects and Arrays)

- Accessing items (`array[0]`)
- Accessing properties (`object.prop` or `object["prop"]`)
- Loops (for, forEach)
- `.find`, `.filter`, `.map`
- Object destructuring (`const { name, age } = user`)

## Lectures's Goals

1. Understand basic web architecture 🏗️.
1. Know how to use code written by others with NPM 👺.
1. Know how to create an `Node` server using `Express` 🤖.
1. Know how to make request to a server and how to send a response 💁‍♂️.

## 1. Web Architecture

![web architecture](https://darvishdarab.github.io/cs421_f20/assets/images/client-server-1-d85a93ea16590c10bed340dd78294d0d.png)

A Server - A machine that waits for requests and sends responses.

A Client - An application that request data (and web pages). Usually something like a browser.

## 2. GIT

![git flow](https://s3.eu-west-1.amazonaws.com/cd.sseu.re/items/E0ugREX8/fd81ecc0-b3b0-4502-9b09-c93ea5dad5ea.jpg?v=96f3df2586995c9be735ece68312b171?v=96f3df2586995c9be735ece68312b171)

- stage
- commit
- push
- pull
- branch (advanced)
- ignoring files `.gitignore`
- clone

## 3. Use External Code

![npm](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png)

- install npm (`npm install -g npm`)
- `npm -v`
- `npm install <package_name>`
- running the program (`node <file_name>`)
- add and run script

## 4. Create an Express Server

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="node" width="50%"/>

- Create an express server
- Run and listen on port
- `localhost:3000`

## 5. Make a request and receive a response

- RESTAPI (Create, Read, Update, Delete)
- `GET`, `POST`, `PUT/PATCH`, `DELETE`
- `app.get` a route
- return a string

## 2nd Lecture

- install nodemon
- scripting
- GET information from server
- Create several routes
- Use parameters
- Use queries
- Error handling
