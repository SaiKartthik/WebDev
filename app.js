var button = document.querySelector("button")
var input = document.querySelector("input")
var list = document.querySelector("ul")
console.log(button,input,list)

const callbackfunc = (event) => {
  const inputval = input.value
  const element  = document.createElement("li")
  const textnode = document.createTextNode(inputval)
  element.appendChild(textnode)
  list.appendChild(element)

}

button.addEventListener("click",callbackfunc)
