const express = require("express")

const deadpool = express()

deadpool.use(express.json())

deadpool.get("/",(request,response) => {
  return response.json("Bye World")
})

deadpool.get("/b2/:id",(req,res) =>
{
  studs = [{
    id : 1 ,
    name : "Sai"
  },
  { 
    id : 2 ,
    name : "Karthik"
  },
  {
    id : 3 ,
    name : "M"
  }
]
  studId = req.params.id
  getData = studs.filter((i) => parseInt(studId) === i.id)
  if(getData.length == 0 ) return res.json("No student found")

  return res.json(getData)
})

deadpool.listen(5000,() => console.log("Getting started 🚀"))


//
