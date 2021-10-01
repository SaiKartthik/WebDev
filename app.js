var button = document.querySelector("button")
var body = document.querySelector("body")

const callbackfunc = (event) => {
  body.classList.toggle("dark")

}

button.addEventListener("click",callbackfunc)
