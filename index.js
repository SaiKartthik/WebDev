const express = require("express")
//Initialization
const database = require("./database")

const booky = express();

booky.use(express.json())
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

//Adding a new book

booky.post("/book/add",(req, res) => {
  const {newBook} = req.body
  database.books.push(newBook)
  return res.json({books : database.books})
})

//adding a new author
booky.post("/author/add",(req, res) =>
{
    const {newAuth} = req.body
    database.author.push(newAuth)
    return res.json({Authors : database.author})
})

//put Methods
booky.put("/book/update/title/:isbn",(req, res) => {
    database.books.forEach((book) => {
      if(book.ISBN === req.params.isbn){
        book.title = req.body.newBookTitle
        return
      }
    })
    return res.json({books : database.books})
})

//Update/add new Author

booky.put("/book/update/author/:isbn/:authorID",(req, res) => {
  database.books.forEach((book) => {
    if(book.ISBN === req.params.isbn){
      return book.author.push(parseInt(req.params.authorID))
    }
  })

  database.author.forEach((book) => {
    if(author.id === parseInt(req.params.authorID)){
      return author.books.push(req.params.isbn)
    }
  })
  return res.json({books : database.books, author : database.author})
})

booky.listen(3000,() => console.log("Server is running 👀"))


//
