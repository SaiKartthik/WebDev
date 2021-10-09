//Js async await

var attend = false;

const test = new Promise((resolve,reject) =>
{
  setTimeout(function() {
  if(attend) resolve("we attended the concert")
  else reject("we failed to attend")
}, 1000);
});

// test.then((data) => console.log(data)).catch((data) => console.log(data))

const getconcertresult = async () => {
  try{
    const getresult = await test;
    console.log(getresult);}
  catch(error){
  console.log(error);
}};
getconcertresult();
