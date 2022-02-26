var body = document.querySelector("body");
var head = document.querySelector("h1");
var lst = document.querySelector("ul");
var ill = ["Dey", "Hads", "hfsguyg"];

var x = fetch("https://corona.lmao.ninja/v2/continents?yesterday=true&sort")
  .then((res) => res.json())
  .then((data) => {
    var appenddata = (datareq) => {
      var ele = datareq["cases"] + " " + datareq["todayCases"] + datareq["deaths"];
      var element = document.createElement("li");
      var textNode = document.createTextNode(ele);
      element.appendChild(textNode);
      lst.appendChild(element);
    };
    data.forEach(appenddata);
    console.log(data);
  });

