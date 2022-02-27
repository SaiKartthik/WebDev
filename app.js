fs = require('fs')
fs.readFile('./file.txt','utf8',(error, data) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})

console.log(fs.readFileSync('./file.txt', 'utf8'))

fs.writeFileSync('./file.txt',"Hello World")