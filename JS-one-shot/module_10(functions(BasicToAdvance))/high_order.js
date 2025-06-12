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



// const output = displayMessage();
// output();









// const arr = [1,2,3,4,5,6];

// function squareOfNumber(arr){
//     let squareNumbers = [];
//     for(let number of arr){
//         squareNumbers.push(number**2);
//     }
//     return squareNumbers;
// }


// const output = squareOfNumber(arr);
// console.log(output);


const arr = [1,2,3,4,5,6];



function square(number){
    return number**2;
}


function cube(number){
    return number**3;
}



function calculatePower(wrapper, arr){
    let TempArr = [];
    for(let number of arr){
        TempArr.push(wrapper(number));
    }
    return TempArr;
}

const squareOfNumbers = calculatePower(square, arr);
console.log(squareOfNumbers);
const cubeOfNumbers = calculatePower(cube, arr);
console.log(cubeOfNumbers);


