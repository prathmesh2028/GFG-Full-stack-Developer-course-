//array methods push and concat


//mutable (changed) Object or Immutable (not changed)

//push used to push any element to  the last of the array
let fruits = ["apple","banana"];
// console.log(fruits);
fruits.push("mango","kivi","berry");
// console.log(fruits);




//concat method here

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8,9];
let arr3 = [10,11,12];


let arr4 = arr1.concat(arr2);
let arr5 = arr1.concat(arr1,arr2,arr3);
console.log(arr5 , arr4);