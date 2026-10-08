//Q3 - remove.js : [make fs & path module & for loop & if statement]

//Make fs module
const fs = require('fs');

//Make path module
const path = require('path');

//Make filePath variable with path of current directory & directory name[Logs]
//we make path of the Logs directory in current directory
const filePath = path.join(process.cwd(), 'Logs');

//if Statement to check if filePath is exist or not
if (fs.existsSync(filePath)) {

    //Read all files in the directory with filePath
    const files = fs.readdirSync(filePath);

    //for loop to iterate all files in the directory
    for (const file of files) {

        //Make file name with filePath & file name
        const fName = path.join(filePath, file);

        //print file name in console
        console.log(`delete files...${file}`);

        //Delete file with file name
        fs.unlinkSync(fName);
      }
      
        //Delete directory with filePath
        fs.rmdirSync(filePath);

    } 
