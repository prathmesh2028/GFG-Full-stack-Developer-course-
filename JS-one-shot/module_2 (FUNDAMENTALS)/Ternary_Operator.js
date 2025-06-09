/* Here is the ternary operator :) */

//code for the marks of the student passing criteria

const marks = 50 ;



//using the if , else if and else conditional operators...
// if (marks >= 90){
//     console.log("Genius...!");
// }
// else if(marks >= 80 && marks < 90){
//     console.log("Grade A");
// }
// else if (marks >= 70 && marks < 80){
//     console.log("Grade B");
// }
// else if(marks >= 60 && marks < 70){
//     console.log("Grade C");
// }
// else{
//     console.log("Unfortunately You are failed...!");
// }



//using the ternary operator here :)
const result =  (marks >= 90) ? "Genius" : (marks >= 80 && marks < 90) ? "Grade A" : (marks >= 70 && marks < 80) ? "Grade B" : (marks >= 60 && marks < 70) ? "Grade C" : "Unfortunately you are failed...!" ;
console.log(`hello dear....!\nyour result is as follows\n${result}`);