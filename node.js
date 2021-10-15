const fileSystem = require("fs/promises")


// create a file
const fileLesson = async () => {
 await fileSystem.writeFile("file.txt","Hello World")
console.log(await fileSystem.readFile("file.txt","utf8"))
await fileSystem.unlink("file.txt")
}
fileLesson()
