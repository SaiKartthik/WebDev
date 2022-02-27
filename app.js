var button = document.querySelector(".button");
var input = document.querySelector(".input");
var div = document.querySelector("div");

list = [1, 2, 3, 4];
div.innerHTML = JSON.parse(localStorage.getItem(input));
y = JSON.parse(localStorage.getItem(input));
console.log(list);
console.log(list);
button.addEventListener("click", () => {
  div.innerHTML = input.value;
  list.push(input.value);
  localStorage.setItem("input", JSON.stringify(list));
});
