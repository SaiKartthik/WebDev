const http = require("http")


http.createServer((request,response) => {
  response.end("yooo boo")
}).listen(5000)
