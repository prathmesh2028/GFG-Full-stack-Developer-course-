//Array sort

// const fruits = ["apple","cherry","banana","pineapple","kivi"];
// fruits.sort();
// console.log(fruits);

// const numbers = [6,7,8,9,1,2,3,4,5,1,11,64,55];
// numbers.sort();
// console.log(numbers);
//numbers doees not behave as same like the array of the string




//solving the above problem of the numbers :)
const numbers = [6,7,8,9,1,2,3,4,5,1,11,64,55];

function ascending(a,b){
    return a-b;
}
numbers.sort(ascending);
console.log(numbers);

function decending(a,b){
    return b-a;
}
numbers.sort(decending);
console.log(numbers);