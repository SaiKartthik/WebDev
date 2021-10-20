const books = [{
  ISBN : "12345Book" ,
  title :"saika books" ,
  pubDate : "2021-10-10" ,
  language : "en" ,
  numPage : 250 ,
  author : [1,2] ,
  publications : [1] ,
  category : ["Nothing", "Testing","tech"]

}
]

const author = [{
  id: 1 ,
  name : "sai",
  books : ["12345Book"]
},
{
    id: 1 ,
    name : "karthik",
    books : ["12345Book"]
}]

const publications = [{
  id : 1 ,
  name : "writeX" ,
  books : ["12345Book"]
}]

module.exports = {books, author, publications}


//
