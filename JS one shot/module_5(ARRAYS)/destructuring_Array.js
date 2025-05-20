//destructuring the array

const numbers = [1,2,3,4,5];

// const [a,b,c,courses] = [1,2,3,["HTML","CSS","JS"]];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(courses);



const [courses , ...rest] = [["HTML","CSS","JS"],1,2,3,4,5,["a","c","v","f"]];
console.log(rest);
console.log(courses);


//swapping of the numbers
let a=5;
let b=6;
[a,b] = [b,a];
console.log(a)
console.log(b)