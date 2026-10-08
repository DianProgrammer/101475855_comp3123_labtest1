//Q2 : Make resolvedPromise function & rejectPromise function

//Make function [resolvedPromise] 
//Type of Function : Arrow function
const resolvedPromise = () => {

    //Make Promise with success and failure
    return new Promise((success, failure) => {

        //Base on response & timeout => show success or failure
        setTimeout(() => {

            //show success
            success({ message: 'delayed success!' });

        //wait for 500ms   
        }, 500);
       });
};

//-----------------------------------------------------------------

//Make function [rejectedPromise]
//Type of Function : Arrow function
const rejectedPromise = () => {

    //Make Promise with success and failure
    return new Promise((success, failure) => {

        //Base on response & timeout => show success or failure
        setTimeout(() => {

            //show failure
            failure({ error: 'delayed exception!' });

        //wait for 500ms   
        }, 500);
       });
};


//-----------------------------------------------------------------

//call function [resolvedPromise]
resolvedPromise()
    //if promise is success then show output
    .then((output) => {
        console.log(output);
    })
    //if promise is failure then show error
    .catch((error) => {

        //print error in console
        console.error(error);
    });

//call function [rejectedPromise]
rejectedPromise()
    //if promise is success then show output
    .then((output) => {
        console.log(output);
    })
    //if promise is failure then show error
    .catch((error) => {

        //print error in console
        console.error(error);
    });