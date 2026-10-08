//Make function [lowerCaseWords] => input : [mixed array]
//Type of function : Arrow function 
const lowerCaseWords = (mixedArray) => {

    //Make Promise with success and failure
    return new Promise((success, failure) => {
        
        //if Statement => check input is Array or not
        if(Array.isArray(mixedArray)){

            //Make new array that make all words in lower case
            const outputArray = mixedArray

            //filter : just choose string type values
            .filter((value) => typeof value === 'string')

            //map : make all string values in lower case
            .map((value) => value.toLowerCase());

            //show output
            success(outputArray);
        }

        //if input is not array then show error
        else{

            //show error
            failure('Input is not an array');
            return;
        }
    });
};

//array with defined values
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

//The output we want to see:
//["pizza", "wings"]


//call function 
lowerCaseWords(mixedArray)
    //if promise is success then show output
    .then((output) => {
        console.log(output);
    })

    //if promise is failure then show error
    .catch((error) => {
        console.log(error);
    });