// conditional statements
// if (condition/expression){
//     //body / action to be performed
// }
const isloggedin = false;
if (isloggedin){
    console.log("Hello I am from GFG");
}

const readlineSync = require("readline-sync");
// const user_age = readlineSync.question("How old are You..???");
// if(user_age > 18){
//     console.log("You are an adult...!");
// }
// else{
//     console.log("you are not an andult..!");
// }

const number = Number(readlineSync.question("Enter a numner :"));
if(number % 3 == 0){
    console.log("Fizzz")
}
else if (number % 5 == 0){
    console.log("buxxzz");
}
else{
    console.log("hellow orld...!");
}