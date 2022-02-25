// var x = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
var body = document.querySelector("body");
var head = document.querySelector("h1");
var lst = document.querySelector("ul");
var ill = ["Dey", "Hads", "hfsguyg"];

var x = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    var appenddata = (datareq) => {
        var ele = datareq['name'] + " " + datareq['username'] + datareq['email']
        var element = document.createElement("li");
        var textNode = document.createTextNode(ele);
        element.appendChild(textNode);
        lst.appendChild(element);
    }
    data.forEach(appenddata)
    console.log(data);
  });
