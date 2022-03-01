// console.log("Hello world");

// const http = require("http");
// const path = require("path");
// const fs = require("fs");

// x = fs.readFileSync('./index.html');
// const server = http.createServer((request, response) => {
//   console.log(request.url);
//   response.write(x);
//   response.end();
// });

// server.listen(3000, function () {
//   console.log("server is running");
// });

const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Hello World")
})

app.listen(3000, function () {
  console.log("server is running");
})