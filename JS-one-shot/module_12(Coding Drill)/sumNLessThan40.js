// sum of numbers less than 40


const arr = [10,17,61,54,44,32,39,23];







//Simple method
// let sum = 0;
// for(let number of arr){
//     if(number <= 40){
//         sum+=number;
//     }
// }
// console.log(sum)







//filter method
// const numbers = arr.filter(n => n < 40);
// let sum = 0;
// for(let number of numbers){
//     sum+=number;
// }
// console.log(sum);






//reduce method

const numbers = arr.reduce((a,b) => b < 40 ? a+b  : a);

console.log(numbers);