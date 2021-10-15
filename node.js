const fileSystem = require("fs/promises") ;

//appending a file
const fileLesson = async () => {
  await fileSystem.appendFile("file.txt","Sai Karthik");
}
fileLesson()
