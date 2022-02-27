console.log("Hello world");

const http = require("http");
const path = require("path");
const fs = require("fs");

x = fs.readFileSync('./', "utf8");
const server = http.createServer((request, response) => {
  console.log(request.url);
  response.write(`<h1>Bye World</h1>`);
  response.end();
});

server.listen(3000, function () {
  console.log("server is running");
});
