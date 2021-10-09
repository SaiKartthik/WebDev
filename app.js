var attend = false;

const test = new Promise((resolve,reject) =>
{
  setTimeout(function() {
  if(attend) resolve("we attended the concert")
  else reject("we failed to attend")
}, 1000);
});

test.then((data) => console.log(data)).catch((data) => console.log(data))
