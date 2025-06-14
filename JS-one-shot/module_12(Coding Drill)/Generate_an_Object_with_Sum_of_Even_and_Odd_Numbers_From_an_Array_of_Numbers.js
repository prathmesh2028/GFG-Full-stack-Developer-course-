/**
 * Given an array write a funciton that returns an object with the sum of even and odd numbers
 * arr = [1,2,3,4,5,6]
 * OUTPUT - {even: 12 , odd: 9}
 */



const arr = [1,2,3,4,5,6];
const even = arr.filter(num => num % 2 === 0).reduce((acc,curr) => acc + curr);
const odd = arr.filter(num => num % 2 !== 0).reduce((acc,curr) => acc + curr);
console.log({"Even":even , "odd":odd})




//another more easy and simpler than this is that
const ReducerFunction = (acc,curr) => curr % 2 === 0 ? {...acc , even:acc.even + curr} : {...acc , odd:acc.odd + curr} ;
const result = arr.reduce(ReducerFunction, {even: 0 , odd: 0});
console.log(result)