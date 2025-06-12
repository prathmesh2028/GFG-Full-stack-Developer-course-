//Odd to even and vice versa

const arr = [2,3,4,5,6,7,8,9];

const result = arr.map(number => number % 2 === 0 ? number -1 : number +1);
console.log(result)