/**
 * Global and local variables
 * Global , local and block scope
 */


var a = 3; //global
function showNumber(){
    console.log(a);   //no error gives o/p as 3
    var y=5; //local
    console.log(y); //gives o/p 5
};

// console.log(y);    //error 
// showNumber();






//block

{
    let a = 3;
    var b= 5; // var declaration has the global scope not a global variable
    console.log(a);
    console.log(b);
}  
console.log(a);
console.log(b);
