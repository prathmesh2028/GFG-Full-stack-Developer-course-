//HIGH ORDER FUNCTIONS HERE
 /**
  * A FUNCTION THAT ACCEPTS ANOTHER FUNCTION AS AN 
  * ARGUEMENT OR RETURN FUNCTION OR DOES BOTH IS CALLED
  * AS HIGH ORDER FUNCTIONS.
*/

//FIRST CLASS FUNCTION
function wrapper(){
    return "WELCOME TO GFG";
};



//HIGHER ORDER FUNCTION
function greetMessage(wrapper){
    console.log("Prakash",wrapper());
}

// greetMessage(wrapper);




function displayMessage(){
    return function (){
        //THIS IS ALSO THE FIRST CLASS FUNCTION
        console.log("Hello from the inner function...!");
    }
}



const output = displayMessage();
output();