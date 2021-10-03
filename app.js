var num1 = document.querySelectorAll('input')[0]
var num2 = document.querySelectorAll('input')[0]
var addb = document.querySelector('#addB')
var mulb = document.querySelector('#mulb')
var resultbox = document.querySelector('.resultbox')

function sum(){
    var result = parseInt(num1.value) + parseInt(num2.value)
    resultbox.innerHTML = result
}
function mul()
{
  var result1 = parseInt(num1.value) * parseInt(num2.value)
  resultbox.innerHTML = result1
}

mulb.addEventListener('click',mul)
addb.addEventListener('click',sum)
