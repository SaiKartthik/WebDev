var value = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("hello world")},3000)
})
console.log(value)

setTimeout(() => {
  console.log(value);
},5000)
