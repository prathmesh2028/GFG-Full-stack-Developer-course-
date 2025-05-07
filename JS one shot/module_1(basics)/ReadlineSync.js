//ReadlineSync something like that

/*
this is a multiline comment int he javascript
soo now

read data from the user :)
*/

const ReadlineSync = require("readline-sync");
const username = ReadlineSync.question("May I know your name, please...?");
console.log("welcome to the geeks for geeks Mr "+username);
//AVOID THE ABOVE METHOD AS MANY TIMES AS YOU CAN DO :)
console.log(`welcome to the geeks for geeks Mr ${username}`);

//Asking for the user for the age
const userage = ReadlineSync.question(`dear ${username} kindly enter your age here :`);

console.log(`hello finally dear Mr. ${username} and finally your age is as follows  ${userage}`);


console.log("End of the Code :)")