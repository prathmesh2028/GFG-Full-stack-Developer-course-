//while loop here
// let i=1;
// while(i<10){
//     console.log(i);
//     i++;
// }



//do while loop here

// let i=0;
// do{
//     console.log(i);
//     i++
// }while(i>10)
// it executes at least once at least





//if n>50 ask user to enter less than that
 const readlinesync = require("readline-sync");
 let number = readlinesync.question("Enter the number less than 50 here :");
//  console.log(number);
 while(number>=50){
    number = readlinesync.question("Kindly enter less than 50 :")
 }
 console.log("number accepted..!")
