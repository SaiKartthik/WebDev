const express = require("express")
//Initialization
const database = require("./database")

const booky = express();

/*
Route               /
Description         Get book with ISBN
Access              Public
Parameter           None
Methods             Get
*/

booky.get("/",(req, res) => {
  return res.json({books: database.books})

})

/*
Route               /
Description         Get book with ISBN
Access              Public
Parameter           isbn
Methods             Get
*/

booky.get("/is/:isbm", (req, res) => {
  var bookID = req.params.isbm
  const getspecificbook = database.books.filter((book) => book.ISBN == bookID)
  if(getspecificbook.length == 0 )
  {
      return res.json(`No book found with ISBN of ${(bookID)}`)

  }
  else
  {
    return res.json(getspecificbook)
  }
})

/*
Route               /
Description         Get book based on category
Access              Public
Parameter           category
Methods             Get
*/

booky.get("/c/:category",(req, res) => {
  var bookcat = req.params.category
  const getspecificbook = database.books.filter((book) => book.category.includes(bookcat) )
  if(getspecificbook.length == 0 )
  {
      return res.json(`No book found in category ${(bookcat)} `)

  }
  else
  {
    return res.json(getspecificbook)
  }
} )

/*
Route               /l
Description         Get book based on category
Access              Public
Parameter           lan
Methods             Get
*/

booky.get("/l/:lan",(req, res) => {
  var booklan = req.params.lan
  const getspecificbook = database.books.filter((book) => book.language.includes(booklan) )
  if(getspecificbook.length == 0 )
  {
      return res.json(`No book found in  ${(booklan)} language `)

  }
  else
  {
    return res.json(getspecificbook)
  }
} )

/*
Route               /author
Description         Get all authors
Access              Public
Parameter           None
Methods             Get
*/

booky.get("/author", (req, res) => {
    return res.json(database.author)
})

/*
Route               /author/book
Description         Get all authors based on books
Access              Public
Parameter           None
Methods             Get
*/

booky.get("/author/book/:isbn", (req, res) =>
{
  var bookisbn = req.params.isbn
  const getspecificbook = database.author.filter((author) => author.books.includes(bookisbn))
  if(getspecificbook.length == 0)
  {
      return res.json(error)

  }
  else{
  return res.json(getspecificbook)
}
})

booky.listen(3000,() => console.log("Server is running 👀"))


//
