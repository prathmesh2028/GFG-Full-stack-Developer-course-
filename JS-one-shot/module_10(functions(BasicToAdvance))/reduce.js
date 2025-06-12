// REDUCE 
// most important as such


const arr = [1,2,3,4,5,6,7,8,9,10];

const reducerFun = (acc, curr) => acc + curr ;
 
const output = arr.reduce(reducerFun);
console.log(output);
