console.log("Hello world");

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.write("Bye world");
  response.end();
});

server.listen(3000, function () {
  console.log("server is running");
});
