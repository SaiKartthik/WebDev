const fileSystem = require("fs/promises") ;

//appending a file rmdir and mkdir
const fileLesson = async () => {
  await fileSystem.appendFile("file.txt","Sai Karthik");
}
fileLesson()
