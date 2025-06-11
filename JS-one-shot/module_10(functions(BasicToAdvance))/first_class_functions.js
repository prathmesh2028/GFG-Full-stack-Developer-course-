/**
 * first class function
 * 
 * A programming language is said to have a first class function
 * if functions is that language are treated like other variables.
 * So the functions can be assigned to any other variable or passed 
 * as a arguement or can be returned by another function.
 * 
 */









// const greetMessage = function (){
//     console.log("Hello Coding World...!");
// };
// greetMessage();




// #1

// function wrapper(){
//     console.log("welcome to GFG....!");
// }


// function greetMessage(inner, name){
//     let message = inner();
//     console.log(name, message)
// }


// greetMessage(wrapper , "PRATHMESH");




// #2

function greetMessage(){
    function wrapper(){
        let name = "PRAKASH";
        console.log(name, "welcome to GFG");
    }
    return wrapper
}


const output = greetMessage();
// console.log(output());
output();

//same work can be done by doing
greetMessage()();
//we get the same output here also :)
