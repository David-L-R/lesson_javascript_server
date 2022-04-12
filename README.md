![server](https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=968/wp-content/uploads/waiters-day.jpg)

# Servers

## Recap

### Basics

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

1. Understand basic web architecture.
1. Know how to use code written by others with NPM.
1. Know how to create an `Node` server using `Express`
1. Know how to make request to a server and how to send a response

## 1. Web Architecture

![web architecture](https://darvishdarab.github.io/cs421_f20/assets/images/client-server-1-d85a93ea16590c10bed340dd78294d0d.png)

A Server - A machine that waits for requests and sends responses.

A Client - An application that request data (and web pages). Usually something like a browser.

## 2. Use External Code

- install npm (`npm install -g npm`)
- `npm -v`
- `npm install <package_name>`
- running the program (`node <file_name>`)
- add and run script

## 3. Create an Express Server

- Create an express server
- Run and listen on port
- `localhost:3000`

## 4. Make a request and receive a response

- CRUD Operations - Create, Read, Update, Delete - `GET`, `POST`, `PUT/PATCH`, `DELETE`
- `app.get` a route
- return a string

## 2nd Lecture

- GET information from server
- Create several routes
- Use parameters
- Use queries
