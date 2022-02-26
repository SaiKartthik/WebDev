// var x = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

var fetchData = async() =>{
  var x = await fetch("https://jsonplaceholder.typicode.com/users")
  data = await x.json()
  console.log(data)
}

fetchData()