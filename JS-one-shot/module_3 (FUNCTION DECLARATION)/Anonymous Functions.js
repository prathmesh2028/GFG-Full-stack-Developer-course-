//syntax for creating the anonymous function
//When you assign an anonymous function to a variable, it is known as a function expression. 
let anonymousfunction = function(){
     return "Hello world...!";
}

console.log(anonymousfunction());
console.log(typeof(anonymousfunction))

//Also it do not support the hoisting
// i.e that means we cannot access it before declaring it:)



//Named annonymuos function
let greet = function greet(){
    console.log("Hello jii....!");
}
greet();
//this is useful for the recursion and debugging






//inside the function name can be used for the recursive calls

//function for the factorial of a number


let factorial = function facto(n){
    if (n == 1 || n== 0){
        return 1;
    }
    else{
        return n * facto(n-1);
    }
}
console.log(factorial(5));

//Anonymous functions are commonly used as callback functions, especially in asynchronous operations like event handling, timers, or AJAX requests.
//for eg
setTimeout(function(){
    console.log("This is an callback function....!");
},4000  //timer set to 4s i.e 4000ms
);




//Immediately Invoked Function Expressions (IIFE)
// An IIFE is a function that is executed immediately after it is defined. This is often used to create a new scope to avoid polluting the global scope.


(function(){
    console.log("IIFE executed immediately....!");
})();





//Event Handlers
// Anonymous functions are frequently used in event handling for adding interactivity to web pages.
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});