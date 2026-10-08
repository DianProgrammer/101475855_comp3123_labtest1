//Q3 - Make fs & path module & for loop & if statement
//Make fs module
const fs = require('fs');

//Make path module
const path = require('path');

//Make filePath variable with path of current directory & directory name[Logs]
//we make path of the Logs directory in current directory
const filePath = path.join(process.cwd(), 'Logs');

//if Statement to check if filePath is exist or not
if (!fs.existsSync(filePath)) {

    //if filePath is not exist then make directory with filePath
    fs.mkdirSync(filePath);
}

//Change the current working directory to filePath
process.chdir(filePath);

//for loop to iterate 10 times
//Goal : Make 10 files with name [log0.txt, log1.txt, log2.txt, log3.txt, log4.txt, log5.txt, log6.txt, log7.txt, log8.txt, log9.txt]
for (let i = 0; i < 10; i++) {

    //make file name with log + i + .txt
    const fName = `log${i}.txt`;

    //Make file with file name & write data in it
    fs.writeFileSync(fName, `This is log file  ${i}`);

    //Print file name in console
    console.log(fName);
}   

