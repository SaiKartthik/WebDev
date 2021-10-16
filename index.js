const express = require("express")

const deadpool = express()

deadpool.get("/",(request,response) => {
  return response.json("Bye World")
})

deadpool.listen(5000,() => console.log("Getting started 🚀"))
