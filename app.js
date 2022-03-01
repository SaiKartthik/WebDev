const names = [
  {Name : "Sai"},
  {Name : "Karthik"},

]

const express = require("express");
const app = express();

app.get('/public', (req, res) => {
  res.send("This is Public");
})

isAdmin = (req, res, next) => {
  if(req.headers.admin === 'true') next();
  else res.send("You are not authorised")
}
app.get('/private',isAdmin, (req, res) => {
  res.send("Welcome to Admin routes");
})


app.listen(3000, function () {
  console.log("server is running");
});

