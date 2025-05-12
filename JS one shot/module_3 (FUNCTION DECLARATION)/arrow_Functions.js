//ARROW FUNCTION HERE


//regular function here
let calculatesum = function(x,y){
    return x+y;
};
console.log(calculatesum(10,10)); //20




//arrow function here
let arrowFN = (x,y) => {
    return x + y ;
};
console.log(arrowFN(10,10));



//simpleifed arrow function
let calculate_sum = (x,y) => x + y;
console.log(calculate_sum(10,10)); //20



//if only one paramater then the parenthesis can be omitted
// e.g
let square = x => x*x ;
console.log(square(10));



//for no parameters empty parenthesis are sued
let greet = () => console.log("hello jii");
greet();





//Arrow Functions and Lexical this
function person(){
    this.age = 0;
    setInterval(() => {
        this.age++ ; //this refers to the persons object
        console.log(this.age);
    },1000)
}


// let p = new person();



//ADVANCED ARROW FUNCTIONS
//Conditional Logic in Arrow Functions
let sumordiff = (x,y) => {
    if(x>y){
        return x+y;
    }
    else{
        return x-y;
    }
};
console.log(sumordiff(11,10));
console.log(sumordiff(11,19));
// the same using the ternary operators
let sumdiff = (x,y) => x>y ? x+y : x-y ;
console.log(sumdiff(11,19));





//array methods
let numbers = [1,2,3,4,5,6,7,8,9,10];
let squares = numbers.map(x => x**2);
console.log(squares);
