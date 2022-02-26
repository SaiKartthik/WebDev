// var x = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
var body = document.querySelector("body");
var head = document.querySelector("h1");
var lst = document.querySelector("ul");
var ill = ["Dey", "Hads", "hfsguyg"];
var table = document.querySelector("table");

var x = fetch("https://jsonplaceholder.typicode.com/users")
  .then((req) => req.json())
  .then((data) => {
    
    for (user of data) {
      let newRow = document.createElement("tr");
      var templ = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
      `
      newRow.innerHTML = templ
      table.appendChild(newRow);
      
    }
    
  });
