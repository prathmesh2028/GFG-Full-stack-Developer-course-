//Spread array

const arr = [1,2,3,4,5];
// console.log("array :" , arr);
// console.log(...arr); //generally do the unpacking of the array


const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8,9];
const arr3 = [...arr1 ,10,11,12, ...arr2];
console.log(arr3);